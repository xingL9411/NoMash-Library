import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBRQGN7HShoYo5GlijmOvB4cSShjhtOWVI",
  authDomain: "fit5032-b0d92.firebaseapp.com",
  projectId: "fit5032-b0d92",
  storageBucket: "fit5032-b0d92.firebasestorage.app",
  messagingSenderId: "899679514659",
  appId: "1:899679514659:web:e1a1e953508938c4f88196"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db