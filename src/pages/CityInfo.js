import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
// import EditDestinationComp from "../components/EditDestinationComp";
import MyMapComponent from "../components/MyMapComponent";

const API_URL = process.env.REACT_APP_API_URL;

function CityInfo(props) {
  const { cities } = props;
  const { cityId } = useParams();
  const [foundCity, setFoundCity] = useState(null);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const city = cities.find((cityObj) => {
      return cityObj._id === cityId;
    });

    if (city) {
      setFoundCity(city);
      // console.log(foundCity)
    }
  }, [cityId, cities]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/cities/${cityId}/destinations`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // console.log(response.data);
        setDestinations(response.data.Destination);
      })
      .catch((error) => console.log(error));
  }, [cityId]);

  return (
    <>
      {foundCity && (
        <div className="cityDetails">
          <button className='cityInfoBtn'>
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
                    <div key={destination._id} className="oneDestination">
                      <ul>
                        <li>
                          <Link to={`destinations/${destination._id}`}>
                            <h3>{destination.name}</h3>
                          </Link>
                        </li>

                        <p>{destination.description}</p>
                        <p>Category: {destination.destinationType}</p>
                        <p> Status:

                         {destination.done === true ? (
           
              <>{" "}<i>Done. 🎉</i>{" "}</>) : (<> <i> Still to do.</i>{" "}</> )} 
              </p>
                      
                      </ul>
                      <div className='bottomBorder'></div>
                    </div>
                  );
                })}

              <button className='cityInfoBtn'><Link to={`/cities/${foundCity._id}/addDestination`}>
                Add More
              </Link>
              </button>
            </div>

            <MyMapComponent foundCity = {foundCity}/>
          </div>
        </div>
      )}
    </>
  );
}
export default CityInfo;
