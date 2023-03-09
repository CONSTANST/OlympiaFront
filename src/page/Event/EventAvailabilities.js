import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const EventList = () => {
  const [date, setDate] = useState("");
  const [events, setEvents] = useState();
  console.log(events);
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
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          Date :
          <input type="text" value={date} onChange={handleDateChange} />
        </label>
        <button type="submit">Rechercher</button>
        {events ? (
          <div className="event-body">
            {events.map((event) => (
              <div key={event._id} className="event-container">
                <div>
                  <p>Date : {new Date(event.date).toLocaleDateString()}</p>
                  <p>Name : {event.name}</p>
                  {localStorage.setItem("eventName", event.name)}
                  <img src={event.event_image.url} alt={event.name} />
                  {localStorage.setItem("eventImage", event.event_image.url)}
                  <p>Seats :</p>

                  {event.seats.map((seat) => (
                    <p key={seat._id}>
                      Orchestre : {seat.orchestre}, Mezzanine : {seat.mezzanine}
                    </p>
                  ))}

                  <p>Orchestre Price : {event.orchestrePrice}</p>
                  <p>Mezzanine Price : {event.mezzaninePrice}</p>
                </div>
                <Link to={`/ticketsBook/${event._id}`}>Réserver</Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Aucun événement à cette date</p>
        )}
      </form>
    </div>
  );
};

export default EventList;
