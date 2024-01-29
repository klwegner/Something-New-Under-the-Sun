import { useState, useContext} from "react";
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


// Assuming you have a `isAuthenticated` state that turns `true` when the user is authenticated
// const { isAuthenticated } = useContext(AuthContext);


  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const requestBody = { username, password };


    

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then(async (response) => {
        storeToken(response.data.authToken);
        await authenticateUser();
        // console.log('I am in the post');
        setTimeout(() => {
          console.log('I am in the setTimeout'+ response.data.userId);
          navigate(`/profile/${response.data.userId}`);
        }, 250); 
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