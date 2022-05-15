// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
   authDomain: 'netflix-clone-6219b.firebaseapp.com',
   projectId: 'netflix-clone-6219b',
   storageBucket: 'netflix-clone-6219b.appspot.com',
   messagingSenderId: '556392632998',
   appId: '1:556392632998:web:4b0788e4813250ed02da67',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
