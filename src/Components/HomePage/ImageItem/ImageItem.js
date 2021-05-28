import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { projectStore } from "../../../Firebase/Config";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import firebase from "firebase";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Fab from "@material-ui/core/Fab";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useUser } from "../../../Context/UserContext";
import "./ImageItem.css";

export const ImageItem = ({ doc, setSelected }) => {
  const { user } = useUser();
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  function handleLike(doc) {
    if (!like) {
      setLike(!like);
      projectStore
        .collection("images")
        .doc(doc.id)
        .update({
          likes: doc.likes + 1,
        });
    } else {
      setLike(!like);
      projectStore
        .collection("images")
        .doc(doc.id)
        .update({
          likes: doc.likes - 1,
        });
    }
  }

  const addToPersonal = (doc) => {
    if (user) {
      setBookmark(true);
      projectStore.collection("users").add({
        url: doc.url,
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
        className="image-wrap"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          src={doc.url}
          alt="images"
          onClick={() => setSelected(doc.url)}
        />
      </motion.div>

      <div className="options">
        <div className="options-like" onClick={() => handleLike(doc)}>
          {like ? (
            <Fab style={{ height: "40px", width: "40px" }} aria-label="like">
              <FavoriteIcon onClick={() => handleLike(doc)} />{" "}
            </Fab>
          ) : (
            <Fab
              style={{ height: "40px", width: "40px" }}
              disabled
              aria-label="like"
            >
              <FavoriteIcon />{" "}
            </Fab>
          )}

          <div className="options-content">{doc.likes} likes</div>
        </div>

        <div style={{ marginTop: "10px" }} onClick={() => addToPersonal(doc)}>
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
