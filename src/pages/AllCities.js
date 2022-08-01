import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const API_URL = "http://localhost:5005";


function AllCities(props) {
    // const [cities, setCities] = useState([]);
    const { cities } = props;
    console.log(props);
    
    // useEffect(()=>{
        
    //     const storedToken = localStorage.getItem("authToken");

    //     axios.get(
    //     `${API_URL}/api/cities`,
    //     { headers: { Authorization: `Bearer ${storedToken}` } }
    //   )
    //     .then((response) => setCities(response.data))
    //     .catch((error) => console.log(error));
    // }, [])


    return(
        <div className='allCities'>
        <h1>All Cities Added</h1>


        {cities && (

            <>
        {cities.map((city)=>{
            return (
        <div key={city._id} className='oneCity'>
        <Link to={`${city._id}`}><h3>{city.name}</h3></Link>
        <h4>{city.description}</h4>
        </div>
            )
        })}
        </>
        )}
        </div>
    )
}
export default AllCities;