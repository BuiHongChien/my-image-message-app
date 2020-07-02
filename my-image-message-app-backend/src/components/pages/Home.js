import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="home">
      <div className="center">
        {userData.user ? (
          <h1 className="welcome">Welcome to the Image Message app!</h1>
        ) : (
          <>
            <h1 className="welcome">Welcome to the Image Message app!</h1>
            <h2>You are not logged in</h2>
          </>
        )}
      </div>
    </div>
  );
}
