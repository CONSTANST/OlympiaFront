import axios from "axios";
import {useState, useEffect} from "react";
import {
  useParams,
  Link,
  useNavigate,
  // useLocation
} from "react-router-dom";

const TicketBooK = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const eventName = localStorage.getItem("eventName");

  const [seats, setSeats] = useState(1);
  const [category, setCategory] = useState("orchestre");
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [orchestrePrice, setOrchestrePrice] = useState(0);
  const [mezzaninePrice, setMezzaninePrice] = useState(0);

  const cachedResponse = localStorage.getItem("response");
  const [response, setResponse] = useState(
    cachedResponse ? JSON.parse(cachedResponse) : null
  );
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/events/${id}`);
        setOrchestrePrice(response.data.orchestrePrice);
        setMezzaninePrice(response.data.mezzaninePrice);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchPrices();
  }, [id]);

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
      console.log(response.data.message);
      if (response) {
        setIsLoading(true);
        setResponse(response);
        navigate("/payment", {
          state: {mezzaninePrice, seats, category, orchestrePrice, eventName},
        });
      }
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
  return !isLoading ? (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>{eventName}</h2>
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
  ) : (
    <div className="signup-container">
      <div className="signup-form">
        <p>{response.data.message}</p>
        <Link to={`/`}>accueil</Link>
      </div>
    </div>
  );
};

export default TicketBooK;
