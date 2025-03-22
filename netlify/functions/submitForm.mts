import type { Handler } from '@netlify/functions'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import fetch from 'node-fetch';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.FIREBASE_PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token: string) {
  try {
    // Get the secret key from environment variables
    const secretKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      throw new Error('reCAPTCHA secret key is not configured');
    }
    
    // Make a request to the Google reCAPTCHA verification API
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });
    
    const data = await response.json();
    
    // Verify the response
    if (!data.success) {
      throw new Error(`reCAPTCHA verification failed: ${data['error-codes']?.join(', ') || 'unknown error'}`);
    }
    
    // For reCAPTCHA v3, check the score (0.0 to 1.0)
    // Typically a score of 0.5 or higher is considered human
    if (data.score !== undefined && data.score < 0.5) {
      throw new Error(`reCAPTCHA score too low: ${data.score}`);
    }
    
    return true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    throw error;
  }
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    }
  }

  try {
    const { formData, collectionName, recaptchaToken } = JSON.parse(event.body || '{}')
    
    // Verify reCAPTCHA token before proceeding
    if (!recaptchaToken) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false, 
          error: 'reCAPTCHA token is required' 
        })
      }
    }
    
    try {
      await verifyRecaptcha(recaptchaToken);
    } catch (recaptchaError) {
      return {
        statusCode: 403,
        body: JSON.stringify({ 
          success: false, 
          error: recaptchaError instanceof Error ? recaptchaError.message : 'reCAPTCHA verification failed' 
        })
      }
    }
    // Submit the form data
    const docRef = await addDoc(collection(db, collectionName), {
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'new'
    });

    // Create email notification
    let emailSubject = '';
    let emailHtml = '';

    if (collectionName === 'bookings') {
      emailSubject = `New Booking Request from ${formData.name}`;
      emailHtml = `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Type:</strong> ${formData.tattooType}</p>
        <p><strong>Size:</strong> ${formData.size}</p>
        <p><strong>Placement:</strong> ${formData.placement}</p>
        <p><strong>Description:</strong> ${formData.description}</p>
        <p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>
        <p><strong>Additional Info:</strong> ${formData.additionalInfo}</p>
      `.trim();
    } else if (collectionName === 'contacts') {
      emailSubject = `New Contact Form Message from ${formData.name}`;
      emailHtml = `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `.trim();
    }

    // Add email document to mail collection
    const emailAddresses = process.env.EMAIL_ADDRESSES?.split(',') || [];
    const mailRef = await addDoc(collection(db, 'mail'), {
      to: emailAddresses,
      message: {
        subject: emailSubject,
        html: emailHtml,
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: docRef.id })
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    }
  }
} 