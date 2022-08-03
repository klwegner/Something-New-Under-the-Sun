import Add from '../assets/icons/Add.png';
// import Footer from '../components/footer';

import "../App.css";
import Earth from '../assets/icons/008-airplane.png';

function HomePage() {
  return (
<>
    <div className="HomePage2">
<div className="homePageButtons2">
  <button><a href='/cities'>All Cities</a></button>
  <button><a href="/randomCity">Travel Inspo</a></button>
</div>

<div>
     <img src={Earth} alt="earth icon"/>
     <h3>There's always something new under the sun!</h3>
</div>

<div className="homePageButtons2">
  <button><a href="/addCity">Add a City</a></button>
  <button><a href="/addDestination">Add a Destination</a></button>
</div>
    </div>

    <div className="HomePage">
    <div className="homePageButtons1">
    
    <button><a href="/addCity"><img src={Add} alt="add"></img>City</a></button>
  <button><a href="/addDestination"><img src={Add} alt="add"></img>Destination</a></button>

</div>
<div>
     <h1><strong>There's always something new under the sun!</strong></h1>
     <img src={Earth} alt="the Scottish Highlands pic"/>
     <h1>Seize the Month. The Week. The Day. The Moment.</h1>
</div>
   
{/* <Footer /> */}

{/* <div className="homePageButtons">

  <button><a href='/profile/:userId/cities'><img src={YourCitiesIcon} alt="yourCities"></img> </a></button>
  <button><a href="/randomCity"><img src={Inspo} alt="TravelInspo"></img></a></button>
  <button><a href='/cities'><img src={AllCitiesIcon} alt="allCities"></img></a></button>

</div> */}


     {/* <div className="attribution"><a href="https://www.flaticon.com/free-icons/worldwide" title="worldwide icons">Worldwide icons created by DinosoftLabs - Flaticon</a></div> */}
    </div>
</>
  );
}

export default HomePage;
