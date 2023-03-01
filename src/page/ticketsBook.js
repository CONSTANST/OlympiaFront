import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const TicketBooK = () => {
  const {id} = useParams();
  const [events, setEvents] = useState([]);
  const [seats, setSeats] = useState(1);
  const [category, setCategory] = useState("orchestre");
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/tickets/book", {
        eventId: id,
        seats,
        category,
        mail,
        username,
      });
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSeatsChange = (event) => {
    const seats = event.target.value;
    setSeats(seats);
  };
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setCategory(category);
  };
  const handleMailChange = (event) => {
    const mail = event.target.value;
    setMail(mail);
  };
  const handleUsernameChange = (event) => {
    const username = event.target.value;
    setUsername(username);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="seats">Number of seats (1-4):</label>
        <input
          type="number"
          id="seats"
          name="seats"
          value={seats}
          onChange={handleSeatsChange}
          min="1"
          max="4"
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={handleCategoryChange}
          required
        >
          <option value="orchestre">Orchestre</option>
          <option value="mezzanine">Mezzanine</option>
        </select>
      </div>
      <div>
        <label htmlFor="mail">Email:</label>
        <input
          type="email"
          id="mail"
          name="mail"
          value={mail}
          onChange={handleMailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <button type="submit">Book tickets</button>
    </form>
  );
};

export default TicketBooK;
