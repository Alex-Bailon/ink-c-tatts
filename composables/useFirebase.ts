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
          const response = await fetch('/.netlify/functions/submitForm', {
            method: 'POST',
            body: JSON.stringify({ formData, collectionName }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          const result = await response.json();
          
          if (!response.ok) {
            throw new Error(result.error || 'Failed to submit form');
          }
          
          return result;
        } catch (error) {
          console.error('Error submitting form: ', error);
          return { 
            success: false, 
            error: error instanceof Error ? error.message : 'Unknown error' 
          };
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