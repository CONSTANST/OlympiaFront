import React, {useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const DeleteTicket = () => {
  const {id} = useParams();
  const [ticketsId, setTicketsId] = useState("");

  const handleInputChange = (event) => {
    setTicketsId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:3000/tickets/delete/${id}`
      );
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
          Votre email :
          <input
            type="text"
            placeholder="email"
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
