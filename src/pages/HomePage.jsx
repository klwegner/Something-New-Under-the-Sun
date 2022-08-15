import "../App.css";
import Earth from "../assets/icons/008-airplane.png";
import TravelPic from "../assets/travel.png";
import { AuthContext } from "../context/auth.context.js";
import { useContext, useEffect, useState } from "react";
import TravelPic2 from "../assets/travel2.png";
import City from "../assets/MainPage/City.jpg";
import Destination from "../assets/MainPage/Destination.jpg";
import Inspo from "../assets/MainPage/Inspo.jpg";
import Log from "../assets/MainPage/Log.jpg";
import Travel from "../assets/MainPage/Travel.jpg";

import { Link } from "react-router-dom";

function HomePage(props) {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [randoCity1, setRandoCity1] = useState(null);
  const [randoCity2, setRandoCity2] = useState(null);
  const [randoCity3, setRandoCity3] = useState(null);

  useEffect(() => {
    if (props.cities) {
      setRandoCity1(
        props.cities[Math.floor(Math.random() * props.cities.length)]
      );
      setRandoCity2(
        props.cities[Math.floor(Math.random() * props.cities.length)]
      );
      setRandoCity3(
        props.cities[Math.floor(Math.random() * props.cities.length)]
      );
    }
  }, [props.cities]);

  return (
    <>
      {!isLoggedIn && (
        <>
          <div className="HomePageLoggedOut">
            {/* <img src={TravelPic} alt="oldMapPic"/> */}
            <img src={TravelPic2} alt="mainPic" />
            <h2 className="mainPicOverlay">There's Always Something New</h2>

            <div className="top">
              <h2>
                <i>The world is vast.</i>
              </h2>
              <p>See the places and people you want to see!</p>
            </div>

            <div className="centeredRow">
              <div className="square">
                <Link to={"/login"}>For Inspo</Link>
                <img src={Inspo} alt="travel inspiration" />
              </div>
              <div className="square">
                <Link to={"/login"}>For Dreams</Link>
                <img src={City} alt="city" />
              </div>
              <div className="square">
                <Link to={"/login"}>For Goal Setting</Link>
                <img src={Destination} alt="destination" />
              </div>
              <div className="square">
                <Link to={"/login"}>For Memories</Link>
                <img src={Log} alt="travel log" />
              </div>
              <div className="square">
                <Link to={"/login"}>For Life</Link>
                <img src={Travel} alt="Plane in flight" />
              </div>
            </div>

            <div className="homePageBlurb"></div>
          </div>
        </>
      )}

      {isLoggedIn && (
        <>
          <div className="HomePage">
            <div>
              <h1>Travel the world.</h1>
              <p> Or just your city.</p>
            </div>

            <div className="rectangleRow">
              <div className="rectangle">
                {randoCity1 && (
                  <div className="randoCityDetails">
                    <h2><Link to={`./cities/${randoCity1._id}`}>{randoCity1.name}</Link></h2>
                    {/* <p>{randoCity1.description}</p> */}
                  </div>
                )}
              </div>

              <div className="rectangle">
                {randoCity2 && (
                  <div className="randoCityDetails">
                    <h2><Link to={`./cities/${randoCity2._id}`}>{randoCity2.name}</Link></h2>
                    {/* <p>{randoCity2.description}</p> */}
                  </div>
                )}
              </div>

              <div className="rectangle">
                {randoCity3 && (
                  <div className="randoCityDetails">
                    <h2><Link to={`./cities/${randoCity3._id}`}>{randoCity3.name}</Link></h2>
                    {/* <p>{randoCity3.description}</p> */}
                  </div>
                )}
              </div>
            </div>

            {/* <div className="square">
<Link to={'/cities/:cityId'}>Your Cities</Link><img src={Tourists} alt="travel log"/>

</div> */}

            {/* <div className="square">
<Link to={'/login'}>Go Travel</Link><img src={Travel} alt="Plane in flight"/>
</div> */}

            {/* <div>
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

             <div> 
              <img src={Earth} alt="earth icon" />
              <h3>There's always something new under the sun!</h3>
             </div> 

            <div className="homePageButtons2bottom">
              <button>
                <a href="/addCity">Add a City</a>
              </button>
            </div>*/}
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
