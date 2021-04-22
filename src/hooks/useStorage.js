import { useEffect, useState } from "react"
import firebase from "firebase"
import {projectStorage, projectStore} from "../Firebase/config";
import { useUser } from "../Context/UserContext";
import { usePirvacy } from "../Context/PrivacyContext";



const useStorage =(file)=>{
    const[progress, setProgress] = useState(null);
    const[url, setUrl] = useState(null);
    const[error,setError]=useState(null);
    const { user } = useUser();
    const { privacy }= usePirvacy();
    useEffect(()=>{
        
        const storageRef = privacy === "personal" ? projectStorage.ref(`users/${file.name}`) : projectStorage.ref(`images/${file.name}`)

        storageRef.put(file).on("state_changed",(snap)=>{
            const percentage = (snap.bytesTransferred / snap.totalBytes) *100;
            setProgress(percentage);
        },
        (error)=>{
            setError(error)
        },
        async ()=> {
            const url = await storageRef.getDownloadURL();
            if(privacy === "public"){
                // console.log("added in public")
                projectStore.collection("images").add({
                    url : url,
                    likes : 0,
                    liked: false, 
                    timeStamp : firebase.firestore.FieldValue.serverTimestamp()
                })
                setUrl(url);
            }else{
                // console.log("added in personal")
                projectStore.collection("users").add({
                    url : url,
                    userId :user.uid, 
                    timeStamp : firebase.firestore.FieldValue.serverTimestamp()
                })
                setUrl(url);
            }
        })
    },[file,user])

    return { url, progress, error }
}

export default useStorage