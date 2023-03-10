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
          `https://olymtest--olympia-back-end--m45nvxqtn8py.code.run/events/${params.id}`
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
      <div>
        <div className="event-container">
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
          <Link to={`/ticketsBook/${params.id}`} className="event-link">
            Réserver?
          </Link>
        </div>
        <Link to={`/modifyEvent/${params.id}`} className="event-link">
          Modifier?{" "}
        </Link>
        <Link to={`/deleteEvent/${params.id}`} className="event-link">
          Supprimer l'événement
        </Link>
        <Link to={`/eventToPublish`} className="event-link">
          D'autre événement à publier?
        </Link>
      </div>
    </div>
  );
};
export default Event;
