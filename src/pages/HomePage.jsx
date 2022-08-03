import "../App.css";
import Earth from '../assets/icons/008-airplane.png';

function HomePage() {
  return (
<>
    <div className="HomePage">
<div>
     <h1><strong>There's always something new under the sun!</strong></h1>
     <img src={Earth} alt="the Scottish Highlands pic"/>
     <h1>Seize the Month. The Week. The Day. The Moment.</h1>
</div>

    </div>

    <div className="HomePage2">
<div className="homePageButtons2">

  <button className="fancyBtn">
  <a href='/cities'>All Cities</a>
  <div class="button__horizontal"></div>
  <div class="button__vertical"></div>
  </button>

  <button className="fancyBtn">
  <a href="/randomCity">Travel Inspo</a>
  <div class="button__horizontal"></div>
  <div class="button__vertical"></div>
  </button>
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

     {/* <div className="attribution"><a href="https://www.flaticon.com/free-icons/worldwide" title="worldwide icons">Worldwide icons created by DinosoftLabs - Flaticon</a></div> */}
</>
  );
}

export default HomePage;
