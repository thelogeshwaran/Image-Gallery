import React from "react";
import useFireStore from "../../../Hooks/useFireStore";
import "./ImageGrid.css";
import { ImageItem } from "../ImageItem/ImageItem";
import { Loader } from "../../Common/Loader/Loader";

interface ChildProps {
  setSelected: any;
}
const ImageGrid: React.FC<ChildProps> = ({ setSelected }) => {
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
            docs.map((doc: any) => (
              <ImageItem key={doc.id} doc={doc} setSelected={setSelected} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
