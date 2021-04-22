import React,{useEffect, useState} from "react";
import UploadForm from "../Comps/UploadForm"
import ImageGrid from "./ImageGrid"
import Modal from "../Comps/Modal";
import { usePirvacy } from "../Context/PrivacyContext";



function HomePage(){
    const [selected, setSelected] = useState(null);
    const { setPrivacy } = usePirvacy();
    
    
    useEffect(()=>{
        setPrivacy("public")
    },[])
   
    return (
        <div>
            <UploadForm />
            <ImageGrid  setSelected ={setSelected} />
            { selected &&  <Modal selected={selected} setSelected={setSelected}/>}
        </div>
    )
}


export default HomePage;