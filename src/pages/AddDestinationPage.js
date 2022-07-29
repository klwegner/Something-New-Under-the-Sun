import axios from "axios";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddDestionationPage() {

const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [city, setCity] = useState('');
const [address, setAddress] = useState('');
const [destinationType, setDestinationType] = useState(null);
const [errorMessage, setErrorMessage] = useState(undefined);

const Navigate = useNavigate();

const [destinationFormState, setDestinationFormState] = useState({

name: '',
description:'',
city:'',
address:'',
destinationType: null,

})

const [message, setMessage] =useState(null);

const updateDestinationFormState = (event) =>
setDestinationFormState({
    ...destinationFormState,
      //what does below do?
    [event.currentTarget.name]: event.currentTarget.value,
});


//help!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const handleSubmitDestionation = event => {
    event.preventDefault();

    const requestBody={
        ...destinationFormState
    }

    //how to submit city to database rather than API????


//     axios.post('https://ih-beers-api2.herokuapp.com/beers/new', requestBody)
// .then((response)=> {
//     setBeerFormState(response.data.message)
//     setBeerFormState({
//         name: "",
//         tagline: "",
//         description: "",
//         first_brewed: "",
//         brewers_tips: "",
//         attenuation_level: "",
//         contributed_by: "",
//       });
//     }) //check
// .catch(err => {console.log(err.response.data.message)
// setMessage(err.response.data.message)
//     });
}


return(
    <div className="addCityPage">
    <h1>Add a Destination</h1>
    <form onSubmit={handleSubmitDestionation}>
    <div>
<label>Name</label>
<input type="text" name="name" value={destinationFormState.name} onChange={updateDestinationFormState} />
</div>

<div> 
<label>Description</label>
<textarea type="text" name="description" value={destinationFormState.description} onChange={updateDestinationFormState} rows="4" cols="33"></textarea>
</div>

<div> 
<label>City</label>
<input type="text" name="city" value={destinationFormState.city} onChange={updateDestinationFormState} />
</div>

<div> 
<label>Address (optional)</label>
<input type="text" name="address" value={destinationFormState.address} onChange={updateDestinationFormState} />
</div>

<div> 
<label>Category of Destination</label>
{/* <input type="radio" name="type" value={destinationFormState.type} onChange={updateDestinationFormState} /> */}
<p>Please select your destination type:</p>
 <input type="radio" id="naturalWorld" name="destinationType" value="naturalWorld"></input>
 <label for="naturalWorld">Natural World</label><br></br>
 <input type="radio" id="history" name="destinationType" value="history"></input>
 <label for="history">History</label><br></br>
 <input type="radio" id="nightlife" name="destinationType" value="nightlife"></input>
 <label for="nightlife">Nightlife</label><br></br>
<input type="radio" id="architecture" name="destinationType" value="architecture"></input>
<label for='architecture'>Architecture</label><br></br>
<input type="radio" id='fun' name="destinationType" value='fun'></input>
<label for='fun'>Fun Stuff</label><br></br>
<input type='radio' id='other' name='destinationType' value='other'></input>
<label for='other'> Other</label>
</div>

{message && (
          <div>
            <p>{message}</p>
          </div>
          )}

          <div>
          <button type="submit">Submit</button>
</div>
    </form>
    </div>
)
}

export default AddDestionationPage;