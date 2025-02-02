import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const useFirebase = () => {
  if (process.client) {
    const config = useRuntimeConfig()
    
    const firebaseConfig = {
      apiKey: config.public.firebase.apiKey,
      authDomain: `${config.public.firebase.projectId}.firebaseapp.com`,
      projectId: config.public.firebase.projectId,
      storageBucket: `${config.public.firebase.projectId}.firebasestorage.app`,
      messagingSenderId: config.public.firebase.messagingSenderId,
      appId: config.public.firebase.appId,
      measurementId: config.public.firebase.measurementId
    };

    try {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      const submitForm = async (formData: any, collectionName: string) => {
        try {
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

          return { success: true, id: docRef.id };
        } catch (error) {
          console.error('Error submitting form: ', error);
          return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
      };

      return {
        db,
        collection,
        addDoc,
        submitForm
      };
    } catch (error) {
      console.error('Error initializing Firebase:', error);
      throw error;
    }
  }

  return {
    db: null,
    collection: () => {},
    addDoc: () => Promise.resolve(),
    submitForm: async () => ({ success: false, error: 'Client-side submission not supported' })
  };
}; 