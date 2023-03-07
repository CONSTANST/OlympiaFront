import axios from "axios";
import {useState} from "react";
import {useParams} from "react-router-dom";

const TicketBooK = () => {
  const {id} = useParams();

  const [seats, setSeats] = useState(1);
  const [category, setCategory] = useState("orchestre");
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  console.log(id);
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
      console.log(response);
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
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
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
        <input
          type="email"
          id="mail"
          name="mail"
          placeholder="email"
          value={mail}
          onChange={handleMailChange}
          required
        />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Name"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <button type="submit">Book tickets</button>
      </form>
    </div>
  );
};

export default TicketBooK;
