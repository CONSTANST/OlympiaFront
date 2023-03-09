import "./App.css";

// import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/User/Login";
import Event from "./page/Event/Event";
import Signup from "./page/User/Signup";
import Header from "./components/Header";
import TicketSearch from "./page/Tickets/Ticket";
import DeleteEvent from "./page/Event/DeleteEvent";
import ModifyEvent from "./page/Event/ModifyEvent";
import TicketBooK from "./page/Tickets/TicketsBook";
import DeleteTicket from "./page/Tickets/DeleteTickets";
import EventList from "./page/Event/EventAvailabilities";
import EventToPublish from "./page/Event/EventToPublish";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/tickets" element={<TicketSearch />} />
        <Route path="/deleteEvent" element={<DeleteEvent />} />
        <Route path="/modifyEvent/:id" element={<ModifyEvent />} />
        <Route path="/deleteTicket/:id" element={<DeleteTicket />} />
        <Route path="/ticketsBook/:id" element={<TicketBooK />} />
        <Route path="/eventToPublish" element={<EventToPublish />} />
        <Route path="/events/availabilities" element={<EventList />} />
      </Routes>
    </Router>
  );
}

export default App;
