<<<<<<< HEAD:src/Hooks/usePersonalStore.ts
import { useEffect, useState } from "react"
import {projectStore} from "../Firebase/Config"
import { PersonalDoc } from "../Context/Types"
=======
import { useEffect, useState } from "react";
import { projectStore } from "../Firebase/Config";
>>>>>>> main:src/Hooks/usePersonalStore.js

const usePersonalStore = (collection) => {
  const [loader, setLoader] = useState(false);
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    fetchdata(collection);
  }, [collection]);

<<<<<<< HEAD:src/Hooks/usePersonalStore.ts
const usePersonalStore =(collection : string) => {
    const [loader, setLoader]= useState(false);
const [docs,setDocs] = useState<PersonalDoc[]| null>([])
useEffect(()=>{
    fetchdata(collection)
},[collection])

async function fetchdata(collection : string){
    setLoader(true)
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
       setLoader(false)
    })
}

return {docs, loader}
}


export default usePersonalStore
=======
  async function fetchdata(collection) {
    setLoader(true);
    await projectStore
      .collection(collection)
      .orderBy("timeStamp", "desc")
      .onSnapshot((snap) => {
        setDocs(
          snap.docs.map((doc) => ({
            id: doc.id,
            url: doc.data().url,
            userId: doc.data().userId,
          }))
        );
        setLoader(false);
      });
  }

  return { docs, loader };
};

export default usePersonalStore;
>>>>>>> main:src/Hooks/usePersonalStore.js
