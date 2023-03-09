import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";

import axios from "axios";

const Event = () => {
  const params = useParams();
  // const navigate = useNavigate();

  const [event, setEvent] = useState([]);
  console.log(event);
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/events/${params.id}`
        );
        setEvent([response.data]);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchEvent();
  }, [params.id]);

  return (
    <div className="event-body">
      <div className="event-container">
        <Link to={`/modifyEvent/${params.id}`}>Modifier? </Link>
        <div>
          {event.map((item) => (
            <div key={item._id}>
              <p>Date : {new Date(item.date).toLocaleDateString()}</p>
              <p>Name : {item.name}</p>
              {localStorage.setItem("eventName", item.name)}
              <img src={item.event_image.url} alt={item.name} />
              {localStorage.setItem("eventImage", item.event_image.url)}
              <p>Seats :</p>

              {item.seats.map((seat) => (
                <p key={seat._id}>
                  Orchestre : {seat.orchestre}, Mezzanine : {seat.mezzanine}
                </p>
              ))}

              <p>Orchestre Price : {item.orchestrePrice}</p>
              <p>Mezzanine Price : {item.mezzaninePrice}</p>
            </div>
          ))}
        </div>
        <Link to={`/ticketsBook/${params.id}`}>Réserver?</Link>
        <Link to={`/deleteEvent/${params.id}`}>Supprimer l'événement</Link>
        <Link to={`/eventToPublish`}>D'autre événement à publier?</Link>
      </div>
    </div>
  );
};
export default Event;
