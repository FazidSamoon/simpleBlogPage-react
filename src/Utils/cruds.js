import db from "./firebase"
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"
import { useAuth } from "./firebase";


//submit post 

export const handleNew = async(title , content , author , id) =>{
    

    const collectionRef = collection(db, "blogs");
    const payload = {title : title , content : content , author :author , id : id , timeStamp: serverTimestamp()}
    await addDoc(collectionRef, payload);
}

            