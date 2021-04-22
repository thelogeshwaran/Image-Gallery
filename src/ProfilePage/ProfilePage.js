import React,{ useEffect, useState} from  "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import { auth } from "../Firebase/config";
import Button from '@material-ui/core/Button';
import UploadForm from "../Comps/UploadForm";
import PersonalGrid from "./PersonalGrid";
import Modal from "../Comps/Modal"
import { toast } from "react-toastify";
import Avatar from '@material-ui/core/Avatar';
import "../index.css";
import { useUser } from "../Context/UserContext";
import { usePirvacy } from "../Context/PrivacyContext";




const Profile=()=>{

    const { user } = useUser();
    // console.log(user)
    
    const [selected, setSelected] = useState(null);
    const signOut = async ()=> {
        await auth.signOut();
        toast.success("Successfully, Logged Out!")
    }

    return (
        <div>
            <div style={{display:"flex",justifyContent:"space-between", margin:"10px"}}>

                <div className="user-info">
                    <Avatar alt={user.displayName} src={user.photoURL} />
                    <div className="user-name">{user.displayName}</div>
                </div>
               
                <div>
                    <Button onClick={()=>signOut()}variant="contained" color="primary">
                        Sign Out
                    </Button>
                </div>

            </div>

            

            <div>
                <UploadForm/>
                <PersonalGrid setSelected={setSelected} />
                {selected && <Modal selected={selected} setSelected={setSelected}/>}
            </div>

        </div>
    )
}





function ProfilePage(){
    const { user , setUser } = useUser();
    const [userProfile] = useAuthState(auth);
    // console.log("rendered")


    useEffect(()=>{
        setUser(userProfile);
    },[userProfile,setUser])

    const { setPrivacy } = usePirvacy();
    useEffect(()=>{
        setPrivacy("personal")
    },[])
    

    const signInGoogle = async ()=> {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        toast.success("Successfully, Logged In!")
        
    }

    const SignIn = () => (

        <main style={{textAlign:"center",margin:"10% auto",height:"100vh"}}>

          <Button onClick={()=>signInGoogle()}  variant="contained" color="primary">
            Sign In With Google
         </Button>

        </main>
    )

    

    return (
        <div>
           { user ? <Profile /> : <SignIn/>}
        </div>
    )
}

export default ProfilePage;