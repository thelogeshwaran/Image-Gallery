import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { projectStore } from "../../../Firebase/Config";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import firebase from "firebase";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useUser } from "../../../Context/UserContext";
import "./ImageCard.css";


interface ChildProps{
  doc: any;
  setSelected : React.Dispatch<React.SetStateAction<string | null>>;
}

export const ImageCard: React.FC<ChildProps> = ({ doc, setSelected }) => {
  const { user } = useUser();

  const [bookmark, setBookmark] = useState<boolean>(false);
  console.log(doc)
  const addToPersonal = (doc : any) => {
    if (user) {
      setBookmark(true);
      projectStore.collection("users").add({
        url: doc.urls.regular,
        userId: user.uid,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      toast.success("Added to Your Photos");
    } else {
      setBookmark(false);
      toast.error("SignIn to Save!");
    }
  };

  return (
    <div>
      <motion.div
        layout
        whileHover={{ opacity: 1, scale: 0.9 }}
        className="search-wrap"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          src={doc.urls.regular}
          alt="images"
          onClick={() => setSelected(doc.urls.regular)}
        />
      </motion.div>
      <div className="search-options">
        <div onClick={() => addToPersonal(doc)}>
          {bookmark ? (
            <BookmarkIcon style={{ height: "40px", width: "40px" }} />
          ) : (
            <BookmarkBorderIcon style={{ height: "40px", width: "40px" }} />
          )}
        </div>
      </div>
    </div>
  );
};
