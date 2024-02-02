import UserCityList from "../components/UserCityList";
import UserVisitedCityList from "../components/UserVisitedCityList";

import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import travel from "../assets/icons/010-travel.png";

function UserProfile(props) {
  const { isLoggedIn, user } = useContext(AuthContext);
  // console.log(user);

  return (
    <>
      {isLoggedIn && (
        <>
          <h1 className="userH"> Welcome back, {user && user.username}</h1>

          <div className="userProfile">
            <img src={travel} alt="traveler"></img>
            <div className="userProfileRight">
              <UserCityList cities={props.cities} />

              <UserVisitedCityList cities={props.cities} />
              <p>
                <i>
                  A good traveler has no fixed plans, and is not intent on
                  arriving.
                </i>
              </p>
              <p>-Lao Tzu</p>
            </div>
          </div>
          <div className="center">
            <a
              href="https://www.flaticon.com/free-icons/travel"
              title="travel icons"
            >
              Travel icons created by Eucalyp - Flaticon
            </a>
          </div>
        </>
      )}
    </>
  );
}
export default UserProfile;
