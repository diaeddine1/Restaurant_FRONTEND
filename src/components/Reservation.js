import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
export default function Reservation() {


    const {restaurantId} = useParams();
    const [date, setDate] = useState("");
   
    const [reservation,setReservation]=useState([]);
    
    // const createReservation = (restaurantId, userId, reservationDate) => {
    //     const data = {
    //       restaurantId: restaurantId,
    //       userId: userId,
    //       reservationDate: reservationDate,
    //     };
    //     axios
    //     .post("http://localhost:8082/reservations/save", data)
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const reservationData = { nom: userId };

    //     axios.post("http://localhost:8082/villes/save", reservationData)
    //       .then((response) => {
    //         console.log(response);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };

   
    
    useEffect(() => {
            const fetchData = () => {
              return axios
                .get('http://localhost:8082/reservations/all')
                .then((response) => setReservation(response.data))
                .catch((error) => console.log(error));
        };
          fetchData();
         
        }, []);
    console.log(reservation)
    const handleSubmit = (event) => {
        const reservationData = { date: date, restaurant : { id : restaurantId}, user : { id : localStorage.getItem("userid")} };
        event.preventDefault();
        
        if(reservationData.date=="")
        {
                alert("Please choose a time")
        }
        else
        {
            //console.log(reservation[6].date)
            // console.log("***"+reservationData.date)
            const reservationExists = reservation.some((item) => item.date === reservationData.date);

        
            if(reservationExists)
            {
                console.log(reservationData)
                alert("nigga u cant")
            }
            else
            {
                
                axios.post("http://localhost:8082/reservations/save", reservationData)
                .then((response) => {
                    console.log(response);
                    setDate("")
                    
                })
                .catch((error) => {
                    console.log(error);
                    setDate("")
                });
            };
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h1> MAKE YOUR RESERVATION</h1>
            <label style={{fontSize:"20px"}}>
            Date De Reservation:
            <input
                type="datetime-local"
                value={date}
                onChange={(event) => setDate(event.target.value)}
            />
            </label>
    
    
        <button type="submit">RESERVER</button>
        </form>
            )
}