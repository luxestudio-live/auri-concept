import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBowzAapyYTkEWBPR4HASHDohmFWlR5SDA",
  authDomain: "auri-concept.firebaseapp.com",
  projectId: "auri-concept",
  storageBucket: "auri-concept.firebasestorage.app",
  messagingSenderId: "151530467886",
  appId: "1:151530467886:web:6d4129210cda589cfc65bf",
  measurementId: "G-BLZR01WD72"
}

// Initialize Firebase only if it hasn't been initialized yet
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
