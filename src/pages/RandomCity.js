import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:5005";


function RandomCity() {
const [randoCity, setRandoCity] = useState(null);


useEffect(()=>{
axios.get(API_URL)
.then((response) => setRandoCity(response))
.catch((err) => console.log(err))


}, []);



return(
    <div>
    <h1>A Random City</h1>
    <h1>{randoCity.name}</h1>
    <h2>{randoCity.location}</h2>
    <h2>{randoCity.description}</h2>
    <h2> User Destinations:</h2>
    <h4>See more interesting things in {randoCity.name} from Atlas Obscura here:</h4>
    </div>
)
}
export default RandomCity;