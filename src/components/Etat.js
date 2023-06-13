

import React from 'react'
import { BsClock } from "react-icons/bs";
export default function Etat(props) {
  const time = new Date();
  const open=props.open
  const close=props.close
  console.log(time.getHours())
  console.log("compare to "+open)
  console.log("closes at "+close)
  if(open<time.getHours && time.getHours<close)
  {
  return (
    
    <p>
      <span style={{fontSize:"25px",color:"#5EAC1B",padding:"10px"}}>  <BsClock/></span> <span style={{fontSize:"20px",fontWeight:"bold",color:"#5EAC1B"}}> Open Now    </span>
    </p>
  )
  }
  else 
  {
  
    return (
        <p>
          <span style={{fontSize:"25px",color:"crimson",padding:"10px"}}>
            <BsClock/></span> <span style={{fontSize:"20px",fontWeight:"bold",color:"crimson"}}> Closed , Open   At {open}
          </span>
        </p>
    )
  }
}
