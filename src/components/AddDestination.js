import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function AddDestination() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [destinationType, setDestinationType] = useState(null);
  const [message, setMessage] = useState(undefined);
  const { cityId } = useParams();

  const navigate = useNavigate();
  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleDestinationType = (e) => setDestinationType(e.target.value);

  const handleSubmitDestination = (event) => {
    event.preventDefault();
    const requestBody = { name, description, address, destinationType, cityId };

    axios
      .post(`${API_URL}/api/addDestination`, requestBody, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        navigate(`/cities/${cityId}`);
      })
      .catch((err) => setMessage(err.response.data.message));
  };

  return (
    <div className="addCityPage">
      <form>
        <div>
          <label>Name</label>
        </div>{" "}
        <div>
          <input type="text" name="name" value={name} onChange={handleName} />
        </div>
        <div>
          <label>Description</label>
        </div>{" "}
        <div>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
            rows="4"
            cols="33"
          ></textarea>
        </div>
        <div>
          <label>Address (optional)</label>
        </div>{" "}
        <div>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleAddress}
          />
        </div>
        <></>
        <div className="select1">
          <label>Destination Type:</label>
          <select
            id="destinationType"
            // onChange={(e) => setDestinationType(e.target.value)}
            onChange={handleDestinationType}
            value={destinationType}
          >
            <option value="naturalWorld">Natural World</option>
            <option value="history">History</option>
            <option value="nightlife">Nightlife</option>
            <option value="architecture">Architecture</option>
            <option value="fun">Fun Stuff</option>
            <option value="misc">Misc.</option>
          </select>
        </div>
        {message && (
          <div>
            <p>{message}</p>
          </div>
        )}
      </form>
      <button type="submit" onClick={handleSubmitDestination}>
        Submit
      </button>
    </div>
  );
}

export default AddDestination;
