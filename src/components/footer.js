import { useContext } from "react";
import { AuthContext } from "../context/auth.context.js";
import { Link } from "react-router-dom";
import Inspo2 from "../assets/MainPage/Aurora.jpg";
import Shanghai from "../assets/MainPage/Shanghai.jpg";
import NightCities from "../assets/MainPage/NightCities.jpg";
import Tourists from "../assets/MainPage/3074128353_cf51d59c91_q.jpg";

function Footer() {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <footer>
      {isLoggedIn && (
        <>
          <div className="centeredRow">
            <div className="square">
              <Link to={"/randomCity"}>Get Inspired</Link>
              <img src={Inspo2} alt="travel inspiration" />
            </div>
            <div className="square">
              <Link to={"/addCity"}>Add a City</Link>
              <img src={Shanghai} alt="city" />
            </div>
            <div className="square">
              <Link to={"/cities"}>All Cities</Link>
              <img src={NightCities} alt="destination" />
            </div>
          </div>
        </>
      )}
    </footer>
  );
}
export default Footer;
