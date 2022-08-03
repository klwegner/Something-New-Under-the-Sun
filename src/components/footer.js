import YourCitiesIcon from '../assets/icons/YourCitiesIcon.png';
import AllCitiesIcon from '../assets/icons/AllCitiesIcon.png';
import Inspo from '../assets/icons/Inspo.png'
import Add from '../assets/icons/Add.png';

function Footer() {
    return(

        <div className="footer">

  <button><a href='/profile/:userId/cities'><img src={YourCitiesIcon} alt="yourCities"></img> </a></button>
  <button><a href="/randomCity"><img src={Inspo} alt="TravelInspo"></img></a></button>
  <button><a href='/cities'><img src={AllCitiesIcon} alt="allCities"></img></a></button>
  <button><a href="/addCity"><img src={Add} alt="add"></img></a></button>


</div>
    )
}
export default Footer;