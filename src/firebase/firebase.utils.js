import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBmPco22pIlJTpLkeSbEoH6bhpzD9uj1FQ",
  authDomain: "king-db-17543.firebaseapp.com",
  projectId: "king-db-17543",
  storageBucket: "king-db-17543.appspot.com",
  messagingSenderId: "40583963911",
  appId: "1:40583963911:web:30c83709f9f6ccfe9cd1a2",
  measurementId: "G-ZWES7RFWLM"
};

const app=initializeApp(firebaseConfig)

export const auth= getAuth(app)

const provider= new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth,provider)

