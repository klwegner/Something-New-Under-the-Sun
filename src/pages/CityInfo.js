import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import MyMapComponent from "../components/MyMapComponent";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;

function CityInfo(props) {
  const { cities } = props;
  const { cityId } = useParams();
  const [foundCity, setFoundCity] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [userDestinations, setUserDestionations] = useState([]);
  const { storedToken, user } = useContext(AuthContext);
  const userId = user?._id;

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const city = cities.find((cityObj) => {
      return cityObj._id === cityId;
    });
  
    if (city) {
      setFoundCity(city);
      console.log("a found city " + foundCity);
    }
  
    axios
      .get(`${API_URL}/api/cities/${cityId}/destinations`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(`Response from /api/cities/${cityId}/destinations:  ${response}`);
        setDestinations(response.data.Destination);
        console.log('set destinations');
  
        // Fetch UserDestinations after destinations are fetched
        return axios.get(`${API_URL}/api/user-destinations/${userId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
      })
      .then((response) => {
        console.log(`Response from /api/user-destination/${userId}:   ${response}`);
        console.log('set userDestionations');
        setUserDestionations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId, cityId, cities, foundCity]);
  
  
  // setTimeout(() => {
  //   console.log("a found city");
  //   console.log(JSON.stringify(foundCity));
  // }, 4000);

  return (
    <>
      {foundCity && (
        <div className="cityDetails">
          <button className="cityInfoBtn">
            <Link to={`/cities/${foundCity._id}/edit`}>Edit City</Link>
          </button>
          <h1>{foundCity.name}</h1>
          <h3>
            Location: {foundCity.usState} {foundCity.country}
          </h3>
          <p>{foundCity.description}</p>

          {foundCity.visited === true ? (
            <p>
              {" "}
              <i>You have visited this city. </i>{" "}
            </p>
          ) : (
            <p>
              <i> You have not yet visited this city.</i>{" "}
            </p>
          )}
          <></>
          <div className="middleOfCityDetails">



            <div className="column">
              <h2>Destinations in {foundCity.name}</h2>

              {/* does not include completed info */}

  {destinations.length > 0 && (
                destinations.map((destination) => {
                  const matchingUserDestination = userDestinations.find(
                    (userDest) => userDest.destinationId === destination._id
                  );

                  const isCompleted = matchingUserDestination?.completed ?? false;

console.log(destination, matchingUserDestination, isCompleted);

                return (
                  <div key={destination._id} className="oneDestination">
                    <ul>
                      <li>
                        <Link to={`destinations/${destination._id}`}>
                          <h3>{destination.name}</h3>
                        </Link>
                      </li>

                      <p>{destination.description}</p>
                      <p>Category: {destination.destinationType}</p>
                      <p>
                        {" "}
                        Status:
                        {isCompleted === true ? (
                          <>
                            {" "}
                            <i>Done. 🎉</i>{" "}
                          </>
                        ) : (
                          <>
                            {" "}
                            <i> Still to do.</i>{" "}
                          </>
                        )}
                      </p>
                    </ul>
                    <div className="bottomBorder"></div>
                  </div>
                );
              })
              )}

              <button className="cityInfoBtn">
                <Link to={`/cities/${foundCity._id}/addDestination`}>
                  Add More
                </Link>
              </button>
            </div>

            <MyMapComponent foundCity={foundCity} />
          </div>
        </div>
      )}
    </>
  );
}
export default CityInfo;
