import { useState } from 'react';

function LogInPage() {


    const [loginFormState, setLoginFormState] = useState({
        
        username:'',
        password:''
            })
        
            const [message, setMessage] = useState(null);
        
            const updateLoginFormState = (event) =>
            setLoginFormState({
                ...loginFormState,
               
               //what does below do?
                [event.currentTarget.name]: event.currentTarget.value
            });
        
        //help!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        
        const handleSubmitLogin = event => {
            event.preventDefault();
        
            const requestBody={
                ...loginFormState
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
               
        
                <div className="SignUpPage">
            <h1>Login</h1>
            <form onSubmit={handleSubmitLogin}>
        
        
            <div>
        <label>Username</label>
        <input type ="text" name="username" value={loginFormState.username} onChange={updateLoginFormState} />
        </div>

        <div>
        <label>Password</label>
        <input type ="text" name="password" value={loginFormState.password} onChange={updateLoginFormState} />
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

export default LogInPage;