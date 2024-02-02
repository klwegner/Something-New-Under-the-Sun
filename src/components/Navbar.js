import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context.js";
import Home from "../assets/icons/018-home-2.png";
import Profile from "../assets/icons/019-profile.png";
import LogOut from "../assets/icons/016-log-out-2.png";
import Register from "../assets/icons/003-register.png";
import Login from "../assets/icons/001-login.png";
// import Backpack from '../assets/icons/009-backpack.png'
import SignUpPage from "../pages/SignUpPage.js";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <h1>Under the Sun</h1>

      <div className="navLinks">
        {isLoggedIn && (
          <>
            <Link to={"/Profile/:profileId"}>Profile</Link>
            <Link to={"/"}>Home</Link>
            <button onClick={logOutUser}>Logout</button>
          </>
        )}

        {!isLoggedIn && (
          <>
            <>
              {/* <Link to='/'><button><img src={Home} alt='home'></img></button></Link>
            <Link to={"/signup"}><button><img src={Register} alt='home'></img></button></Link>
            <Link to={"/login"}><button><img src={Login} alt='login'></img></button></Link> */}

              <Link to="/">Home</Link>

              <Link to={"/signup"}>Signup</Link>

              <Link to={"/login"}>Login</Link>
            </>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
