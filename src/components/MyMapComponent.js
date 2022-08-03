import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';


function MyMapComponent() {

const { isLoaded } = useLoadScript({
    // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey:'AIzaSyAxfMcSxjfNjScA-i1Wrx1ZsL-2uK4cIBg',
});

if(!isLoaded) return <div><p>Loading...</p></div>;
return <Map/>

function Map() {
    return <GoogleMap zoom={10} center={{lat: 44, lng: -80}} mapContainerClassName="googleMap">Map</GoogleMap>
    }


}

export default React.memo(MyMapComponent);