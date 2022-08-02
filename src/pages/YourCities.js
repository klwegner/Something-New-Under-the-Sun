import UserCityList from "../components/UserCityList";
import UserVisitedCityList from "../components/UserVisitedCityList";

function YourCities() {
return(
    <div className="cityDetails">
{/* will be cities that are set to visited: False */}
<UserCityList/>
{/* will be cities set to visited: true */}
<UserVisitedCityList/>
    </div>
)

}
export default YourCities;