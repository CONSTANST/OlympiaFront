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

  return (
    <div className="event-body">
      {events
        .filter((event) => new Date(event.date) > new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((event) => (
          <div key={event._id} className="event-container">
            {localStorage.setItem("eventName", event.name)}
            <h2 style={{color: "lightgray"}}>{event.name}</h2>

            <div>
              <p style={{color: "lightgray"}}>
                Place restante en categorie Orchestre {event.seats[0].orchestre}
              </p>
              <p style={{color: "lightgray"}}>
                Place restante en categorie Mezzanine {event.seats[0].mezzanine}
              </p>
              <p style={{color: "lightgray"}}>
                {new Date(event.date).toLocaleDateString()}
              </p>
              <Link to={`/ticketsBook/${event._id}`}>Réserver</Link>
              <Link to={`/event/${event._id}`}>Plus de détails?</Link>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Home;
