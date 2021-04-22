import React from "react";
import FireStore from "../Hooks/useFireStore";
import "../index.css";
import { ImageItem } from "./ImageItem";

const ImageGrid =({setSelected })=>{
    const {docs} = FireStore("images")

    
    
    return (
        <div className="image-grid">
            {docs && docs.map((doc)=>(
                
                <ImageItem key={doc.id} doc={doc} setSelected={setSelected}  />
                
            ))}
        </div>
    )
}

export default ImageGrid