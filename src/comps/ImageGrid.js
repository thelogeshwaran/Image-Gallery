import React, { useState,useReducer, useEffect } from "react";
import FireStore from "../hooks/useFireStore";
import { motion } from "framer-motion";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import {projectStore} from "../firebase/config"

const ImageGrid =({selected, dark })=>{
    const {docs} = FireStore("images")


    function handleLike(doc){
        
       if(!doc.liked){
        projectStore
        .collection("images")
        .doc(doc.id)
        .update({
            likes :doc.likes + 1,
            liked : true
        })

       }else{
        projectStore
        .collection("images")
        .doc(doc.id)
        .update({
            likes : doc.likes - 1,
            liked : false
        })
        

       }
        
    }
    
    
    return (
        <div className="image-grid">
            {docs && docs.map((doc)=>(
                
                <div>
                <motion.div 
                layout
                whileHover={{opacity:1, scale:1.1}}
                key={doc.id} className="image-wrap">
                    <motion.img 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}
                    src={doc.url} alt="images" onClick={()=> selected(doc.url)}/>

                </motion.div>
                <div onClick={()=>handleLike(doc)} >
                <Fab style={dark ?{backgroundColor:"white"}: null} disabled={ !doc.liked } >
                     <FavoriteIcon />
                 </Fab>
                 <div>{doc.likes} likes</div>
                </div>
                
                </div>
                
            ))}
        </div>
    )
}

export default ImageGrid