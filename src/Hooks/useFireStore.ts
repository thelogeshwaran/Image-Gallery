<<<<<<< HEAD:src/Hooks/useFireStore.ts
import { useEffect, useState } from "react"
import {projectStore} from "../Firebase/Config"
import { Doc } from "../Context/Types";
=======
import { useEffect, useState } from "react";
import { projectStore } from "../Firebase/Config";
>>>>>>> main:src/hooks/useFireStore.js

const useFireStore = (collection) => {
  const [loader, setLoader] = useState(false);
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    fetchdata(collection);
  }, []);

<<<<<<< HEAD:src/Hooks/useFireStore.ts
const useFireStore =(collection : string) => {
const [loader, setLoader]= useState(false);
const [docs,setDocs] = useState<Doc[]| null>([])
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
           snap.docs.map((doc) =>({
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
=======
  async function fetchdata(collection) {
    console.log("come");
    setLoader(true);
    await projectStore
      .collection(collection)
      .orderBy("timeStamp", "desc")
      .onSnapshot((snap) => {
        setDocs(
          snap.docs.map((doc) => ({
            id: doc.id,
            url: doc.data().url,
            likes: doc.data().likes,
            liked: false,
          }))
        );
        setLoader(false);
      });
  }

  return { docs, loader };
};

export default useFireStore;
>>>>>>> main:src/hooks/useFireStore.js
