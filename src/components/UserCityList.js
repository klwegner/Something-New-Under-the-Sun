import { Link } from "react-router-dom";

function UserCityList(props) {
  const { cities } = props;
  return (
    <>
      <h1>Cities to Visit</h1>

      <div className="cityList">
        <ul>
          {cities &&
            cities
              .filter((city) => {
                if (city.visited === false) {
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
export default UserCityList;
