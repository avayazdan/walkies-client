import React from "react";
import "../Styles/dog.css";
import "../Styles/Forms.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Doggo() {
  const [dog, setDog] = React.useState(undefined);
  const { dogId } = useParams();

<<<<<<< HEAD
    return (
        <>
        <div class="content">
            <img class="hero-image" src="https://i0.wp.com/ohmydogblog.com/wp-content/uploads/2010/03/Emmett.jpg?w=1200&ssl=1" alt="Dog"></img>
            <div>
                <h1>Emmett</h1>
                <h2>Breed: Beagle</h2>
                <h2>Age: 7</h2>
                <h2>Location: South London</h2>
                <h2>Availability: Weekends and evenings</h2>
                <p>Oh, Emmett. Emmett is stubborn but so sweet, a little Velcro strip stuck to my pant-leg. He’s lazy and has serious food-hoarding issues. But he’ll do absolutely anything we ask of him, especially if there’s a treat involved. Emmett loves being the center of attention, loves meeting new people, loves going new places. Emmett is completely and utterly fearless. He tolerates what he doesn’t like – puppies, not being fed on time – with heavy sighs. But he’s happy, oh, is he happy. He wags his curly tail with his entire body. All he wants out of life is a good snuggle, a tasty snack, and a nice, long nap preferably outside, in the sun, on his back.</p>
                <form action="http://localhost:3000/messages">
                    <input type="submit" value="Mesage me!" />
                </form>
            </div>
=======
  React.useEffect(() => {
    console.log("this is dogId ", dogId);
    axios({
      method: "get",
      url: `https://walkies-backend.herokuapp.com/dogs/${dogId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        // Console logging the data
        console.log(`doggo data: `);
        console.log(response.data);

        setDog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dogId]);

  return (
    <>
      <div className="content">
        <img
          className="hero-image"
          src="https://i0.wp.com/ohmydogblog.com/wp-content/uploads/2010/03/Emmett.jpg?w=1200&ssl=1"
          alt="Dog"
        ></img>
        <div>
          <h1>Emmett</h1>
          <h2>Breed: Beagle</h2>
          <h2>Age: 7</h2>
          <h2>Location: South London</h2>
          <h2>Availability: Weekends and evenings</h2>
          <p>
            Oh, Emmett. Emmett is stubborn but so sweet, a little Velcro strip
            stuck to my pant-leg. He’s lazy and has serious food-hoarding
            issues. But he’ll do absolutely anything we ask of him, especially
            if there’s a treat involved. Emmett loves being the center of
            attention, loves meeting new people, loves going new places. Emmett
            is completely and utterly fearless. He tolerates what he doesn’t
            like – puppies, not being fed on time – with heavy sighs. But he’s
            happy, oh, is he happy. He wags his curly tail with his entire body.
            All he wants out of life is a good snuggle, a tasty snack, and a
            nice, long nap preferably outside, in the sun, on his back.
          </p>
>>>>>>> 0cbe3dbe8196ae951679f755c1331a75eb5cf705
        </div>
      </div>

      {/* {dog ? dog.map(x => <div className="dog-profile">
                <img className="dog-image" alt="Dog" src={x.image}></img>
                <h1>{x.name}</h1>
                <h2>Breed: {x.breed}</h2>
                <h2>Age: {x.age}</h2>
                <h2>Location: {x.location}</h2>
                <h2>About this Doggo: {x.description}</h2>
                <h2>Availability: {x.availability}</h2>
            </div>) : <p>Loading</p>}
            
            use this for messages endpoint ${x._id} */}
      <Link to={`/messages/`}>
        <button>Message me 🐾</button>
      </Link>
    </>
  );
}

export default Doggo;
