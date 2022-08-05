import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;


function EditDestinationComp() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [destinationType, setDestinationType] = useState(null);
    const [message, setMessage] = useState(undefined);
    const [done, setDone] = useState(false);

    const navigate = useNavigate();
    const { storedToken } = useContext(AuthContext);
    const { destinationId } = useParams();


    // const handleName = (e) => setName(e.target.value);
    // const handleDescription = (e) => setDescription(e.target.value);
    // const handleAddress = (e) => setAddress(e.target.value);
    // const handleDestinationType = (e) => setDestinationType(e.target.value);
    // const handleDone = (e) => setDone(e.target.value);

//modify below

useEffect(() => {
    axios
      .get(`${API_URL}/api/destinations/${destinationId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        const oneDestination = response.data;
        setName(oneDestination.name);
        setDescription(oneDestination.description);
        setAddress(oneDestination.address);
        setDestinationType(oneDestination.destinationType)
       setDone(oneDestination.done);
      })
      .catch((error) => console.log(error));   
  }, [destinationId, storedToken]);





  const handleDestinationSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, description, address, destinationType, done };
 
    axios
      .put(`${API_URL}/api/destinations/${destinationId}`, requestBody,  {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        navigate(`/cities`);
      });
  };



  // const handleSubmitDestination = (e) => {
  //   e.preventDefault();
  //   const requestBody = { name, description, address, destinationType, done };
 
  //   axios
  //     .put(`${API_URL}/api/destinations/${destinationId}`, requestBody,  {headers: {Authorization: `Bearer ${storedToken}`}})
  //     .then((response) => {
  //       navigate(`/cities`);
  //     });
  // };

    return(


      <div className="addCityPage">

<form onSubmit={handleDestinationSubmit}>
      <div>
  <label>Name</label></div> <div>
  <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
  </div>
  
  <div> 
  <label>Description</label></div> <div>
  <textarea type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" cols="33"></textarea>
  </div>
  
  <div> 
  <label>Address (optional)</label></div> <div>
  <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
  </div>
  
  <>
  <label>Category of Destination</label>
  <p>Please select your destination type:</p>
  </>
  <div className='radio1'> 

  <input type="radio" name="destinationType" value="naturalWorld" onChange={(e) => setDestinationType(e.target.value)}></input>
  <label htmlFor="naturalWorld">Natural World</label><br></br>
  
  <input type="radio" name="destinationType" value="history" onChange={(e) => setDestinationType(e.target.value)}></input>
  <label htmlFor="history">History</label><br></br>

  <input type="radio" name="destinationType" value="nightlife" onChange={(e) => setDestinationType(e.target.value)}></input>
  <label htmlFor="nightlife">Nightlife</label><br></br>

  <input type="radio" name="destinationType" value="architecture" onChange={(e) => setDestinationType(e.target.value)}></input>
  <label htmlFor='architecture'>Architecture</label><br></br>

  <input type="radio" name="destinationType" value='fun' onChange={(e) => setDestinationType(e.target.value)}></input>
  <label htmlFor='fun'>Fun Stuff</label><br></br>

  <input type='radio' name='destinationType' value='misc' onChange={(e) => setDestinationType(e.target.value)}></input>
  <label htmlFor='misc'>Misc.</label>

  </div>


  <div>
<label>Completed:</label>
      <select
      name="done"
      value={done}
      id="myList"
      // onChange={(e) => handleDone(e.target.value)}>
      onChange={(e) => setDone(e.target.value)}>
<option> false </option>
<option> true </option>
      </select>
       
      </div> 
  
  {message && (
            <div>
              <p>{message}</p>
            </div>
            )}
  
            <button type="submit">Update</button>
      </form>
      </div>


























//         <div className="addCityPage">

//         <form>
//         <div>
//     <label>Name</label></div> <div>
//     <input type="text" name="name" value={name} onChange={handleName} />
//     </div>
    
//     <div> 
//     <label>Description</label></div> <div>
//     <textarea type="text" name="description" value={description} onChange={handleDescription} rows="4" cols="33"></textarea>
//     </div>
    
//     <div> 
//     <label>Address (optional)</label></div> <div>
//     <input type="text" name="address" value={address} onChange={handleAddress} />
//     </div>
    
//     <>
//     <label>Category of Destination</label>
//     <p>Please select your destination type:</p>
//     </>
//     <div className='radio1'> 
  
//     <input type="radio" name="destinationType" value="naturalWorld" onChange={handleDestinationType}></input>
//     <label for="naturalWorld">Natural World</label><br></br>
    
//     <input type="radio" name="destinationType" value="history" onChange={handleDestinationType}></input>
//     <label for="history">History</label><br></br>

//     <input type="radio" name="destinationType" value="nightlife" onChange={handleDestinationType}></input>
//     <label for="nightlife">Nightlife</label><br></br>

//     <input type="radio" name="destinationType" value="architecture" onChange={handleDestinationType}></input>
//     <label for='architecture'>Architecture</label><br></br>

//     <input type="radio" name="destinationType" value='fun' onChange={handleDestinationType}></input>
//     <label for='fun'>Fun Stuff</label><br></br>

//     <input type='radio' name='destinationType' value='misc' onChange={handleDestinationType}></input>
//     <label for='misc'>Misc.</label>

//     </div>


//     <div>
//  <label>Completed:</label>
//         <select
//         name="done"
//         value={done}
//         id="myList"
//         // onChange={(e) => handleDone(e.target.value)}>
//         onChange={handleDone}>
// <option> false </option>
// <option> true </option>
//         </select>
         
//         </div> 
    
//     {message && (
//               <div>
//                 <p>{message}</p>
//               </div>
//               )}
    
//         </form>
//               <button type="submit" onClick={handleSubmitDestination}>Update</button>
//         </div>
    )
}

export default EditDestinationComp;