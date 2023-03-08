import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function TicketSearch() {
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:3000/tickets", {
        mail: email,
      });
      if (response.data) {
        setTickets(response.data);
        setErrorMessage("");
      } else {
        setErrorMessage("Pas de reservation trouver pour cette utilisateur");
        setTickets([]);
      }
    } catch (error) {
      setErrorMessage(error.response);
      setTickets([]);
    }
  };

  return (
    <div className="event-body">
      <div className="event-container">
        <h1>Vos billets</h1>
        <input
          type="text"
          placeholder="Votre email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button onClick={handleSearch}>Rechercher</button>
        <p>{errorMessage}</p>
        {tickets.map((ticket) => (
          <div key={ticket._id}>
            <h2>{ticket.event.name}</h2>
            <p>Date: {new Date(ticket.event.date).toLocaleDateString()}</p>
            <p>Prix: {ticket.price} €</p>
            <div>
              <p>Souhaitez vous annulez votre reservation?</p>
              <Link to={`/deleteTicket/${ticket._id}`}>
                Annuler la reservation
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketSearch;
