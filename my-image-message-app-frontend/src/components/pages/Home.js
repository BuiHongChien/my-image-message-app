import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="home">
      <div className="center">
        {userData.user ? (
          <>
            <div className="page">
              <h1>Hello {userData.user.username}</h1>
              <div className="show">
                <p className="h6 text-center mb-4 white-text">
                  Here is your image message:{" "}
                </p>
                <img src={userData.user.image} alt="image" />
              </div>
            </div>
          </>
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
