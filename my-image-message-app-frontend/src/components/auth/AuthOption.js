import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { MDBBtn } from "mdbreact";

export default function AuthOption() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav>
      {userData.user ? (
        <div className="text-center mt-4 white-text">
          <MDBBtn color="rgb(16, 69, 150)" onClick={logout}>
            Log out
          </MDBBtn>
        </div>
      ) : (
        <>
          <div className="text-center mt-4 white-text">
            <MDBBtn color="rgb(16, 69, 150)" onClick={login}>
              Log in
            </MDBBtn>
            <MDBBtn color="rgb(16, 69, 150)" onClick={register}>
              Register
            </MDBBtn>
          </div>
        </>
      )}
    </nav>
  );
}
