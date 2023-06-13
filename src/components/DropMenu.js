import React, { useState } from "react";
import tinder from "../Images/tinder.png";
import { useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
function DropMenu() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  const userid = localStorage.getItem("userid");
  const user = localStorage.getItem("user");
  const isAdmin = localStorage.getItem("user") === "dia";
  const navigate = useNavigate(0);
  const handlelogout = () => {
    localStorage.removeItem("userid");
    navigate(0);
    navigate("/");
  };
  
 

  return (
    <div className="menu">
      <li className="logo">
        <span className="ea">EA</span>
        <img src={tinder} />
      </li>
      <a href="/">
        <li className="home" style={{ fontFamily: "Pacifico, cursive" }}>
          Home
        </li>
      </a>

      <a href="/Restaurants">
        <li className="resto" style={{ fontFamily: "Pacifico, cursive" }}>
          Restaurant
        </li>
      </a>

      <a
        href="/AboutUs"
        className="info"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        About Us
      </a>
      {userid !== null ? (
      <a
        href="/MyReservation"
        className="info"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        My Reservation
      </a>):(<span></span>)}
      


      {userid !== null ? (
        <>
        <a
          className="show"
          style={{ fontFamily: "Pacifico, cursive", }}
         
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaUserCircle style={{fontSize:"30px",marginRight:"10px"}}/>
          {localStorage.getItem("user")}
          
        </a>
        {showDropdown &&(
         <div style={{position:"absolute",display:"grid",borderRadius:"50px",top:"5%",right:"0%",zIndex:"1"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li style={{marginTop:"45px",paddingTop:"10px"}} className="drop-down"><a href="/profil"><FaUserCircle style={{marginRight:"20px",marginLeft:"30px"}} />Profil</a></li>
            {isAdmin && (
            <li className="drop-down">
              <a href="/admin">
              <GrUserAdmin style={{marginRight:"20px",marginLeft:"30px"}}/>
                Gestion
              </a>
            </li>
          )}
            <li className="drop-down" ><a href="/favoris"><MdFavorite style={{marginRight:"16px",marginLeft:"30px"}}/>Favorites</a></li>
            <li  onClick={handlelogout} style={{borderBottomLeftRadius:"5px",paddingBottom:"15px"}} className="drop-down" ><a><FaPowerOff style={{marginRight:"20px",marginLeft:"30px"}}/>Logout</a></li>
          </div>)}
       
        </>
      ) : (
        <a
          href="/login"
          className="info"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Log in
        </a>
      )}
    </div>
  );
}

export default DropMenu;
