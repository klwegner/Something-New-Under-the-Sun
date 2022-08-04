import "../App.css";
import Earth from "../assets/icons/008-airplane.png";
import { AuthContext } from "../context/auth.context.js";
import { useContext } from "react";
import Register from "../assets/icons/003-register.png";
import Login from "../assets/icons/001-login.png";

import { Link } from "react-router-dom";

function HomePage() {
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <>
      {!isLoggedIn && (
        <>
          <div className="centeredRow">
            <h2>There's Always Something New...</h2>
          </div>
          <div className="HomePageLoggedOut">
            <h1>
              <strong>Under the Sun</strong>
            </h1>
            <img
              src={Earth}
              alt="the Scottish Highlands pic"
              className="mainPic"
            />
            {/* <h1>Seize the Month. The Week. The Day. The Moment.</h1> */}

            <div className="centeredRow2">
              <Link to={"/signup"}>
                <button>
                  <img src={Register} alt="home"></img>
                </button>
              </Link>
              <Link to={"/login"}>
                <button>
                  <img src={Login} alt="login"></img>
                </button>
              </Link>
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
              <img src={Earth} alt="the Scottish Highlands pic" />
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
