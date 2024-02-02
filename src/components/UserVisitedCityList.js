import { Link } from "react-router-dom";

// function UserVisitedCityList(props) {
//   const { cities } = props;

//   return (
//     <>
//       <h1>Visited Cities</h1>
//       <div className="cityList">
//         {/* {console.log(cities)} */}

//         <ul>
//           {cities &&
//             cities
//               .filter((city) => {
//                 if (city.visited === true) {
//                   {/* console.log(city); */}
//                   return city;
//                 }
//               })
//               .map((city) => {
//                 return (
//                   <>
//                     <li>
//                       <div key={city._id}>
//                         <Link to={`/cities/${city._id}`}>
//                           <h3>{city.name}</h3>
//                         </Link>
//                       </div>
//                     </li>
//                     <div className="bottomBorder"></div>
//                   </>
//                 );
//               })}
//         </ul>
//       </div>
//     </>
//   );
// }
// export default UserVisitedCityList;

function UserVisitedCityList(props) {
  const { userCities } = props;
  console.log("here are the userCities " + userCities);

  return (
    <>
      <h1>Visited Cities</h1>
      <div className="cityList">
        <ul>
          {userCities &&
            userCities
              .filter((userCity) => userCity.visited)
              .map((userCity) => {
                {
                  /* return ( */
                }
                <>
                  <li key={userCity.city._id}>
                    <div>
                      <Link to={`/cities/${userCity.city._id}`}>
                        <h3>{userCity.city.name}</h3>
                      </Link>
                    </div>
                  </li>
                  <div className="bottomBorder"></div>
                </>;
                {
                  /* ); */
                }
              })}
        </ul>
      </div>
    </>
  );
}
export default UserVisitedCityList;
