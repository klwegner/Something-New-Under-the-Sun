import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const { search } = window.location;
const query = new URLSearchParams(search).get("s");
const API_URL = "http://localhost:5005";

function AllCities(props) {
  const { cities } = props;
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="pageTop">
        <p> Cities </p>
        <label> Search Cities</label>
        <input
          placeholder="Enter City Name"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className="allCities">
        {cities &&
          cities
            .filter((city) => {
              if (query === "") {
                return city;
              } else if (
                city.name.toLowerCase().includes(query.toLowerCase())
              ) {
                return city;
              }
            })
            .map((city) => {
              return (
                <div key={city._id} className="oneCity">
                  <Link to={`${city._id}`}>
                    <h3>{city.name}</h3>
                  </Link>
                  <p>{city.description}</p>
                </div>
              );
            })}
      </div>
    </>
  );
}
export default AllCities;
