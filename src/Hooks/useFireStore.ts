import { useEffect, useState } from "react"
import {projectStore} from "../Firebase/Config"



const useFireStore =(collection : string) => {
const [loader, setLoader]= useState(false);
const [docs,setDocs] = useState<any| null>([])
useEffect(()=>{
    fetchdata(collection)
},[])


async function fetchdata(collection : string){
    console.log("come")
    setLoader(true)
    await projectStore.collection(collection)
    .orderBy("timeStamp","desc")
    .onSnapshot((snap)=>{
       setDocs(
           snap.docs.map((doc : any) =>({
               id : doc.id,
               url : doc.data().url,
               likes : doc.data().likes,
               liked : false,
           }))
       );
       setLoader(false)
    })
}

return {docs, loader}
}


export default useFireStore