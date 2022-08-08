import "../App.css";
import Earth from "../assets/icons/008-airplane.png";
import TravelPic from '../assets/travel.png';
import { AuthContext } from "../context/auth.context.js";
import { useContext } from "react";
import TravelPic2 from '../assets/travel2.png'

import { Link } from "react-router-dom";

function HomePage() {
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <>
      {!isLoggedIn && (
        <>
          <div className="HomePageLoggedOut">

          {/* <img src={TravelPic} alt="oldMapPic"/> */}
          <img src={TravelPic2} alt="mainPic" />
            <h2 className="mainPicOverlay">There's Always Something New</h2>
          
          <div className="centeredRow">

          <div className="square">List Cities to Visit</div>
          <div className="square">Add Destinations to See</div>
          <div className="square">Keep Track of Your Trips</div>
          <div className="square">Get Inspired</div>
          <div className="square">Travel On</div>
          </div>

            <div className="homePageBlurb">
              <h2>Step 1: List the places you want to see. </h2>
              <h2>Step 2: Experience what you want to experience.</h2>
              <p>We make travel planning easy.</p>
            </div>
          </div>
        </>
      )}

      {isLoggedIn && (
        <>
          <div className="HomePage">
            <div>
              <h1>
                <strong>There's always something new under the sun!</strong>
              </h1>
              <img src={TravelPic} alt="oldMapPic"/>
              <h1>Seize the Month. The Week. The Day. The Moment.</h1>
            </div>
          </div>

          <div className="HomePage2">
            <div className="homePageButtons2">
              <button>
                <a href="/cities">All Cities</a>
              </button>

              <button>
                <a href="/randomCity">Travel Inspo</a>
              </button>
            </div>

            {/* <div> */}
              <img src={Earth} alt="earth icon" />
              <h3>There's always something new under the sun!</h3>
            {/* </div> */}

            <div className="homePageButtons2bottom">
              <button>
                <a href="/addCity">Add a City</a>
              </button>
            </div>
          </div>
        </>
      )}

      {/* <div className="attribution"><a href="https://www.flaticon.com/free-icons/worldwide" title="worldwide icons">Worldwide icons created by DinosoftLabs - Flaticon</a></div> */}
    </>
  );
}

export default HomePage;
