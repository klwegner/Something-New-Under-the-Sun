import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import routes from "./config/routes";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LoginPage";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import AddCityPage from "./pages/AddCityPage";
import AddDestination from "./pages/AddDestinationPage";
import RandomCity from "./pages/RandomCity";
import YourCities from "./pages/YourCities";
import CityInfo from "./pages/CityInfo";
import AllCities from "./pages/AllCities";
import IsPrivate from "./components/IsPrivate";
import EditCity from "./pages/EditCity";
import EditDestination from "./pages/EditDestination";
import AboutUs from "./components/AboutUs";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/Contact";
import Footer from "./components/footer";
import Title from "./components/Title";

const API_URL = "http://localhost:5005";

function App() {

  const [cities, setCities] = useState(null);
  const [destinations, setDestinations] = useState(null);
  const { cityId } = useParams();

  function getAllCities() {
    const storedToken = localStorage.getItem("authToken");
  
    axios.get(
    `${API_URL}/api/cities`,
    { headers: { Authorization: `Bearer ${storedToken}` } }
  )
    .then((response) => { 
      console.log(response)
      setCities(response.data)})
    .catch((error) => console.log(error));
  }
  useEffect(()=>{
        getAllCities();
}, [])

  return (
    <div className="App">
    <AboutUs />
    <Title />
    <Navbar />
      <Routes>
       <Route path='/' element ={<HomePage />} /> 
       <Route path='/signup' element ={<SignUpPage/>}/>
       <Route path='/login' element ={<LogInPage/>}/>
       <Route path='/profile/:userId' element={<IsPrivate> <UserProfile/> </IsPrivate>}/>
       <Route path='/*' element={<ErrorPage/>}/>
       <Route path='/addCity' element={<IsPrivate><AddCityPage refreshCities={getAllCities}/></IsPrivate>}/>
       <Route path='/cities/:cityId/addDestination' element={<IsPrivate><AddDestination cities={cities}/></IsPrivate>}/>
       <Route path='/randomCity' element={<RandomCity cities={cities}/>}/>
       <Route path='/profile/:userId/cities' element={<IsPrivate><YourCities cities={cities}/></IsPrivate>}/>
       <Route path='/cities/:cityId' element={<CityInfo  cities={cities}/>}/>
       <Route path='/cities' element={<AllCities cities={cities}/>}/>
       <Route path='/destination/:destinationId' element={<IsPrivate><EditDestination cities={cities}/></IsPrivate>}/>
       <Route path='/cities/:cityId/edit' element={<IsPrivate><EditCity refreshCities={getAllCities} cities={cities}/></IsPrivate>}/>
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
