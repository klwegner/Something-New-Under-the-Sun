import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/auth.context";
import City from "../assets/icons/001-cityscape.png";

const API_URL = "http://localhost:5005";

function AddCityPage(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");
const [usState, setUsState] = useState("");
const [country, setCountry] = useState("");
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
//   const handleLocation = (e) => setLocation(e.target.value);
  const handleUsState= (e) => setUsState(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value)

  const handleSubmitCity = (event) => {
    event.preventDefault();
    const requestBody = { name, description, usState, country };

    axios
      .post(`${API_URL}/api/addCity`, requestBody, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        props.refreshCities();
        navigate("/cities");
      })
      .catch((err) => setMessage(err.response.data.message));
  };

  return (
    <>
      <h1 className="noBackground">Add a City</h1>
      <div className="basicAdd2">
        <div className="addCityPage">
          <form onSubmit={handleSubmitCity}>
            <div>

            
              <label> Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
              />
            </div>

            {/* <div>
              <label> Location</label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={handleLocation}
              />
            </div> */}
            <div>
              <label>State</label>
              <input
                type="text"
                name="state"
                value={usState}
                onChange={handleUsState}
              />
            </div>

            <div>
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={country}
                onChange={handleCountry}
              />
            </div>

            <div>
              <label> Description</label>
              <textarea
                type="text"
                name="description"
                value={description}
                onChange={handleDescription}
                rows="4"
                cols="33"
              ></textarea>
            </div>

            {message && (
              <div>
                <p>{message}</p>
              </div>
            )}

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <img src={City} alt=""></img>
      </div>
    </>
  );
}

export default AddCityPage;
