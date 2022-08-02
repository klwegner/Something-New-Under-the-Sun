import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function AddDestination() {

const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [city, setCity] = useState('');
const [address, setAddress] = useState('');
const [destinationType, setDestinationType] = useState(null);
const [message, setMessage] = useState(undefined);

const navigate = useNavigate();

const handleName = (e) => setName(e.target.value);
const handleDescription = (e) => setDescription(e.target.value);
const handleCity = (e) => setCity(e.target.value);
const handleAddress = (e) => setAddress(e.target.value);
const handleDestinationType = (e) => setDestinationType(e.target.value);

const handleSubmitDestination = event => {
    event.preventDefault();

    const requestBody={ name, description, city, address, destinationType }

    axios.post(`${API_URL}/api/addDestination`, requestBody, {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}`}
})
.then((response) =>{
    //I want to navigate to the individual city page and show all destinations in that city
    navigate('/cities')
})
.catch((err) => setMessage(err.response.data.message))
}

return(
    <div className="addCityPage">
    <form onSubmit={handleSubmitDestination}>
    <div>
<label>Name</label></div> <div>
<input type="text" name="name" value={name} onChange={handleName} />
</div>

<div> 
<label>Description</label></div> <div>
<textarea type="text" name="description" value={description} onChange={handleDescription} rows="4" cols="33"></textarea>
</div>

<div> 
<label>City</label></div> <div>
<input type="text" name="city" value={city} onChange={handleCity} />
</div>

<div> 
<label>Address (optional)</label></div> <div>
<input type="text" name="address" value={address} onChange={handleAddress} />
</div>

{/* how to handle submit of this data? */}

<div> 
<label>Category of Destination</label></div> <div>
<p>Please select your destination type:</p>
{/* will the below work */}
{/* <input type="radio" name="type" value={destinationType} onChange={handleDestinationType} /> */}
<input type="radio" id="naturalWorld" name="destinationType" value="naturalWorld"></input>
<label for="naturalWorld">Natural World</label><br></br>
<input type="radio" id="history" name="destinationType" value="history"></input>
<label for="history">History</label><br></br>
<input type="radio" id="nightlife" name="destinationType" value="nightlife"></input>
<label for="nightlife">Nightlife</label><br></br>
<input type="radio" id="architecture" name="destinationType" value="architecture"></input>
<label for='architecture'>Architecture</label><br></br>
<input type="radio" id='fun' name="destinationType" value='fun'></input>
<label for='fun'>Fun Stuff</label><br></br>
<input type='radio' id='other' name='destinationType' value='other'></input>
<label for='other'> Other</label>
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
)
}

export default AddDestination;