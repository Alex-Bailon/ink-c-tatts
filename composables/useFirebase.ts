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


    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const submitForm = async (formData: any, collectionName: string) => {
      try {
        const docRef = await addDoc(collection(db, collectionName), {
          ...formData,
          submittedAt: new Date(),
          status: 'new'
        })
        return { success: true, id: docRef.id }
      } catch (error) {
        console.error('Error submitting form: ', error)
        return { success: false, error }
      }
    }

    return {
      db,
      collection,
      addDoc,
      submitForm
    };
  }

  return {
    db: null,
    collection : () => {},
    addDoc : () => Promise.resolve(),
    submitForm: async () => ({ success: false, error: 'Client-side submission not supported' })
  };
}; 