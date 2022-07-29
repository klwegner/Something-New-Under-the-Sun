import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LoginPage";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Loading/Navbar";

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
      </Routes>
    </div>
  );
}

export default App;
