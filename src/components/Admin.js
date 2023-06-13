import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [updatedName, setUpdatedName] = useState("");

  const [restaurants, setRestaurants] = useState([]);
  const [ville,setville]=useState('')
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:8082/restaurants/all');
      setRestaurants(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNameChange = (event) => {
    setUpdatedName(event.target.value);

  };


  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:8082/restaurants/${id}`);
  //     fetchRestaurants(); 
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleDelete = async (id) => {
    console.log(id)
  
      await fetch(`http://localhost:8082/restaurants/delete/${id}`, {
        method: 'DELETE',
      });
      fetchRestaurants(); 
   
  };

  const handleSubmit = (event) => {

    // const restaurantData ={adresse:adresse,cuisine:cuisine,latitude:lat,longitude:lon,nom:nom,price_range:price,rating:rating,review:review,serie:{id:serie},zone:{id:zone},phone:phone};
    const ville={nom:updatedName};
    event.preventDefault();
    
    axios.post('http://localhost:8082/villes/save', ville)
            .then((response) => {
                console.log(response);
                setUpdatedName("")
                
            })
            .catch((error) => {
                console.log(error);
                
            });
    };
  
  return (
    <>
    <table style={{width:"100%"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.nom}</td>
            <td>{restaurant.adresse}</td>
            <td>
              <button onClick={() => handleDelete(restaurant.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    
<div>
    <form onSubmit={handleSubmit} style={{ marginTop: 200 }}>
        <div className="container">
          <input
            type="text"
            placeholder="Ville"
            value={updatedName}
            onChange={handleNameChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
      
    </>
  );
};

export default Admin;
