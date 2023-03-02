import "./App.css";

// import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./page/home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import TicketBooK from "./page/ticketsBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/ticketsBook/:id" element={<TicketBooK />} />
      </Routes>
    </Router>
  );
}

export default App;
