import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;

function EditCity(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [usState, setUsState] = useState("");
  const [country, setCountry] = useState("");
  const [visited, setVisited] = useState(false);
  const navigate = useNavigate();
  const { cityId } = useParams();
  const { storedToken, user } = useContext(AuthContext);
  const userId = user?._id;

  // console.log("Here is the userId on the edit page " + userId);
  // console.log("Here is the city Id " + cityId);

  useEffect(() => {
    if (userId) {
      axios
        .get(`${API_URL}/api/cities/${cityId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const oneCity = response.data;
          setName(oneCity.name);
          setDescription(oneCity.description);
          setUsState(oneCity.usState);
          setCountry(oneCity.country);
        })
        .catch((error) => console.log(error));

      axios
        .get(`${API_URL}/api/user-cities/${userId}/${cityId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const userCity = response.data;
          if (userCity) {
            // console.log("found a city!  " + userCity);
            setVisited(userCity.visited);
          } else {
            axios
              .post(
                `${API_URL}/api/user-cities`,
                {
                  userId,
                  cityId,
                  visited: false,
                },
                { headers: { Authorization: `Bearer ${storedToken}` } },
              )
              .then((response) => {
                const newUserCity = response.data;
                setVisited(newUserCity.visited);
                console.log("Created a new UserCity object!");
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cityId, userId, storedToken]);

  const handleVisitedChange = (e) => {
    e.preventDefault();
    setVisited(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, description, usState, country };

    axios
      .put(`${API_URL}/api/cities/${cityId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        props.refreshCities();
        navigate("/cities");
      });

    const requestBody2 = { visited: visited };

    axios
      .put(`${API_URL}/api/user-cities/${userId}/${cityId}`, requestBody2, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // console.log("put req to change visited status " + response.status);
        props.refreshCities();
      })
      .catch((err) => console.log(err));
  };

  const deleteCity = () => {
    axios
      .delete(`${API_URL}/api/cities/${cityId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // console.log(response.status);
        props.refreshCities();
        navigate("/cities");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addCityPage">
      <h1 className="noBackground">Edit A City</h1>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>State:</label>
          <textarea
            name="usState"
            value={usState}
            onChange={(e) => setUsState(e.target.value)}
          />
        </div>

        <div>
          <label>Country:</label>
          <textarea
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div>
          <label>Visited:</label>

          <input
            type="checkbox"
            checked={visited}
            onChange={(e) => handleVisitedChange(e)}
          ></input>
        </div>

        <div>
          <button type="submit">Update City</button>
        </div>
      </form>
      <button onClick={deleteCity}>Delete City</button>
    </div>
  );
}
export default EditCity;
