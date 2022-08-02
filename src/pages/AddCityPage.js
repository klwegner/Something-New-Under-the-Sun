import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";


function AddCityPage() {

const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [location, setLocation] = useState('');
const [message, setMessage] =useState(null);

const navigate = useNavigate();


const handleName = (e) => setName(e.target.value);
const handleDescription = (e) => setDescription(e.target.value);
const handleLocation = (e) => setLocation(e.target.value);


const handleSubmitCity = event => {
    event.preventDefault();
const requestBody = { name, description, location }


axios.post(`${API_URL}/api/addCity`, requestBody, {

    //lets request get auth token from local storage
headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}`}
})
    .then((response) =>{
        console.log(response.data)
        navigate('/cities');
    })
    .catch((err) => setMessage(err.response.data.message))
}

return(
    <div className="addCityPage">
    <h1>Add a City</h1>
    <form onSubmit={handleSubmitCity}>
    <div>
<label>City Name</label>
<input type ="text" name="name" value={name} onChange={handleName} />
</div>

<div> 
<label>City Location</label>
<input type="text" name="location" value={location} onChange={handleLocation} />
</div>

<div> 
<label>City Description</label>
<textarea type="text" name="description" value={description} onChange={handleDescription} rows="4" cols="33"></textarea>
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

export default AddCityPage;