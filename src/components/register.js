import "../Styles/Forms.css";
import React from "react";
import axios from "axios";
import dog1 from "../assets/loginDog1.png";
import dog2 from "../assets/loginDog2.png";

<link rel="stylesheet" href="../Styles/Form.css"></link>;

function Register() {
  // States for checking the errors
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  // Handling onChange
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  // Handling the form submission
  const onSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    //POST user
    React.useEffect(() => {

        async function fetchData() {
            const user = { name: name, eMail: email, password: password, image: profilePic, location: location, aboutMe: aboutMe, availability: availability, role: role };
            const resp = await axios.post('https://walkies-backend.herokuapp.com/register', user)
            updateUser(resp)  
            console.log(resp)
        }

        fetchData();
    }, )
    console.log(user)

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleProfilePic = (e) => {
        setProfilePic(e.target.value);
        setSubmitted(false);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
        setSubmitted(false);
    };

    const handleAboutMe = (e) => {
        setAboutMe(e.target.value);
        setSubmitted(false);
    };

    const handleAvailability = (e) => {
        setAvailability(e.target.value);
        setSubmitted(false);
    };

    const handleRole = (e) => {
        setRole(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || profilePic === '' || location === '' || aboutMe === '' || availability === '' || role === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h2>User {name} successfully registered! 🐶🐾 </h2>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h2>Please enter all the fields</h2>
            </div>
        );
    };
=======
    try {
      const resp = await axios.post(
        "https://walkies-backend.herokuapp.com/register",
        formData
      );
      console.log(resp);
      setSubmitted(true);
      setError(false);
    } catch (e) {
      setError(e.response.data.message);
    }
  };
>>>>>>> 0cbe3dbe8196ae951679f755c1331a75eb5cf705

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User successfully registered! 🐶🐾 </h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
      <div className="forms-and-photos">
        <img src={dog2} alt="dog"></img>
        <div className="form">
          <div>
            <h2>User Registration 🐾</h2>
          </div>
          {/* Calling to the methods */}

          <form onSubmit={onSubmit}>
            {/* Labels and inputs for form data */}
            <label className="label">Name</label>
            <input
              onChange={onChange}
              className="input"
              name="name"
              type="text"
            />

            <label className="label">Email</label>
            <input
              onChange={onChange}
              className="input"
              name="email"
              type="email"
            />

            <label className="label">Password</label>
            <input
              onChange={onChange}
              className="input"
              name="password"
              type="password"
            />

            <label className="label">Profile picture (URL)</label>
            <input
              onChange={onChange}
              className="input"
              name="profilePic"
              type="text"
            />

            <label className="label">Location</label>
            <input
              onChange={onChange}
              className="input"
              name="location"
              type="text"
            />

            <label className="label">About Me</label>
            <input
              onChange={onChange}
              className="input"
              name="aboutMe"
              type="text"
            />

            <label className="label">Availability (Monday-Sunday)</label>
            <input
              onChange={onChange}
              className="input"
              name="availability"
              type="text"
            />

            <label className="label">Are you a Owner or a Borrower 🐶🐾 </label>
            <input
              onChange={onChange}
              className="input"
              name="role"
              type="text"
            />

            <button className="button" type="submit">
              Submit
            </button>
          </form>
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
        </div>
        <img src={dog1} alt="dog"></img>
      </div>
    </>
  );
}

export default Register;
