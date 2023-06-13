import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function MyReservation() {
  const formatWithColon = (value) => {
    const formattedValue = String(value).replace(/(\d{2})(?=\d)/g, '$1:');
    return formattedValue;
  };
  
    const [myreservation,setmyReservation]=useState();
    useEffect(() => {
        const fetchReservation = async () => {
          try {
            const response = await axios.get(`http://localhost:8082/reservations/user/${localStorage.getItem("userid")}/reservation`);
            
            // const response = await axios.get(`http://localhost:8082/users/${userId}/restaurant`);
            setmyReservation(response.data.reservations);
            // console.log("response data:"+response.data.nom)
            // console.log("response data:"+response.data.prenom)
          } catch (error) {
            console.log(error); 
          }
        };
        fetchReservation();
    }, []);

    
  
    console.log(myreservation)
  return (
    <div className='my_reservation'>
        <h1>MES RESERVATIONS</h1>
    {myreservation && myreservation.length>0?( myreservation.map(myreserv=>(

      <Link to={`/Details/${myreserv.restaurant.id}` }>
        <p> Restaurant : {myreserv.restaurant.nom} </p>

          
           <p>Date De Reservation: {formatWithColon(myreserv.date)}</p>
          
        
      </Link>


      
    ))):(<p>Vous n'avez Aucune Reservation </p>)}
   
          
           

           
            
            
        </div>
  )
}
