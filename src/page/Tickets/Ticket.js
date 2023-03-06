import React, {useState} from "react";
import axios from "axios";

function TicketSearch() {
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post("/tickets", {mail: email});
      if (response.data) {
        setTickets(response.data);
        setErrorMessage("");
      } else {
        setErrorMessage("Pas de reservation trouver pour cette utilisateur");
        setTickets([]);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setTickets([]);
    }
  };

  return (
    <div>
      <h1>Vos billets</h1>
      <input
        type="text"
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
        </div>
      ))}
    </div>
  );
}

export default TicketSearch;
