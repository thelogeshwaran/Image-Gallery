import React from "react";
import "./SearchGrid.css"
import { ImageCard } from "../ImageCard/ImageCard";

interface ChildProps{
  images : any[];
  setSelected :React.Dispatch<React.SetStateAction<string | null>>;
}
const SearchGrid: React.FC<ChildProps>  = ({ images , setSelected }) => {
  return (
    <div className="search-grid">
      {images &&
        images.map((doc) => (
          <ImageCard key={doc.id} doc={doc} setSelected={setSelected} />
        ))}
    </div>
  );
};

export default SearchGrid;
