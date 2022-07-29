import React from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
       <Route path='/' element ={<HomePage />} />
       <Route path='/signup' element ={<SignUpPage/>}/>
       <Route path='/login' element ={<LogInPage/>}/>
       <Route path='/profile/:userId' element={<UserProfile/>}/>
       <Route path='/*' element={<ErrorPage/>}/>
       <Route path='/addCity' element={<AddCityPage/>}/>
       <Route path='/addDestination' element={<AddDestination/>}/>
       <Route path='/randomCity' element={<RandomCity/>}/>
       <Route path='/profile/:userId/cities' element={<YourCities/>}/>
       <Route path='/cities/:cityId' element={<CityInfo/>}/>
       <Route path='/cities' element={<AllCities/>}/>
      </Routes>
    </div>
  );
}

export default App;
