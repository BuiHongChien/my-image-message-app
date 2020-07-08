import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext);

  var today = new Date();
  console.log(today);

  return (
    <div>
      {userData.user ? (
        <>
          <div className="center1">
            <div className="page">
              <h1>Hello {userData.user.username}</h1>
              <p>Last time logged in: {userData.user.lastLoggedIn}</p>
              <div className="show">
                {today < userData.user.expiryDate ? (
                  <>
                    <p className="h6 text-center mb-4 white-text">
                      Here is your image message:
                    </p>
                    <img src={userData.user.image} alt="" />
                  </>
                ) : (
                  <p className="h6 text-center mb-4 white-text">
                    What a pity! Your image has expired
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="home">
            <div className="center0">
              <h1 className="welcome">Welcome to the Image Message app!</h1>
              <h2>You are not logged in</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
