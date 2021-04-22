import React from "react";

import { ImageCard } from "./ImageCard"; 



const SearchGrid =({images,setSelected})=>{
    
    
   

    
    return (
        <div className="image-grid">
            {images && images.map((doc)=>(
                <ImageCard key={doc.id} doc={doc} setSelected={setSelected} />
                
            ))}
        </div>
    )
}

export default SearchGrid