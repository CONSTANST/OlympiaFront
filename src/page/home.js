import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);
  console.log(events);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://olymtest--olympia-back-end--m45nvxqtn8py.code.run/events`
        );
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
            <h2>{event.name}</h2>
            <img src={event.event_image.url} alt={event.name} />
            <div>
              <p>
                Place restante en categorie Orchestre {event.seats[0].orchestre}
              </p>
              <p>
                Place restante en categorie Mezzanine {event.seats[0].mezzanine}
              </p>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <Link to={`/ticketsBook/${event._id}`} className="event-link">
                Réserver
              </Link>
              <Link to={`/event/${event._id}`} className="event-link">
                Plus de détails?
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Home;
