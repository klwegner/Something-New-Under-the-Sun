import React from "react";
import { Routes, Route } from "react-router-dom";
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
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import IsPrivate from "./components/IsPrivate";
const API_URL = "http://localhost:5005";

// how to get info from database to pass as props for cities/destinations??????????????

function App() {

  const [cities, setCities] = useState(null);

  useEffect(()=>{
        
    const storedToken = localStorage.getItem("authToken");

    axios.get(
    `${API_URL}/api/cities`,
    { headers: { Authorization: `Bearer ${storedToken}` } }
  )
    .then((response) => { 
      console.log(response)
      setCities(response.data)})
    .catch((error) => console.log(error));
}, [])








  return (
    <div className="App">
    <Navbar />
      <Routes>
       <Route path='/' element ={<HomePage />} />
       <Route path='/' element={<HomePageWithNavigate />} /> 
       <Route path='/signup' element ={<SignUpPage/>}/>
       <Route path='/login' element ={<LogInPage/>}/>
       <Route path='/profile/:userId' element={<IsPrivate> <UserProfile/> </IsPrivate>}/>
       <Route path='/*' element={<ErrorPage/>}/>
       <Route path='/addCity' element={<IsPrivate><AddCityPage/></IsPrivate>}/>
       <Route path='/addDestination' element={<IsPrivate><AddDestination cities={cities}/></IsPrivate>}/>
       <Route path='/randomCity' element={<RandomCity cities={cities}/>}/>
       <Route path='/profile/:userId/cities' element={<IsPrivate><YourCities cities={cities}/></IsPrivate>}/>
       <Route path='/cities/:cityId' element={<CityInfo cities={cities}/>}/>
       <Route path='/cities' element={<AllCities cities={cities}/>}/>
      </Routes>
    </div>
  );
}

export default App;
