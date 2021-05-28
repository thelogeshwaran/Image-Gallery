import React from "react";
import "./SearchGrid.css"

import { ImageCard } from "../ImageCard/ImageCard";

const SearchGrid = ({ images, setSelected }) => {
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
