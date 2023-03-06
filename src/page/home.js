import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/events`);
        setEvents(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(events);
  return (
    <div className="event-body">
      <p>Hello</p>
      {events.map((event) => (
        <div key={event._id} className="event-container">
          <h2 style={{color: "lightgray"}}>{event.name}</h2>
          <div key={event._id}>
            <p style={{color: "lightgray"}}>
              Place restante en categorie Orchestre {event.seats[0].orchestre}
            </p>
            <p style={{color: "lightgray"}}>
              Place restante en categorie Mezzanine {event.seats[0].mezzanine}
            </p>
            <p style={{color: "lightgray"}}>{event.date}</p>
            <Link to={`/ticketsBook/${event._id}`}>Réserver</Link>
            <Link to={`/event/${event._id}`}>Plus de détails?</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
