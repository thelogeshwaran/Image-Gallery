import React from 'react';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import {Link } from "react-router-dom";

const Title = ({dark , setDark}) => {
  return (
    <div className="header" style={ dark ? {backgroundColor:"#D5E8E4",color:"black"} :{backgroundColor:"#2BCBCB"} }>
      <div className="header-title">
      <h1>Pexa-bay</h1>
      <Switch
        onChange={()=>setDark(!dark)}
      />
      </div>


      <div className="header-content">
         <p>Share Your Moments here!</p>
           {/* <h2>Your Pictures</h2> */}
      </div>

        <div className="route-buttons">
        <Link style={{textDecoration:"none", margin:"5px"}}   to="/">
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>

          <Link style={{textDecoration:"none", margin:"5px"}} to="/profile">
            <Button variant="contained" color="primary">
              Profile
            </Button>
          </Link>
        </div>
      
      
    </div>
  )
}

export default Title;