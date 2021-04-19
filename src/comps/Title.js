import React from 'react';
import Switch from '@material-ui/core/Switch';

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
      {/* <h2>Your Pictures</h2> */}
      <p>Share Your Moments here!</p>
      </div>
      
    </div>
  )
}

export default Title;