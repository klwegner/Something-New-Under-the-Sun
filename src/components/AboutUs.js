import { Link } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/Contact";
import Twitter from '../assets/icons/004-twitter.png';
import Facebook from '../assets/icons/003-facebook.png';
import Insta from '../assets/icons/001-instagram.png';
import LinkedIn from '../assets/icons/002-linkedin.png';

function AboutUs() {
    return(
        <div className='aboutUsBar'>
        <div className='leftSide'>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>
        </div>
        <div className='rightSide'>
        <img src={Twitter} alt=''></img>
        <img src={Facebook} alt=''></img>
        <img src={Insta} alt=''></img>
        <img src={LinkedIn} alt=''></img>
        </div>
</div>
    )
}
export default AboutUs;