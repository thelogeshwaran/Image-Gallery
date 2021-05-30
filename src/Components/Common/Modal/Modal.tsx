import React from "react";
import { motion } from "framer-motion";
import "./Modal.css";

type ChildProps = {
  selected: string;
  setSelected: Function;
};

const Modal = ({ selected, setSelected }: ChildProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as Element).classList.contains("modal")) {
      setSelected(null);
    }
  };

  return (
    <div className="modal" onClick={handleClick}>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        src={selected}
        alt="selected img"
      />
    </div>
  );
};

export default Modal;
