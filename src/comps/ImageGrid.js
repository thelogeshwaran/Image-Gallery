import React, { useState,useReducer, useEffect } from "react";
import FireStore from "../hooks/useFireStore";
import { motion } from "framer-motion";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import {projectStore, projectStorage} from "../firebase/config";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import "./ImageGrid.css"

const ImageGrid =({selected, dark })=>{
    const {docs} = FireStore("images")
    
    function handleLike(doc){
        const buttRef = document.getElementById(doc.id)
        
       if(buttRef.innerHTML==="🤍"){
        projectStore
        .collection("images")
        .doc(doc.id)
        .update({
            likes :doc.likes + 1
        })

        buttRef.innerHTML= "❤️"

       }else{
        projectStore
        .collection("images")
        .doc(doc.id)
        .update({
            likes : doc.likes - 1
           
        })
        
        buttRef.innerHTML= "🤍"

       }       
    }


    function deleteHandler(doc){
        projectStore
        .collection("images")
        .doc(doc.id)
        .delete() 

        const delRef = projectStorage.refFromURL(doc.url)
        delRef.delete()
        .then(()=>{
            console.log("deleted")
        })
        .catch((err)=>console.log(err))
    }
    console.log("render")
    
    return (
        <div className="image-grid">
            {docs && docs.map((doc)=>(
                
                <div key={doc.id} >
                <motion.div 
                layout
                whileHover={{opacity:1, scale:0.9}}
                 className="image-wrap">
                    <motion.img 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}
                    src={doc.url} alt="images" onClick={()=> selected(doc.url)}/>

                </motion.div>
                <div  className="options" >
                    <div className="options-like" onClick={()=>handleLike(doc)}>
                    <button  className="like-button" id={doc.id} style={dark ?{backgroundColor:"white"}: null}  >
                    🤍
                    </button>
                    
                    <div>{doc.likes} likes</div>
                    </div>
                    <IconButton style={dark ? {color: "white" }: null} onClick={()=> deleteHandler(doc)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
                
                </div>
                
            ))}
        </div>
    )
}

export default ImageGrid