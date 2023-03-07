import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
// import ReactLoading from "react-loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(`http://localhost:3000/user/login`, {
        email,
        password,
      });
      if (response.data.token) {
        navigate("/");
      } else {
        alert("Une errure est survenue, veuillez réésayer.");
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("Mauvais email et/ou mot de passe");
        // setIsLoading(false);
      }
    }
  };
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Se connecter </h2>
        <input
          type="text"
          placeholder="Adresse email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <span className="signup-login-error-message">{errorMessage}</span>
        <button type="submit">Se connecter</button>
        <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
      </form>
    </div>
  );
};
export default Login;
