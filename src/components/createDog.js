import { useState } from "react";
import axios from "axios";
import "../Styles/Forms.css";

const CreateDog = () => {
  const [formData, setFormData] = useState({
    image: "",
    comments: {
      text: "",
      createdBy: "",
      sentAt: "",
    },
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log(formData);

    e.preventDefault();
    try {
      axios({
        method: "post",
        url: "https://walkies-backend.herokuapp.com/dogs",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }).then((response) => {
        // Console logging the data
        console.log(response.data);
      });

      //   const res = await axios.post("https://walkies-backend.herokuapp.com/dogs", formData, config)
      //   console.log(res)
    } catch (e) {
      setErrorMessage(e.response.data.message);
    }
  };

  return (
    <div className="create-dog-section">
      <h1>Add a pet 🐶🐾</h1>
      {errorMessage && <div className="failure">{errorMessage}</div>}
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter your dog's name"
          name="name"
          onChange={onChange}
        />
        <input
          type="number"
          placeholder="Enter your dog's age"
          name="age"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="What breed is your pup?"
          name="breed"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter your location"
          name="location"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Availability (Monday-Sunday)"
          name="availability"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Please provide a description of your dog"
          name="description"
          onChange={onChange}
        />

        <button className="button" type="submit">
          Add dog
        </button>
      </form>
    </div>
  );
};

export default CreateDog;
