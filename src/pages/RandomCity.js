import { GoogleMap } from "@react-google-maps/api";
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
        <h1>A Random City</h1>

      {randoCity && (
        <div className="cityDetails">
          <h3>{randoCity.name}</h3>
          <h4>{randoCity.description}</h4>
          <MyMapComponent/>
          <h4> Recommendations for destinations in {randoCity.name} by Atlas Obscura:</h4>
        </div>
      )}
    </>
  );
}

export default RandomCity;
