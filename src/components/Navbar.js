import { Link } from "react-router-dom";
import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context.js";

function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav>
        <div>
        <h1>Under the Sun</h1>
        </div>
        <div className="navLinks">
            <Link to='/'><button>Home</button></Link>
            <Link to='/error'>Error</Link>


            {isLoggedIn && (
        <>
            <Link to='/Profile/:profileId'><button>Your Profile</button></Link>   
            <button onClick={logOutUser}>Log Out</button>
            <span>{user && user.name}</span>
        </>
        )}

        {!isLoggedIn && (

        <>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/login"><button>Login</button></Link>

        </>
      )}
            </div>
        </nav>
    )
}

export default Navbar;