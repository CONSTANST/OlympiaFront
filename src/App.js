import "./App.css";

// import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/User/Login";
import Event from "./page/Event/Event";
import Signup from "./page/User/Signup";
import EventList from "./page/Event/EventAvailabilities";
import TicketBooK from "./page/Tickets/TicketsBook";
import EventToPublish from "./page/Event/EventToPublish";
import DeleteEvent from "./page/Event/DeleteEvent";
import DeleteTicket from "./page/Tickets/DeleteTickets";
import ModifyEvent from "./page/Event/ModifyEvent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/modifyEvent" element={<ModifyEvent />} />
        <Route path="/deleteEvent" element={<DeleteEvent />} />
        <Route path="/deleteTicket" element={<DeleteTicket />} />
        <Route path="/ticketsBook/:id" element={<TicketBooK />} />
        <Route path="/eventToPublish" element={<EventToPublish />} />
        <Route path="/events/availabilities" element={<EventList />} />
      </Routes>
    </Router>
  );
}

export default App;
