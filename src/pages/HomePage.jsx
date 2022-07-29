import logo from "../logo.svg";
import "../App.css";
import Earth from '../assets/earth.png';

function HomePage() {
  return (
    <div className="HomePage">
<h1>This will be the homepage</h1>
   
<div className="homePageButtons">

  <button><a href='/profile/:userId/cities'>Your List of Cities</a></button>
  <button><a href='/cities'>All Cities</a></button>
  <button><a href="/randomCity">Travel Inspo</a></button>
  <button><a href="/addCity">Add a City</a></button>
  <button><a href="/addDestination">Add a Destination</a></button>
</div>
     <img src={Earth} alt="earth icon"/>





     <h3>Seize the Month. The Week. The Day. The Moment.</h3>






     <div className="attribution"><a href="https://www.flaticon.com/free-icons/worldwide" title="worldwide icons">Worldwide icons created by DinosoftLabs - Flaticon</a></div>
    </div>
  );
}

export default HomePage;
