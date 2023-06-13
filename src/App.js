import "./App.css";
import Contain from "./components/Contain";
import Footer from "./components/Footer";
import Data from "./components/Data";
import DropMenu from "./components/DropMenu";

import Aboutt from "./components/Aboutt";
import Search from "./components/Search";
import Details from "./components/Details";
import Home from "./components/Home";

import Mapp from "./components/Mapp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Reservation from "./components/Reservation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyReservation from "./components/MyReservation";
import Favoris from "./components/Favoris";
import Profil from "./components/Profil";
import Admin from "./components/Admin";
import Favorites from "./components/Favorites";
//import fetchData from './components/Axios';

<link
  href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
  rel="stylesheet"
></link>;

function App() {
  //fetchData()
  //console.log({globalData})
  const userid = localStorage.getItem("userid");
  console.log(userid);
  return (
    <>
      <div className="app">
        <DropMenu />

        <Routes>
          <Route path="/" element={<Home />} forceRefresh={true} />
          <Route path="/Restaurants" element={<Search />} />

          <Route path="/AboutUs" element={<Aboutt />} />
          <Route path="/Details/:id" element={<Details />} />

          <Route path="/Map" element={<Mapp />} />
          <Route path="/Reserve/:restaurantId" element={<Reservation />} />
          <Route path="/MyReservation" element={<MyReservation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favoris />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/favoris" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
