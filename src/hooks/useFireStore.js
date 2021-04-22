import { useEffect, useState } from "react"
import {projectStore} from "../Firebase/config"



const FireStore =(collection) => {
    
const [docs,setDocs] = useState([])
useEffect(()=>{
    fetchdata(collection)
},[collection])

async function fetchdata(collection){
    await projectStore.collection(collection)
    .orderBy("timeStamp","desc")
    .onSnapshot((snap)=>{
       setDocs(
           snap.docs.map((doc)=>({
               id : doc.id,
               url : doc.data().url,
               likes : doc.data().likes,
               liked : false
           }))
       );
    })
}

return {docs}
}


export default FireStore