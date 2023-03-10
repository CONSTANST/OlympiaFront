import React, {useState} from "react";
import axios from "axios";

function DeleteEvent() {
  const [eventId, setEventId] = useState("");

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://olymtest--olympia-back-end--m45nvxqtn8py.code.run/events/delete/${eventId}`
      );
      console.log(response.data.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <input
          type="text"
          value={eventId}
          placeholder={eventId}
          onChange={(event) => setEventId(event.target.value)}
        />
        <button onClick={handleDelete}>Supprimer</button>
      </form>
    </div>
  );
}

export default DeleteEvent;
