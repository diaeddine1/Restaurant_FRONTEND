import React, { useEffect, useState } from "react";
import tinder from "../Images/tinder.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8082/users/login", {
        email: email,
        password: password,
      });
      console.log(response.data);
      if (response.data.id !== undefined) {
        setError(false);
        localStorage.setItem("userid", response.data.id);
        localStorage.setItem("user",response.data.nom);
        navigate("/");
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err);
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
          <h1>Login to explore our services</h1>
          <form onSubmit={handlesubmit}>
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
                type="password"
                required="required"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Password</span>
            </div>
            <div className="inputbox">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
        <br />
        {error && <h6 className="errlogin">incorrect email or password</h6>}
        <br />
        <br />
        <h4>
        <Link className="linkd" to="/signup">
          Dont Have An Account? Register Here!
         
          
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default Login;
