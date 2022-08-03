import Add from '../assets/icons/Add.png';
import YourCitiesIcon from '../assets/icons/YourCitiesIcon.png';
import AllCitiesIcon from '../assets/icons/AllCitiesIcon.png';
import Inspo from '../assets/icons/Inspo.png'

import "../App.css";
import Earth from '../assets/icons/008-airplane.png';
import Highlands from '../assets/highlands.jfif'

function HomePage() {
  return (
<>
    <div className="HomePage2">
    {/* <div>
        <h1>Under the Sun</h1>
        </div> */}
   
<div className="homePageButtons2">

  
  <button><a href='/cities'>All Cities</a></button>
  <button><a href="/randomCity">Travel Inspo</a></button>
</div>

<div>
     <img src={Earth} alt="earth icon"/>
     <h3>Seize the Month. The Week. The Day. The Moment.</h3>
</div>

<div className="homePageButtons2">
  <button><a href="/addCity">Add a City</a></button>
  <button><a href="/addDestination">Add a Destination</a></button>
</div>
    </div>

    <div className="HomePage">
    <div className="homePageButtons">
    <button><a href="/addCity"><img src={Add} alt="add"></img>City</a></button>
  <button><a href="/addDestination"><img src={Add} alt="add"></img>Destination</a></button>
</div>
<div>
     <img src={Earth} alt="the Scottish Highlands pic"/>
     <h1>Seize the Month. The Week. The Day. The Moment.</h1>
</div>
   
<div className="homePageButtons">

  <button><a href='/profile/:userId/cities'><img src={YourCitiesIcon} alt="yourCities"></img> </a></button>
  <button><a href="/randomCity"><img src={Inspo} alt="TravelInspo"></img></a></button>
  <button><a href='/cities'><img src={AllCitiesIcon} alt="allCities"></img></a></button>

</div>


     {/* <div className="attribution"><a href="https://www.flaticon.com/free-icons/worldwide" title="worldwide icons">Worldwide icons created by DinosoftLabs - Flaticon</a></div> */}
    </div>
</>
  );
}

export default HomePage;
