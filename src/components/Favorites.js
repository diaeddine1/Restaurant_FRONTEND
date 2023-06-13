

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Contain from './Contain';
import { BiCommentError } from 'react-icons/bi';

export default function Favorites() {
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const fetchData = () => {
          return axios
            .get(`http://localhost:8082/users/${localStorage.getItem("userid")}/favorites`)
            .then((response) => {
              setFavorite(response.data);
             
            })
            .catch((error) => console.log(error));
        };
        fetchData();
      }, []);
    
  return (
    <div className='favorites'>
    {favorite.length>0 ? favorite.map((restaurant) => (
        <Contain
          id={restaurant.id}
          nom={restaurant.nom}
          img={restaurant.photos}
          
          adresse={restaurant.adresse}

        />
      
    )) : <div className="favorites-error"> 
            <p> <img src="/err.png"/> 
            </p><span style={{color:"crimson",fontSize:"25px"}}>Vous N'Avez Aucun Restaurant Favori. </span></div>
            
    }
       </div>
  )
}
