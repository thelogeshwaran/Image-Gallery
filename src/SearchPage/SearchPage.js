import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import SearchGrid from "./SearchGrid";
import Modal from "../Comps/Modal";


function SearchPage() {

    const [images, setImages] = useState([]);
    const[ selected , setSelected ]= useState(null)

    const onSubmit = async (term) => {

        const response = await axios.get("https://api.unsplash.com/search/photos",{
            headers: {
                Authorization: "Client-ID oxORx9oGOoqBOxsmBkMmGYuVjOX9vGqZf0AFvMXspec"
              },
              params: {
                query: term
              }
        })
        // console.log(response)
        setImages(response.data.results)
        // console.log(response.data.results)
    }
    useEffect(()=>{
        onSubmit("dance");
    },[])

    return (
        <div>
            <SearchBar onSubmit={onSubmit}/>
            <SearchGrid images={images} setSelected={setSelected} />
            {selected && <Modal selected={selected} setSelected={setSelected} />}
        </div>
    )
}


export default SearchPage;