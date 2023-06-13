import React from 'react'
import { useState } from 'react';
import axios from 'axios';
export default function Profil() {
  const [adresse, setAdresse] = useState("");

  const [cuisine, setCuisine] = useState("");
  const [close, setClose] = useState("");
  const [open, setOpen] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [nom, setNom] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(""); 
  const [review, setReview] = useState("");
  const [phone, setPhone] = useState("");
  const [serie, setSerie] = useState("");
  const [zone, setZone] = useState("");
  const [photo, setphoto] = useState("");
  const [imageFiles, setImageFiles] = useState([]);

  const handleInputChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);
    setImageFiles(filesArray);
  };


//{ id : localStorage.getItem("userid")}

  const handleSubmit = (event) => {
    console.log('Selected Image Files:', imageFiles);
    console.log(nom)
    console.log(adresse)
    console.log(cuisine)
   console.log(zone)
   console.log(serie)
   console.log(open)
   console.log(close)
   console.log(lat)
   console.log(lon)
    const restaurantData ={adresse:adresse,cuisine:cuisine,heure_close:close,heure_open:open,latitude:lat,longitude:lon,nom:nom,price_range:price,rating:rating,review:review,serie:{id:serie},zone:{id:zone},phone:phone};
    
    
    event.preventDefault();
    
    // axios.post(`http://localhost:8082/photos/save/${photo}/69`)
    // .then(response => {
    //   console.log('Photos successfully uploaded:', response.data);
    // })
    // .catch(error => {
    //   console.error('Error uploading photos:', error);
    // });
            
            axios.post("http://localhost:8082/restaurants/save", restaurantData)
            .then((response) => {
                console.log(response);
                
                
            })
            .catch((error) => {
                console.log(error);
                
            });
    };
    

  return (
    <form className='restaurant' onSubmit={handleSubmit}>
            <h1 style={{marginLeft:"90px"}}> ADD YOUR</h1>
            <h1 style={{marginLeft:"-150px"}}>RESTAURANT</h1>
            <label style={{fontSize:"20px"}}>
            Le Nom Du Restaurant:
            <input
                type="text"
                value={nom}
                onChange={(event) => setNom(event.target.value)}
            />
            </label>

            <label style={{fontSize:"20px"}}>
            Votre Adresse:
            <input
                type="text"
                value={adresse}
                onChange={(event) => setAdresse(event.target.value)}
            />
            </label>

            <label style={{fontSize:"20px"}}>
            Votre Zone:
            <input
                type="number"
                value={zone}
                onChange={(event) => setZone(event.target.value)}
            />
            </label>

            <label style={{fontSize:"20px"}}>
            Votre Serie:
            <input
                type="number"
                value={serie}
                onChange={(event) => setSerie(event.target.value)}
            />
            </label>

            <label style={{fontSize:"20px"}}>
            Votre Numero Du Restaurant:
            <input
                type="text"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
            />
            </label>

            <label style={{fontSize:"20px"}}>
            Votre Cuisine De Specialite:
            <input
                type="text"
                value={cuisine}
                onChange={(event) => setCuisine(event.target.value)}
            />
            </label>
            
            
            <label style={{fontSize:"20px"}}>
            Date D'ouverture:
            <input
                type="text"
                value={open}
                onChange={(event) => setOpen(event.target.value)}
            />
            </label>
            <label style={{fontSize:"20px"}}>
            Date De Fermeture:
            <input
                type="text"
                value={close}
                onChange={(event) => setClose(event.target.value)}
            />
            </label>

            <label style={{fontSize:"20px"}}>
            Votre Position De Latitude:
            <input
                type="text"
                value={lat}
                onChange={(event) => setLat(event.target.value)}
            />
            </label>

            <label style={{fontSize:"20px"}}>
            Votre Position De Longitude:
            <input
                type="text"
                value={lon}
                onChange={(event) => setLon(event.target.value)}
            />
            </label>

            <label style={{fontSize:"20px"}}>
            Votre Price Range:
            <input
                type="text"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            </label>

            <label style={{fontSize:"20px"}}>
            Votre Rating:
            <input
                type="number"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
            />
            </label>

            <label style={{fontSize:"20px"}}>
            Votre Nombre De Reviews:
            <input
                type="number"
                value={review}
                onChange={(event) => setReview(event.target.value)}
            />
            </label>
            
            

           

    
    
        <button style={{marginTop:"50px"}} type="submit">AJOUTER</button>
    </form>
  )
}
