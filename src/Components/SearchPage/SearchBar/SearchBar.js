import React, { useState } from "react";
import "./SearchBar.css"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';


function SearchBar({onSubmit}){
    const [input, setInput] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        onSubmit(input)
    }
    return (
        <div className="searchbar">
            <div className="search-button">
                <SearchRoundedIcon style={{ color: "black"}}/>
            </div>
            <div >
                <form onSubmit={(event)=>submitHandler(event)}>
                <input className="inputfield" style={{backgroundColor:"inherit"}} value={input} placeholder="Search..." onChange={ (e)=> setInput(e.target.value)} ></input>
                </form>
            </div>
            
        </div>
    )
}



export default SearchBar;