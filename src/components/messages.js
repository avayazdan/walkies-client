import React from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";


function Messages() {
  const [messages, updateMessages] = React.useState("");
  const { dogId } = useParams();
console.log('this is the second dog id from messages ',dogId)
  React.useEffect(() => {
    axios({
      method: "get",
        url: `https://walkies-backend.herokuapp.com/messages/${dogId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        updateMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="dogs-list">
      <div>
        <h1>Hello, Human! 🐶 🐾</h1>
        <br />
        <h3>See what other users have been saying about your dogs.</h3>
      </div>
      {/* {messages ? (
        messages.map((x) => (
          <div className="dog-profile">
            <br /> <h2>{x.name}</h2>
            <img className="dog-image" alt="Dog" src={x.image}></img>
            <h3>Messages:</h3>
            <p>{x.comments}</p>
          </div>
        ))
      ) : (
        <p>Loading your messages 🐾</p>
      )} */}
    </section>
  );
}

export default Messages;
