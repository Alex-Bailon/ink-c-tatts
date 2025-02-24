import type { Handler } from '@netlify/functions'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


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

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    }
  }

  try {
    const { formData, collectionName } = JSON.parse(event.body || '{}')

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
    const mailRef = await addDoc(collection(db, 'mail'), {
      to: ['abailon949@gmail.com', 'citlalli_perez@yahoo.com'],
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