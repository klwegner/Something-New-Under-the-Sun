// import axios from "axios";
import { useState } from 'react';


function AddCityPage() {

const [cityFormState, setCityFormState] = useState({

name: '',
description:'',
location:''
})

const [message, setMessage] =useState(null);

const updateCityFormState = (event) =>
setCityFormState({
    ...cityFormState,
      //what does below do?
    [event.currentTarget.name]: event.currentTarget.value,
});


//help!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const handleSubmitCity = event => {
    event.preventDefault();

    const requestBody={
        ...cityFormState
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
    <h1>Add a City</h1>
    <form onSubmit={handleSubmitCity}>
    <div>
<label>City Name</label>
<input type ="text" name="name" value={cityFormState.name} onChange={updateCityFormState} />
</div>

<div> 
<label>City Location</label>
<input type="text" name="location" value={cityFormState.location} onChange={updateCityFormState} />
</div>

<div> 
<label>City Description</label>
<textarea type="text" name="description" value={cityFormState.description} onChange={updateCityFormState} rows="4" cols="33"></textarea>
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

export default AddCityPage;