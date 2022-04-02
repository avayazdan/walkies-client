import React from "react";
import { useState } from "react";
import "../Styles/Forms.css";
import axios from "axios";
import dog1 from "../assets/loginDog1.png";
import dog2 from "../assets/loginDog2.png";

<link rel="stylesheet" href="../Styles/Form.css"></link>;

function Login() {
  // States for login form
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [error, setError] = useState("");

  // Handling input changes
  const handleEMail = (e) => {
    setEMail(e.target.value);
    setSubmitted(false);
    setError(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    setError(false);
    console.log(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eMail === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);

      axios({
        method: "post",
        url: "https://walkies-backend.herokuapp.com/signin",
        data: {
          eMail: "laura@doggyHQ.com",
          password: "dogsaremyfave",
        },
      })
        .then((response) => {
          // console.log(`api key: ${response.data.token}`);
          localStorage.setItem("token", response.data.token);
          console.log(`api key: ${localStorage.token}`);
        })
        .catch((error) => {
          console.log(error);
        });

      // window.open("/dogs");
    }
  };

  const successMessage = () => {
    return (
      <div style={{ display: submitted ? "" : "none" }}>
        <h2>Login Successful. Redirecting you now...</h2>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div style={{ display: error ? "" : "none" }}>
        <h2>There was an error. Please check your fields and try again.</h2>
      </div>
    );
  };

  return (
    <section>
      <div className="forms-and-photos">
        <img src={dog2} alt="dog"></img>
        <div className="form">
          <h2>User Login 🐾</h2>
          {/* <h2>Login to your account here:</h2> */}
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
          <section>
            <form>
              <label className="label" htmlFor="eMail">
                Email Address:
              </label>
              <br></br>
              <input
                className="input"
                onChange={handleEMail}
                type="text"
                id="eMail"
                name="eMail"
              ></input>
              <br></br>

              <label className="label" htmlFor="password">
                Password:
              </label>
              <br></br>
              <input
                className="input"
                onChange={handlePassword}
                type="text"
                id="password"
                name="password"
              ></input>
              <br></br>

              <button className="button" onClick={handleSubmit} type="submit">
                Login
              </button>
            </form>
          </section>
        </div>
        <img src={dog1} alt="dog"></img>
      </div>
    </section>
  );
}

export default Login;
