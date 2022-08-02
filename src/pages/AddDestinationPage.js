import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import AddDestination from "../components/AddDestination";

const API_URL = "http://localhost:5005";

function AddDestinationPage() {

return(
    <>
    <h1>Add a Destination</h1>
    <AddDestination />

</>

)}


export default AddDestinationPage;