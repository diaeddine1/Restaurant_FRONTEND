import React, { useState } from "react";
import tinder from "../Images/tinder.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8082/users/save", {
        phone_number: "",
        email: email,
        nom: nom,
        password: password,
        role: "USER",
        status: "ACTIVE",
        restaurant: null,
      });
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <li className="logo">
          <span className="ea">EA</span>
          <img src={tinder} />
        </li>
        <br />
        <div className="center">
          <h1>Sign up to use our services</h1>
          <form onSubmit={handlesubmit}>
            <div className="inputbox">
              <input
                type="text"
                required="required"
                onChange={(e) => setNom(e.target.value)}
              />
              <span>Nom</span>
            </div>
            <div className="inputbox">
              <input
                type="text"
                required="required"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Email</span>
            </div>
            <div className="inputbox">
              <input
                type="text"
                required="required"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Password</span>
            </div>
            <div className="inputbox">
              <input type="submit" value="Sign up" />
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
        <h4>
      
          <Link className="linkd" to="/login">
          Already Have An Account? Login Here!
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default Signup;
