import React, { useState } from 'react';
import HomePage from "./HomePage"
import Title from './comps/Title';
import ProfilePage from "./comps/ProfilePage"
import { BrowserRouter , Route } from "react-router-dom"; 

function App() {
  const [dark , setDark ]=useState(false)
  return (
    <div  className= "App"style={dark ? {color : "white",backgroundColor: "#14143C"} : {color:"black" ,backgroundColor:"white"}}>
      <div className="content" >
      

      <BrowserRouter>
        <div>
          <Title dark={dark} setDark={setDark}/>
          
          <Route path="/" exact ><HomePage dark={dark}/></Route>
          <Route path="/profile"><ProfilePage/></Route>
        </div>
        
      </BrowserRouter>
      
      
      </div>
    </div>
  );
}

export default App;
