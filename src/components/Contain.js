import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GiPositionMarker } from "react-icons/gi";
import Heart from "react-animated-heart";
import { useState } from "react";
import axios from "axios";
export default function Contain(props) {
  const [isclick, setClick] = useState(false);
  const [favorite, setFavorite] = useState([])
  
  
  function hearth() {
    const userId = localStorage.getItem("userid");
    if (!isclick) {
      axios
        .post(`http://localhost:8082/users/${userId}/favorites/${props.id}`)
        .then((response) => {
       
          setClick(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .delete(`http://localhost:8082/users/${userId}/favorites/${props.id}`)
        .then((response) => {
        
          setClick(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  useEffect(() => {
    const fetchData = () => {
      return axios
        .get(`http://localhost:8082/users/${localStorage.getItem("userid")}/favorites`)
        .then((response) => {
          setFavorite(response.data);
          const isFavorite = response.data.some((restaurant) => restaurant.id === props.id);
          setClick(isFavorite);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  
 
console.log(props.img)


  return (
    <div className="contain">
      <div className="heart">
       <Heart className="heart"  isClick={isclick} onClick={hearth}/>
       </div>
      <Link to={`/Details/${props.id}`}>
        {props.img.length>0 ?   
        <li>
          <img src={props.img[0].url} />
        </li>: <li>
          <img src="/noimage.png" />
        </li>}
   
      
        <li>{props.nom}</li>

        <li className="addresse" style={{ fontWeight: "normal" }}>
          <GiPositionMarker style={{ color: "crimson", fontSize: "30px" }} />
          {props.adresse}
        </li>
        <li className="description">{props.bio}</li>
        <li> {props.des}</li>
      </Link>
    </div>
  );
}
