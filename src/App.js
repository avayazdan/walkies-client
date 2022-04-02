import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Dogs from "./components/Dogs.js";
import Doggo from "./components/Doggo.js";
import Messages from "./components/Messages.js";
import CreateDog from "./components/createDog";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/dogs/:dogId" element={<Doggo />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/dogs/create" element={<CreateDog />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
