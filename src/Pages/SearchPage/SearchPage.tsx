import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/SearchPage/SearchBar/SearchBar";
import axios, { AxiosError } from "axios";
import SearchGrid from "../../Components/SearchPage/SearchGrid/SearchGrid";
import Modal from "../../Components/Common/Modal/Modal";
import { Loader } from "../../Components/Common/Loader/Loader";
import "./SearchPage.css";
import { SearchResult, ResultData } from "../../Context/Types";
import { toast } from "react-toastify";

function SearchPage() {
  const [images, setImages] = useState<SearchResult[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loader, setLoader] = useState(false);

  const onSubmit = async (term: string) => {
    setLoader(true);
    try {
      const response = await axios.get<ResultData>(
        "https://api.unsplash.com/search/photos",
        {
          headers: {
            Authorization:
              "Client-ID oxORx9oGOoqBOxsmBkMmGYuVjOX9vGqZf0AFvMXspec",
          },
          params: {
            query: term,
          },
        }
      );
      setLoader(false);
      setImages(response.data.results);
    } catch (err) {
      console.log(err.response.data);
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data);
        return err.response?.data;
      } else {
        toast.error("Something went wrong");
      }
    }
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
