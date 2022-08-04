import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;

function AddDestination() {

const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [address, setAddress] = useState('');
const [destinationType, setDestinationType] = useState(null);
const [message, setMessage] = useState(undefined);

const { cityId } = useParams();

const navigate = useNavigate();
const handleName = (e) => setName(e.target.value);
const handleDescription = (e) => setDescription(e.target.value);
const handleAddress = (e) => setAddress(e.target.value);
const handleDestinationType = (e) => setDestinationType(e.target.value);

const handleSubmitDestination = event => {
    event.preventDefault();
    const requestBody={ name, description, address, destinationType, cityId }

    axios.post(`${API_URL}/api/addDestination`, requestBody, {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}`}
})
.then((response) =>{
  console.log(response.data)
    //I want to navigate to the individual city page and show all destinations in that city if possible?
    navigate('/cities')
})
.catch((err) => setMessage(err.response.data.message))
}

return(
    <div className="addCityPage">
    {/* <form onSubmit={handleSubmitDestination}> */}
    <form>
    <div>
<label>Name</label></div> <div>
<input type="text" name="name" value={name} onChange={handleName} />
</div>

<div> 
<label>Description</label></div> <div>
<textarea type="text" name="description" value={description} onChange={handleDescription} rows="4" cols="33"></textarea>
</div>

<div> 
<label>Address (optional)</label></div> <div>
<input type="text" name="address" value={address} onChange={handleAddress} />
</div>

{/* how to handle submit of this data? */}
<>
<label>Category of Destination</label>
<p>Please select your destination type:</p>
</>
<div className='radio1'> 

<input type="radio" name="destinationType" value="naturalWorld" onChange={handleDestinationType}></input>
<label for="naturalWorld">Natural World</label><br></br>

<input type="radio" name="destinationType" value="history" onChange={handleDestinationType}></input>
<label for="history">History</label><br></br>

<input type="radio" name="destinationType" value="nightlife" onChange={handleDestinationType}></input>
<label for="nightlife">Nightlife</label><br></br>

<input type="radio" name="destinationType" value="architecture" onChange={handleDestinationType}></input>
<label for='architecture'>Architecture</label><br></br>

<input type="radio" name="destinationType" value='fun' onChange={handleDestinationType}></input>
<label for='fun'>Fun Stuff</label><br></br>

<input type='radio' name='destinationType' value='other' onChange={handleDestinationType}></input>
<label for='other'>Other</label>

</div>

{message && (
          <div>
            <p>{message}</p>
          </div>
          )}

    </form>
          <button type="submit" onClick={handleSubmitDestination}>Submit</button>
    </div>
)
}

export default AddDestination;