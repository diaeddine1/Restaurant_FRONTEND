// import React from 'react'

// import { useState,useEffect } from "react";
// import data from "./data.json";
// import axios from "axios";
// import Contain from "./Contain";
// import {BsSearchHeartFill} from "react-icons/bs";
// import {BiCommentError} from "react-icons/bi";
// import { AiOutlineSearch } from "react-icons/ai";
// export default function Search() {
//   const [placeholder, setPlaceholder] = useState('Search Restaurant\'s Name');
//   const [restaurants, setrestaurants] = useState([]);


//   const [searchQuery, setSearchQuery] = useState('');

//   const handleFocus = () => {
//     setPlaceholder('');
//   };
//   const handleBlur = () => {
//     setPlaceholder('Search Restaurant\'s Name');
//   };



//   const filteredRestaurants = restaurants.filter((restaurant) =>restaurant.restaurant && restaurant.restaurant.toLowerCase().includes(searchQuery.toLowerCase()));

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   }
  
    
//     useEffect(() => {
//       const fetchData = () => {
//         return axios
//           .get('http://127.0.0.1:8000/data')
//           .then((response) => setrestaurants(response.data.scrapped_data))
//           .catch((error) => console.log(error));
//     };
//     fetchData();
      
//     }, []);
    
    
    
//     return(
//       <>
//        <div className="search-div">
//           <AiOutlineSearch style={{color:"#2f71e7",fontSize:"30px",fontWeight:"bold",marginTop:"-6px",marginRight:"10px"}}/>
//           <input type="text" className="search"  placeholder={placeholder} onBlur={handleBlur} onFocus={handleFocus} onChange={e=>setSearchQuery(e.target.value)}/>
//           </div>
//           <div className="slide">
//           {filteredRestaurants.length > 0 ? filteredRestaurants.map((restaurant,index) => (
//             <Contain
//               key={index}
//               nom={restaurant.restaurant}
//               img={restaurant.img1}
              
//               adresse={restaurant.address}
          
//             />
//         )) : <div className="Error"> 
//                 <p> <BiCommentError style={{fontSize:"200px",color:"crimson",marginLeft:"5%",padding:"20px"}}/> 
//                 </p>No Restaurants found for <span style={{color:"crimson"}}>"{searchQuery}</span> " As a name</div>
//         }
//       </div>
//       </>
//     )
// }


import React from "react";
import { useState,useEffect } from "react";
import data from "./data.json";
import axios from "axios";
import Contain from "./Contain";
import {BsSearchHeartFill} from "react-icons/bs";
import {BiCommentError} from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
function Search()
    {
    
    const [placeholder, setPlaceholder] = useState('Search Restaurant\'s Name');
    const [restaurants, setrestaurants] = useState([]);


    const [searchQuery, setSearchQuery] = useState('');

    const handleFocus = () => {
      setPlaceholder('');
    };
    const handleBlur = () => {
      setPlaceholder('Search Restaurant\'s Name');
    };

  

    const filteredRestaurants = restaurants.filter((restaurant) =>restaurant.nom && restaurant.nom.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    }
    
      
      useEffect(() => {
        const fetchData = () => {
          return axios
            .get('http://localhost:8082/restaurants/all')
            .then((response) => setrestaurants(response.data))
            .catch((error) => console.log(error));
      };
      fetchData();
        
      }, []);
      
      
      
      return(
        <>
         <div className="search-div">
            <AiOutlineSearch style={{color:"#2f71e7",fontSize:"30px",fontWeight:"bold",marginTop:"-6px",marginRight:"10px"}}/>
            <input type="text" className="search"  placeholder={placeholder} onBlur={handleBlur} onFocus={handleFocus} onChange={e=>setSearchQuery(e.target.value)}/>
            </div>
            <div className="slide">
            {filteredRestaurants.length > 0 ? filteredRestaurants.map((restaurant) => (
              <Contain
                id={restaurant.id}
                nom={restaurant.nom}
                img={restaurant.photos}
                
                adresse={restaurant.adresse}
            
              />
          )) : <div className="Error"> 
                  <p> <BiCommentError style={{fontSize:"200px",color:"crimson",marginLeft:"5%",padding:"20px"}}/> 
                  </p>No Restaurants found for <span style={{color:"crimson"}}>"{searchQuery}</span> " As a name</div>
          }
        </div>
        </>
     
  
  
      )
}
  
export default Search;