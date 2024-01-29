import { Link } from "react-router-dom";

function UserVisitedCityList(props) {
  const { cities } = props;

  return (
    <>
      <h1>Visited Cities</h1>
      <div className="cityList">
        {/* {console.log(cities)} */}

        <ul>
          {cities &&
            cities
              .filter((city) => {
                if (city.visited === true) {
                  {/* console.log(city); */}
                  return city;
                }
              })
              .map((city) => {
                return (
                  <>
                    <li>
                      <div key={city._id}>
                        <Link to={`/cities/${city._id}`}>
                          <h3>{city.name}</h3>
                        </Link>
                      </div>
                    </li>
                    <div className="bottomBorder"></div>
                  </>
                );
              })}
        </ul>
      </div>
    </>
  );
}
export default UserVisitedCityList;
