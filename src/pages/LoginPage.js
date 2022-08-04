import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;

function LogInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const requestBody = { username, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();       
        navigate("/profile/:userId");
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <div className="SignUpPage">
      <h1>Login</h1>
      <form onSubmit={handleSubmitLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
}

export default LogInPage;