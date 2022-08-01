
import { useState } from "react";
import { Navigate } from "react-router-dom";

function HomePageWithNavigate() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) return <Navigate to="/error" />;

  return (
    <div>
      <h1>Logged In Homepage</h1>
    </div>
  );
}

export default HomePageWithNavigate;
