import React, {useState} from "react";
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
        `http://localhost:3000/events/availabilities?date=${date}`
      );
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(date);
  //   console.log(events);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Date :
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <button type="submit">Rechercher</button>
      </form>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      ) : (
        <p>Aucun événement à cette date</p>
      )}
    </div>
  );
};

export default EventList;
