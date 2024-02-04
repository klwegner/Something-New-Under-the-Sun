import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;

function EditDestinationComp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [destinationType, setDestinationType] = useState(null);
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState(false);
  const { cityId, destinationId } = useParams();
  const { storedToken, user } = useContext(AuthContext);
  const userId = user?._id;

  useEffect(() => {
    if (userId) {
      console.log('found a user');
      console.log("destination Id    " + destinationId);
      console.log("city Id    " + cityId);
      console.log("User Id    " + userId);
      console.log("stored token " + storedToken);

      axios
        .get(`${API_URL}/api/destinations/${destinationId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const oneDestination = response.data;

          console.log('here is the destinations api return  '+ oneDestination);
          setName(oneDestination.name);
          setDescription(oneDestination.description);
          setAddress(oneDestination.address);
          setDestinationType(oneDestination.destinationType);
        })
        .catch((error) => console.log(error));

      axios
        .get(`${API_URL}/api/user-destinations/${userId}/${destinationId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const userDestination = response.data;
          console.log('got a response from userDestination database  '+ JSON.stringify(userDestination));

          if (userDestination) {
            setCompleted(userDestination.completed);

            console.log('is the userDestination complete?   '+ userDestination.completed)
          } else {
            console.log("no user destination object yet");

            //post req

            axios
              .post(
                `${API_URL}/api/user-destinations`,
                {
                  userId,
                  destinationId,
                  completed: false
                },
                { headers: { Authorization: `Bearer ${storedToken}` } },
              )

              //what should I Do with response? I don't think we need to set completed based on response, as the handleCompletedChange does that...
              .then((response) => {
                const newUserDestination = response.data;
                setCompleted(newUserDestination.completed);
                console.log("Created a new UserDestionation object");
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));
    }
  }, [destinationId, cityId, userId, storedToken]);

  const handleCompletedChange = (e) => {
    e.preventDefault();
    setCompleted(e.target.checked);
  };

  const handleDestinationSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, description, address, destinationType };

    axios
      .put(`${API_URL}/api/destinations/${destinationId}`, requestBody, 
      {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
         console.log("destination updated, but not completed status");
      });

    const requestBody2 = { completed: completed };

    axios
      .put(
        `${API_URL}/api/user-destinations/${userId}/${cityId}/${destinationId}`,
        requestBody2,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((response) => {
        // console.log("put req to change visited status " + response.status);
        console.log("status updated");
      })
      .catch((err) => console.log(err));

    navigate(`/cities/${cityId}`);
  };

  return (
    <div className="addCityPage">
      <form onSubmit={handleDestinationSubmit}>
        <div>
          <label>Name</label>
        </div>{" "}
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
        </div>{" "}
        <div>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <>
          <label>Destination type:</label>
        </>
        <select
          id="destinationType"
          onChange={(e) => setDestinationType(e.target.value)}
          value={destinationType}
        >
          <option value="naturalWorld">Natural World</option>
          <option value="history">History</option>
          <option value="nightlife">Nightlife</option>
          <option value="architecture">Architecture</option>
          <option value="fun">Fun Stuff</option>
          <option value="misc">Misc.</option>
        </select>
        <div>
          <label>Completed:</label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => handleCompletedChange(e)}
          ></input>
        </div>
        {message && (
          <div>
            <p>{message}</p>
          </div>
        )}
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditDestinationComp;