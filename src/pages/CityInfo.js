import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Destination from "../components/Destination";
import MyMapComponent from "../components/MyMapComponent";

const API_URL = process.env.REACT_APP_API_URL;

function CityInfo(props) {
  const { cities } = props;
  const { cityId } = useParams();
  const [foundCity, setFoundCity] = useState(null);
  const [destinations, setDestinations] = useState([]);

  console.log(destinations);
  console.log(cities);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const city = cities.find((cityObj) => {
      return cityObj._id === cityId;
    });

    if (city) {
      setFoundCity(city);
    }
  }, [cityId, cities]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/cities/${cityId}/destinations`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data);
        setDestinations(response.data.Destination);
      })
      .catch((error) => console.log(error));
  }, [cityId]);

  return (
    <>
      {foundCity && (
        <div className="cityDetails">
          <button>
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

              {
                destinations.map((destination) => {
                  return (
                    <div key={destination._id} className="oneCity">
                      <ul>
                        <li>
                          <Link to={`${destination._id}`}>
                            <h3>{destination.name}</h3>
                          </Link>
                        </li>

                        <p>{destination.description}</p>
                        <p>{destination.destinationType}</p>
                      </ul>
                    </div>
                  );
                })}

              {/* {destinations &&
            destinations
            .filter((destination) => {
if (destination.cityId === cityId) {
  return destination;
          }
          }).map((destination) =>{
            return (
              <div key={destination._id} className="oneCity">
                 
                  <ul>

                  <li>
                  <Link to={`${destination._id}`}>
                    <h3>{destination.name}</h3>
                  </Link>
                  </li>

                  <p>{destination.description}</p>
                  <p>{destination.destinationType}</p>
                  </ul>
                </div>
            )})
          } */}
              <Link to={`/cities/${foundCity._id}/addDestination`}>
                Add Destination
              </Link>
            </div>

            <MyMapComponent />
          </div>

          <h2>Interested in more cool things from {foundCity.name}?</h2>
          <p>See Atlas Obscura's suggestions here.</p>
          {/* put component here that allows users to use AtlasObscura API to see interesting locations in city */}
        </div>
      )}
    </>
  );
}
export default CityInfo;
