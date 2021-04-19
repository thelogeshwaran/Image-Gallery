import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from "./comps/UploadForm"
import ImageGrid from "./comps/ImageGrid"
import Modal from "./comps/Modal"

function App() {
  const [selected, setSelected] = useState(null);
  const [dark , setDark ]=useState(false)
  return (
    <div  className= "App"style={dark ? {color : "white",backgroundColor: "#14143C"} : {color:"black" ,backgroundColor:"white"}}>
      <div className="content" >
      <Title dark={dark} setDark={setDark}/>
      <UploadForm/>
      <ImageGrid dark={dark} selected ={setSelected}/>
      { selected &&  <Modal selected={selected} setSelected={setSelected}/>}
      </div>
    </div>
  );
}

export default App;
