import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/SearchPage/SearchBar/SearchBar";
import axios from "axios";
import SearchGrid from "../../Components/SearchPage/SearchGrid/SearchGrid";
import Modal from "../../Components/Common/Modal/Modal";
import { Loader } from "../../Components/Common/Loader/Loader";
<<<<<<< HEAD:src/Pages/SearchPage/SearchPage.tsx
import "./SearchPage.css"
import { SearchResult, ResultData } from "../../Context/Types";

function SearchPage() {
  const [images, setImages] = useState<SearchResult[]>([]);
  const [selected, setSelected] = useState<string|null>(null);
  const [loader, setLoader]= useState(false)

  const onSubmit = async (term : string) => {
      setLoader(true)
    const response = await axios.get<ResultData>("https://api.unsplash.com/search/photos", {
=======
import "./SearchPage.css";

function SearchPage() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loader, setLoader] = useState(false);

  const onSubmit = async (term) => {
    setLoader(true);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
>>>>>>> main:src/Pages/SearchPage/SearchPage.js
      headers: {
        Authorization: "Client-ID oxORx9oGOoqBOxsmBkMmGYuVjOX9vGqZf0AFvMXspec",
      },
      params: {
        query: term,
      },
    });
    setLoader(false);
    setImages(response.data.results);
  };
  useEffect(() => {
    onSubmit("dance");
  }, []);

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {loader ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div>
          <SearchGrid images={images} setSelected={setSelected} />
          {selected && <Modal selected={selected} setSelected={setSelected} />}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
