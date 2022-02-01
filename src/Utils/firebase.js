
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth , GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"
import { useEffect, useState } from "react";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRLPodKkl2utKlSmruJwpxnnY_DjHaP-8",
  authDomain: "simpleblogpage.firebaseapp.com",
  projectId: "simpleblogpage",
  storageBucket: "simpleblogpage.appspot.com",
  messagingSenderId: "16109614713",
  appId: "1:16109614713:web:267a07c0bbfc47254506a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export default getFirestore();

//login with gmail and password

export function loginWIthEmailPassword(email, password){
    return signInWithEmailAndPassword(auth, email, password)
}


//signin with gmail provider
export function signInwithGmail(){
    return signInWithPopup(auth, provider)
    
}


//keep track of user details

export function useAuth(){
    const [currentUser , setCurrentUser] = useState();

    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth , (user) => {
            setCurrentUser(user);
        })
        return unsub;
    }, [])

    return currentUser;
}


//logout user

export function logOut(){
    return signOut(auth);
}


//create user with given gmail and password

export function createUserWithGivenEmailPassword(email , password){
    return createUserWithEmailAndPassword(auth, email , password)
}



