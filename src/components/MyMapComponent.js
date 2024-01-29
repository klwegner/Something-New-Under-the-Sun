import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import axios from "axios";

function MyMapComponent({ foundCity }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  // console.log('the props are passed down' + props);
  // console.log('here is the foundCity ' + JSON.stringify(foundCity, null, 2));

  const { isLoaded } = useLoadScript({
    //googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyAxfMcSxjfNjScA-i1Wrx1ZsL-2uK4cIBg",
  });

  useEffect(() => {
    // console.log('starting geocode call');
    // console.log('location is '+ foundCity.location)
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          // address: foundCity.location? foundCity.location : foundCity.name+', '+foundCity.,
          address: foundCity.location
            ? foundCity.location
            : `${foundCity.name}, ${
                foundCity.state ? foundCity.state + ", " : ""
              }${foundCity.country}`,

          key: "AIzaSyAxfMcSxjfNjScA-i1Wrx1ZsL-2uK4cIBg",
        },
      })
      .then((response) => {
        console.log("response " + JSON.stringify(response, null, 2));
        console.log(
          "here is the lat " + response.data.results[0].geometry.location.lat
        );
        setLng(response.data.results[0].geometry.location.lng);
        setLat(response.data.results[0].geometry.location.lat);
        console.log(
          "here is the lat " + response.data.results[0].geometry.location.lng
        );
      });
  }, [foundCity]);

  if (!isLoaded)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  return <Map />;

  function Map() {
    return (
      <GoogleMap
        zoom={10}
        center={{ lat, lng }}
        mapContainerClassName="googleMap"
      >
        Map
      </GoogleMap>
    );
  }
}

export default React.memo(MyMapComponent);
