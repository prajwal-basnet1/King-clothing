import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {getFirestore,getDoc,doc, collection, setDoc} from 'firebase/firestore'


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
export const db= getFirestore()

export const createUserProfile = async (userAuth,additionalData)=>{
  if(!userAuth) return;
  const docReference=collection(db,"users")
  const userRef=doc(docReference,`${userAuth.uid}`)
  const snapShot=await getDoc(userRef)

  if(!snapShot.exists()) {
    const {displayName,email} = userAuth
    const createdAt =new Date()
    try{
      await setDoc(userRef,{
        displayName,
        email,
        createdAt,
        ...additionalData
    })
    }
    catch(error) {
      console.log("Error creating user: "+error)
    }

  }
  return userRef
}

const provider= new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth,provider)

