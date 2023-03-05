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
    <div>
      <h2>Annuler une réservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID de la réservation :
          <input type="text" value={ticketsId} onChange={handleInputChange} />
        </label>
        <button type="submit">Annuler</button>
      </form>
    </div>
  );
};

export default DeleteTicket;
