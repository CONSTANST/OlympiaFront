import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const DeleteTicket = () => {
  const {id} = useParams();
  const [ticketsId, setTicketsId] = useState("");
  const [isDeleted, setIsDeleted] = useState(
    localStorage.getItem("isDeleted") === "true" ? true : false
  );

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
      setIsDeleted(true);
      localStorage.setItem("isDeleted", "true");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (isDeleted) {
      localStorage.setItem("isDeleted", "true");
    }
  }, [isDeleted]);

  return (
    <div className="signup-container">
      {!isDeleted ? (
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Annuler une réservation</h2>
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
      ) : (
        <div className="event-body">
          <h2>Votre commande a bien été annulée</h2>
          <div className="event-container"></div>
        </div>
      )}
    </div>
  );
};

export default DeleteTicket;
