import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import { auth } from "../../Firebase/Config";
import Button from "@material-ui/core/Button";
import UploadForm from "../../Components/Common/UploadForm/UploadForm";
import PersonalGrid from "../../Components/PersonalPage/PersonalGrid/PersonalGrid";
import Modal from "../../Components/Common/Modal/Modal";
import { toast } from "react-toastify";
import Avatar from "@material-ui/core/Avatar";
import "./ProfilePage.css";
import { useUser } from "../../Context/UserContext";
import { usePrivacy } from "../../Context/PrivacyContext";

const Profile = () => {
  const { user } = useUser();

  const [selected, setSelected] = useState<string | null>(null);
  const signOut = async () => {
    await auth.signOut();
    toast.success("Successfully, Logged Out!");
  };

  return (
    <div>
      <div className="profile-header">
        <div className="user-info">
          <Avatar alt={user.displayName} src={user.photoURL} />
          <div className="user-name">{user.displayName}</div>
        </div>

        <div>
          <Button onClick={() => signOut()} variant="contained" color="primary">
            Sign Out
          </Button>
        </div>
      </div>

      <div>
        <UploadForm />
        <PersonalGrid setSelected={setSelected} />
        {selected && <Modal selected={selected} setSelected={setSelected} />}
      </div>
    </div>
  );
};

function ProfilePage() {
  const { user, setUser } = useUser();
  const [userProfile] = useAuthState(auth);

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile, setUser]);

  const { setPrivacy } = usePrivacy();
  useEffect(() => {
    setPrivacy("personal");
  }, []);

  const signInGoogle = async () => {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    toast.success("Successfully, Logged In!");
  };

  const SignIn = () => (
    <main style={{ textAlign: "center", margin: "10% auto", height: "100vh" }}>
      <Button
        onClick={() => signInGoogle()}
        variant="contained"
        color="primary"
      >
        Sign In With Google
      </Button>
    </main>
  );

  return <div>{user ? <Profile /> : <SignIn />}</div>;
}

export default ProfilePage;
