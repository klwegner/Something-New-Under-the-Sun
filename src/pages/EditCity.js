import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom"; 
import { AuthContext } from '../context/auth.context';
const API_URL = "http://localhost:5005";


function EditCity(props) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState('');
    const [visited, setVisited] = useState(false);
    const navigate = useNavigate();

    const { cities } = props;
    const { cityId } = useParams();
    const [foundCity, setFoundCity] = useState(null)



   const { storedToken } = useContext(AuthContext);


    useEffect(() => {


        axios
          .get(`${API_URL}/api/cities/${cityId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
          .then((response) => {
            const oneCity = response.data;
            setName(oneCity.name);
            setDescription(oneCity.description);
            setLocation(oneCity.location);
            setVisited(oneCity.visited);
          })
          .catch((error) => console.log(error));   
      }, [cityId]);

  //below sends info to backend
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, description, location, visited };
 
    axios
      .put(`${API_URL}/api/cities/${cityId}`, requestBody,  {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        props.refreshCities();
        navigate(`/cities/${cityId}`);
      });
  };

      const deleteCity = () => {                    
        axios
          .delete(`${API_URL}/api/cities/${cityId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
          .then(() => {
            // Once the delete request is resolved successfully
            // navigate back to the list of projects.
            navigate("/cities");
          })
          .catch((err) => console.log(err));
      };  

    // const handleVisisted = (e) => setVisited(e.target.value);

return(
    <div className='addCityPage'>
<h1>Edit A City</h1>

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
           <label>Location:</label>
        <textarea
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        </div>
 
        <div>
 <label>Visited:</label>
        <select
        name="visited"
          value={visited}
         id="myList" 
         onChange={(e) => setVisited(e.target.value)}>
<option> false </option>
<option> true </option>
        </select>
         
        </div>

<div>
        <button type="submit">Update Project</button>
        </div>

<button onClick={deleteCity}>Delete City</button>
      </form>
</div>
)}
export default EditCity;