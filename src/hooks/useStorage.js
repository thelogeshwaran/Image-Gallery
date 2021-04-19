import { useEffect, useState } from "react"
import firebase from "firebase"
import {projectStorage, projectStore} from "../firebase/config"

const useStorage =(file)=>{
    const[progress, setProgress] = useState(null);
    const[url, setUrl] = useState(null);
    const[error,setError]=useState(null);

    
    useEffect(()=>{
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on("state_changed",(snap)=>{
            const percentage = (snap.bytesTransferred / snap.totalBytes) *100;
            setProgress(percentage);
        },(error)=>{
            setError(error)
        },async ()=> {
            const url = await storageRef.getDownloadURL();
            projectStore.collection("images").add({
                url : url,
                likes : 0,
                liked: false, 
                timeStamp : firebase.firestore.FieldValue.serverTimestamp()
            })
            setUrl(url);
        })
    },[file])

    return { url, progress, error }
}

export default useStorage