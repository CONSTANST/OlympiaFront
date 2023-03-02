import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
};
export default Login;
