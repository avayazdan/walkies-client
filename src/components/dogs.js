import React from "react";
import axios from "axios";
import "../Styles/dogs.css";
import { Link } from "react-router-dom";
<link rel="stylesheet" href="../Styles/dogs.css"></link>;

function Dogs() {
  const [dog, setDog] = React.useState(undefined);

  console.log(localStorage.token);

  React.useEffect(() => {
    console.log("Running useEffect");

    axios({
      method: "get",
      url: "https://walkies-backend.herokuapp.com/dogs",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        // Console logging the data
        console.log(`doggo data: `);
        console.log(response.data);

        // reload
        // Setting the data to State
        setDog(response.data);
        console.log(`Fetching ${response.data[0].name} and friends...`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="dogs-page">
      <h1>Dogs Near You</h1>

      <div className="dogs-list">
        {dog ? (
          dog.map((x) => (
            <div className="dog-profile">
              <img className="dog-image" alt="Dog" src={x.image}></img>
              <h1 className="dog-name">{x.name}</h1>
              <h2>Breed: {x.breed}</h2>
              <h2>Age: {x.age}</h2>
              <Link to={`/dogs/${x._id}`}>
                <button>More About Me</button>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </section>
  );
}

export default Dogs;
