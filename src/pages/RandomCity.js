import { useEffect, useState } from "react";
import MyMapComponent from "../components/MyMapComponent";

function RandomCity(props) {
  const [randoCity, setRandoCity] = useState(null);

  useEffect(()=>{
      if(props.cities) {
    setRandoCity(props.cities[Math.floor(Math.random() * props.cities.length)])
           }
    
}, [props.cities])

  return (
    <>
        <h1 className='userH'>How About Visiting...</h1>

      {randoCity && (
        <div className="cityDetails">
          <h2>{randoCity.name}</h2>
          <p>{randoCity.description}</p>
          <MyMapComponent foundCity = {randoCity}/>
        </div>
      )}
    </>
  );
}

export default RandomCity;
