import { useContext } from "react";
import { AuthContext } from "../context/auth.context.js";

function Title() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn && (
        <div className="titleDiv">
          <h1>Under the Sun</h1>
        </div>
      )}

      {!isLoggedIn && <> </>}
    </>
  );
}
export default Title;
