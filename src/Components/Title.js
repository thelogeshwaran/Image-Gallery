import React from 'react';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import {Link } from "react-router-dom";
import "../index.css";
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useTheme } from "../Context/ThemeContext"
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { useUser } from "../Context/UserContext";


const Title = () => {

  const { dark, setDark }  = useTheme();
  const { user } = useUser(); 
  
  return (


    <div className="header" style={ dark ? {backgroundColor:"#252525",color:"white"} :{backgroundColor:"white"} }>


      <div className="desktop-nav" style={ dark ? {backgroundColor:"#252525",color:"white"} :{color:"black",backgroundColor:"white"}}>

               <div className="header-title">

                <h1>Pexa-bay</h1>

               </div>

            <div className="desktop-buttons">
                <Link style={{textDecoration:"none", margin:"5px"}}   to="/">
                  <Button style={ dark ?  {color:"white"} : {color:"black"}   }>Home</Button>
                </Link>

                <Link style={{textDecoration:"none", margin:"5px"}} to="/search">
                  <Button style={ dark ?  {color:"white"} : {color:"black"}  }>Explore</Button> 
                </Link>
              
                <Link style={{textDecoration:"none", margin:"5px"}} to="/profile">
                 <Button style={ dark ?  {color:"white"} : {color:"black"}   }>{ user ? "profile" : "sign in"}</Button>
                </Link>
            </div>
              
        </div>


        

            <div className="mob-buttons" style={dark ? {backgroundColor:"#252525",color:"white"} :{backgroundColor:"white"}}>
               <Link style={{textDecoration:"none", margin:"5px"}}   to="/">
                  <HomeRoundedIcon style={  dark ? { height: "40px", width:"40px",backgroundColor:"#252525",color:"white"} : { height: "40px", width:"40px",backgroundColor:"white",color:"black"}}/>
                </Link>

                <Link style={{textDecoration:"none", margin:"5px"  }} to="/search">
                  <ExploreSharpIcon  style={  dark ? { height: "40px", width:"40px",backgroundColor:"#252525",color:"white"} : { height: "40px", width:"40px",backgroundColor:"white",color:"black"}}/> 
                </Link>
                
                <Link style={{textDecoration:"none", margin:"5px"}} to="/profile">
                  <AccountCircleRoundedIcon style={  dark ? { height: "40px", width:"40px",backgroundColor:"#252525",color:"white"} : { height: "40px", width:"40px",backgroundColor:"white",color:"black"}}/>
                </Link>

            </div>
        
      


            <div className="header-content" style={ dark ? {backgroundColor:"#252525",color:"white"} :{backgroundColor:"white"}}>
                <div >
                  <p>Share Your Moments here!</p>
                </div>
                
                <div >
                    <Switch onChange={()=>setDark(!dark)}/>
                </div>
                          
            </div>

      
    </div>
  )
}

export default Title;