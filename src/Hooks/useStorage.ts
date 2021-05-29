import { useEffect, useState } from "react";
import firebase from "firebase";
import { projectStorage, projectStore } from "../Firebase/Config";
import { useUser } from "../Context/UserContext";
import { usePrivacy } from "../Context/PrivacyContext";

const useStorage = (file : File) => {
  const [progress, setProgress] = useState<number|null>(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState<String|null>(null);
  const { user } = useUser();
  const { privacy } = usePrivacy();
  useEffect(() => {
    const storageRef =
      privacy === "personal"
        ? projectStorage.ref(`users/${file.name}`)
        : projectStorage.ref(`images/${file.name}`);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error : any) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        if (privacy === "public") {
          projectStore.collection("images").add({
            url: url,
            likes: 0,
            liked: false,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
          setUrl(url);
        } else {
          console.log("added in personal");
          projectStore.collection("users").add({
            url: url,
            userId: user.uid,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
          setUrl(url);
        }
      }
    );
  }, [file, user]);

  return {
    url,
    progress,
    error,
  };
};

export default useStorage;
