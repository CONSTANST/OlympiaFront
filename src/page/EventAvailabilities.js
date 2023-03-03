import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const EventList = () => {
  const [date, setDate] = useState("");
  const [events, setEvents] = useState([]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/event/availabilities?date=${date}`
      );
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Date :
          <input type="text" value={date} onChange={handleDateChange} />
        </label>
        <button type="submit">Rechercher</button>
      </form>
      {events ? (
        <div>
          {events.map((event) => (
            <div key={event._id}>
              <p>{event.name}</p>
              <Link to={`/ticketsBook/${event._id}`}>Réserver</Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun événement à cette date</p>
      )}
    </div>
  );
};

export default EventList;
