import React,{useState} from  "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import { auth } from "../firebase/config";
import Button from '@material-ui/core/Button';
import UploadForm from "../comps/UploadForm";
import PersonalGrid from "./PersonalGrid";
import Modal from "../comps/Modal"

function ProfilePage(){
    const [user] = useAuthState(auth);
    const signInGoogle = ()=>auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

    const SignIn =()=>(
        <main style={{textAlign:"center",margin:"10% auto"}}>
          <Button onClick={()=>signInGoogle()}variant="contained" color="primary">
        SignIn With Google
      </Button>
        </main>
    )

    const ProfilePage=()=>{
        const [selected, setSelected] = useState(null);
        const signOut =()=> auth.signOut();

        return (
            <div>
                <div style={{display:"flex",justifyContent:"flex-end",margin:"0 10px"}}>
                    <Button onClick={()=>signOut()}variant="contained" color="primary">
                        SignOut
                    </Button>
                </div>
                <div>
                    <UploadForm/>
                    <PersonalGrid setSelected={setSelected}/>
                    {selected && <Modal selected={selected} setSelected={setSelected}/>}
                </div>
            </div>
        )
    }

    return (
        <div>
           { user ? <ProfilePage/> : <SignIn/>}
        </div>
    )
}

export default ProfilePage;