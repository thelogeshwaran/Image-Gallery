import React from "react";
import usePersonalStore from "../../../Hooks/usePersonalStore";
import { motion } from "framer-motion";
import { projectStore } from "../../../Firebase/Config";
import DeleteIcon from "@material-ui/icons/Delete";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import { useUser } from "../../../Context/UserContext";
import "./PersonalGrid.css";
import { Loader } from "../../Common/Loader/Loader";
import { PersonalDoc } from "../../../Context/Types";

interface ChildProps{
  setSelected : React.Dispatch<React.SetStateAction<string | null>>;
}

const PersonalGrid: React.FC<ChildProps> = ({ setSelected }) => {
  const { user } = useUser();

  const { docs, loader } = usePersonalStore("users");

  function deleteHandler(doc : PersonalDoc) {
    projectStore.collection("users").doc(doc.id).delete();

    toast.success("Successfully Deleted!");
  }

  return (
    <div>
      {loader ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="personal-grid">
      {docs &&
        docs.map((doc : PersonalDoc) => {
          if (doc.userId === user.uid) {
            return (
              <div key={doc.id}>
                <motion.div
                  layout
                  whileHover={{ opacity: 1, scale: 0.9 }}
                  className="personal-wrap"
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
                <div className="personal-options">
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteHandler(doc)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
      )
    }
    </div>
  );
};

export default PersonalGrid;
