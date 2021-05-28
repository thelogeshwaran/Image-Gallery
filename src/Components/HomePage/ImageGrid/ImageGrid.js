import React from "react";
import useFireStore from "../../../Hooks/useFireStore";
import "./ImageGrid.css";
import { ImageItem } from "../ImageItem/ImageItem";
import { Loader } from "../../../Components/Common/Loader/Loader";

const ImageGrid = ({ setSelected }) => {
  const { docs, loader } = useFireStore("images");

  return (
    <div>
      {loader ? (
        <div className="loader">
            <Loader />
            </div>
      ) : (
        <div className="image-grid">
          {docs &&
            docs.map((doc) => (
              <ImageItem key={doc.id} doc={doc} setSelected={setSelected} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
