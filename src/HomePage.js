import React,{useState} from "react";
import UploadForm from "./comps/UploadForm"
import ImageGrid from "./comps/ImageGrid"
import Modal from "./comps/Modal"

function HomePage({dark}){
    const [selected, setSelected] = useState(null);
    
    return (
        <div>
            <UploadForm/>
           <ImageGrid dark={dark} setSelected ={setSelected}/>
            { selected &&  <Modal selected={selected} setSelected={setSelected}/>}
        </div>
    )
}


export default HomePage;