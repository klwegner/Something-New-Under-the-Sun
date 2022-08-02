import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Destination from "../components/Destination";
import MyMapComponent from "../components/MyMapComponent";


const API_URL = "http://localhost:5005";

function CityInfo(props) {
  const { cities } = props;
  const { cityId } = useParams();
  const [foundCity, setFoundCity] = useState(null)

  useEffect(()=>{
const storedToken = localStorage.getItem("authToken");
const city = cities.find((cityObj) =>{
return cityObj._id === cityId;
});

if (city) {
  setFoundCity(city)
}
  }, [cityId, cities]);

  return (
    <>
      {foundCity && (
        
        <div className="cityDetails">
        <button><Link to={`/cities/${foundCity._id}/edit`}>Edit City</Link></button>
          <h1>{foundCity.name}</h1>
          <h2>{foundCity.location}</h2>
          <p>{foundCity.description}</p>    

<>
{foundCity.visited === true ? <p> You have visited this city. </p> : <p>You have not yet visited this city.</p>}
</>    
          <h2>User Destinations in {foundCity.name}</h2>
          <Destination />
          <ul>
            <li>Destination 1</li>
            <li>Destination 2</li>
          </ul>
<MyMapComponent/>

          <h2>Interested in more cool things from {foundCity.name}?</h2>
          <p>See Atlas Obscura's suggestions here.</p>
      {/* put component here that allows users to use AtlasObscura API to see interesting locations in city */}
        </div>
      )}
    </>
  );
}
export default CityInfo;
