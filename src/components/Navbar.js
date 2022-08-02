import { Link } from "react-router-dom";
import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context.js";

function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav>

        <div className="navLinks">
            <Link to='/'><button>Home</button></Link>
            <Link to='/error'><button>Error</button></Link>


            {isLoggedIn && (
        <>
            <Link to='/Profile/:profileId'><button>Your Profile</button></Link>   
            <button onClick={logOutUser}>Log Out</button>
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