import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import AddDestination from "../components/AddDestination";
import Backpack from '../assets/icons/009-backpack.png'

const API_URL = "http://localhost:5005";

function AddDestinationPage() {

return(
    <><h1 className='noBackground'>Add a Destination</h1>
    <div className="basicAdd">
    <AddDestination />
<div><img src={Backpack} alt='backpack'></img></div>
</div>
</>
)}


export default AddDestinationPage;