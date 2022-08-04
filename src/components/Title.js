import Sun from '../assets/icons/001-sun.png'
import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context.js";

function Title() {

    const { isLoggedIn } = useContext(AuthContext);
    return(
<>
        {isLoggedIn && ( 
        <div className='titleDiv'>
        <img src={Sun} alt="sun Icon"></img>
        <h1>Under the Sun</h1>
        <img src={Sun} alt="sun Icon"></img>
        </div>
        )}
        
        {!isLoggedIn && (
<> </>
      )}
        </>
    )
}
export default Title;