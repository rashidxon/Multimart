import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDQ9RaEZWVs93ZIcaKYgifbhoSSBDAx0hk",
  authDomain: "maltimart-7c081.firebaseapp.com",
  projectId: "maltimart-7c081",
  storageBucket: "maltimart-7c081.appspot.com",
  messagingSenderId: "68224062642",
  appId: "1:68224062642:web:2c2260faa5d2bdc65325ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app