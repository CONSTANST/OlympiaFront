import React, {useState} from "react";
import axios from "axios";

const DeleteTicket = () => {
  const [ticketsId, setTicketsId] = useState("");

  const handleInputChange = (event) => {
    setTicketsId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`/tickets/delete/${ticketsId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Annuler une réservation</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          ID de la réservation :
          <input
            type="text"
            placeholder="ID de la reservation"
            value={ticketsId}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Annuler</button>
      </form>
    </div>
  );
};

export default DeleteTicket;
