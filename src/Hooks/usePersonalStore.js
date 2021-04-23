import { useEffect, useState } from "react"
import {projectStore} from "../Firebase/Config"



const usePersonalStore =(collection) => {
    
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
               userId : doc.data().userId
           }))
       );
    })
}

return {docs}
}


export default usePersonalStore