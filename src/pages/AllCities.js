import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CitySearchBar from '../components/CitySearchBar';
const API_URL = "http://localhost:5005";


function AllCities(props) {
  
    const { cities } = props;
    console.log(props);


    return(
        <div className='allCities'>
        <h1>All Cities Added</h1>

<CitySearchBar />

        {cities && (

            <>
        {cities.map((city)=>{
            return (
        <div key={city._id} className='oneCity'>
        <ul>
        <li><Link to={`${city._id}`}><h3>{city.name}</h3></Link></li>
        <h4>{city.description}</h4>

        </ul>
        </div>
            )
        })}
        </>
        )}
        </div>
    )
}
export default AllCities;