import React, { useEffect } from "react";
import useStorage from "../../../Hooks/useStorage";
import { motion } from "framer-motion";
import "./ProgressBar.css";

interface ChildProps {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}
const Progressbar: React.FC<ChildProps> = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
      className="progress-bar"
    ></motion.div>
  );
};

export default Progressbar;
