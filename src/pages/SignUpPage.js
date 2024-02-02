import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function SignUpPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { username, email, password };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignUpPage">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignupSubmit}>
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
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmail}
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

      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      <p> Already have an account?</p>
      <Link to={"/login"}>Login</Link>
    </div>
  );
}

export default SignUpPage;
