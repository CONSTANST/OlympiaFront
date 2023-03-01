import "./App.css";

// import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./page/home";
import TicketBooK from "./page/ticketsBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticketsBook/:id" element={<TicketBooK />} />
      </Routes>
    </Router>
  );
}

export default App;
