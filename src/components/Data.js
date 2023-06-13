import React, { useEffect, useState } from 'react'
import Contain from './Contain';
import axios from 'axios';
export default function Data() {
 
    const[restaurants,setrestaurants]=useState([])
    useEffect(() => {
      const fetchData = () => {
        return axios
          .get('http://127.0.0.1:8000/data')
          .then((response) => setrestaurants(response.data.scrapped_data))
          .catch((error) => console.log(error));
      };
      fetchData();
    }, []);
        

  return (
  
    <div className='slide'>      
       {restaurants.length > 0 && restaurants.map(restaurant=>(
        <Contain nom={restaurant.restaurant} img={restaurant.img} desc={restaurant.description} adresse={restaurant.adresse}/>
        
       ))}
       </div>
  )
}
