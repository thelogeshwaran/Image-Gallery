import React from "react";
import FireStore from "../hooks/PersonalStore";
import { motion } from "framer-motion";
import {projectStore,projectStorage} from "../firebase/config";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";



const PersonalGrid =({setSelected, dark })=>{
    const [user]= useAuthState(auth);
    // console.log(user.uid)

    const {docs} = FireStore("users")
    

    function deleteHandler(doc){
        projectStore
        .collection("users")
        .doc(doc.id)
        .delete() 

        const delRef = projectStorage.refFromURL(doc.url)
        delRef.delete()
        .then(()=>{
            console.log("deleted")
        })
        .catch((err)=>console.log(err))
    }
    // console.log("render")
    
    return (
        <div className="image-grid">
            {docs && docs.map((doc)=>{
                if(doc.userId === user.uid){
                    return (
                
                        <div key={doc.id} >
                        <motion.div 
                        layout
                        whileHover={{opacity:1, scale:0.9}}
                         className="image-wrap">
                            <motion.img 
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{delay:1}}
                            src={doc.url} alt="images" onClick={()=> setSelected(doc.url)}/>
        
                        </motion.div>
                        <div  className="options" >
                            <IconButton style={dark ? {color: "white" }: null} onClick={()=> deleteHandler(doc)}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                        
                        </div>
                        
                    )
                }else{
                    return null
                }
                })}
        </div>
    )
}

export default PersonalGrid