import { Link } from "react-router-dom";
import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context.js";
import Home from '../assets/icons/018-home-2.png'
import Profile from '../assets/icons/019-profile.png'
import LogOut from '../assets/icons/016-log-out-2.png'
// import Register from '../assets/icons/003-register.png';
// import Login from '../assets/icons/001-login.png';
// import Backpack from '../assets/icons/009-backpack.png'
// import SignUpPage from "../pages/SignUpPage.js";

function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav>
        <div className="navLinks">

            {isLoggedIn && (
        <div>
            <Link to={'/Profile/:profileId'}><button><img src={Profile} alt='userProfile'></img></button></Link>   
        <Link to={'/'}><button><img src={Home} alt='home'></img></button></Link>
            <button onClick={logOutUser}><img src={LogOut} alt='LogOut'></img></button>
        </div>
        )}

        {!isLoggedIn && (
<>
        {/* <div>
        <Link to='/'><button><img src={Home} alt='home'></img></button></Link>
            <Link to={"/signup"}><button><img src={Register} alt='home'></img></button></Link>
            <Link to={"/login"}><button><img src={Login} alt='login'></img></button></Link>

        </div> */}
        </>
      )}
            </div>
        </nav>
    )
}

export default Navbar;