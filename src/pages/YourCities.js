import UserCityList from "../components/UserCityList";
import UserVisitedCityList from "../components/UserVisitedCityList";

function YourCities(props) {
  return (
    <div className="cityDetails">
      {/* will be cities that are set to visited: False */}
      <UserCityList cities={props.cities} />
      {/* will be cities set to visited: true */}
      <UserVisitedCityList cities={props.cities} />
    </div>
  );
}
export default YourCities;
