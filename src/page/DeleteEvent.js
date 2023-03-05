import React, {useState} from "react";
import axios from "axios";

function DeleteEvent() {
  const [eventId, setEventId] = useState("");

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/events/delete/${eventId}`);
      console.log(response.data.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={eventId}
        onChange={(e) => setEventId(e.target.value)}
      />
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
}

export default DeleteEvent;
