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
  const pricesByCategory = {};
  let totalPrice = 0;
  tickets.forEach((ticket) => {
    const price =
      ticket.category === "orchestre"
        ? ticket.event.orchestrePrice
        : ticket.event.mezzaninePrice;
    if (pricesByCategory[ticket.category]) {
      pricesByCategory[ticket.category] += price;
    } else {
      pricesByCategory[ticket.category] = price;
    }
    totalPrice += price;
  });

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
          <div key={ticket._id} className="ticket-info">
            <h2>{ticket.event.name}</h2>
            <p>Date: {new Date(ticket.event.date).toLocaleDateString()}</p>
            <p>
              Prix:
              {ticket.category === "orchestre"
                ? ticket.event.orchestrePrice
                : ticket.event.mezzaninePrice}
              €
            </p>
            <div>
              <Link to={`/deleteTicket/${ticket._id}`}>
                Souhaitez vous annulez votre reservation?
              </Link>
            </div>
          </div>
        ))}
        {tickets.length > 0 && (
          <div className="ticket-info">
            <p>Prix total: {totalPrice} €</p>
            {Object.entries(pricesByCategory).map(([category, price]) => (
              <p key={category}>
                Sous-total ({category}): {price} €
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TicketSearch;
