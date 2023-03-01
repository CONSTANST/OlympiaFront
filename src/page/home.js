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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "spaceEvenly",
      }}
    >
      <p>Hello</p>
      {events.map((event) => (
        <div
          key={event._id}
          style={{
            padding: 20,
          }}
        >
          <h2 style={{color: "lightgray"}}>{event.name}</h2>
          <div key={event._id}>
            <p style={{color: "lightgray"}}>
              Place restante en categorie Orchestre {event.seats.orchestre}
            </p>
            <p style={{color: "lightgray"}}>
              Place restante en categorie Mezzanine {event.seats.mezzanine}
            </p>
            <Link to={`/ticketsBook/${event._id}`}>Réserver</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
