import React from "react";
import useFireStore from "../../../Hooks/useFireStore";
import "./ImageGrid.css";
import { ImageItem } from "../ImageItem/ImageItem";
import { Loader } from "../../Common/Loader/Loader";
import { Doc } from "../../../Context/Types";

type ChildProps = {
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}
const ImageGrid = ({ setSelected } : ChildProps) => {
  const { docs, loader } = useFireStore("images");
  console.log("done")
  return (
    <div>
      {loader ? (
        <div className="loader">
            <Loader />
            </div>
      ) : (
        <div className="image-grid">
          {docs &&
            docs.map((doc: Doc) => (
              <ImageItem key={doc.id} doc={doc} setSelected={setSelected} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
