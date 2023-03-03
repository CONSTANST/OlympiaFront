import "./App.css";

// import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Event from "./page/Event";
import Signup from "./page/Signup";
import TicketBooK from "./page/TicketsBook";
import EventToPublish from "./page/EventToPublish";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/ticketsBook/:id" element={<TicketBooK />} />
        <Route path="/eventToPublish" element={<EventToPublish />} />
        <Route path="/event/:id" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
