import React from "react";
import useFireStore from "../../Hooks/useFireStore";
import "../../index";
import { ImageItem } from "./ImageItem";

const ImageGrid =({setSelected })=>{
    const {docs} = useFireStore("images")

    
    
    return (
        <div className="image-grid">
            {docs && docs.map((doc)=>(
                
                <ImageItem key={doc.id} doc={doc} setSelected={setSelected}  />
                
            ))}
        </div>
    )
}

export default ImageGrid