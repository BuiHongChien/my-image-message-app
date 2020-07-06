import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { username, password };
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      //console.log(loginRes.data.user.image)
      history.push("/");
      loginRes.data.user.lastLoggedIn = new Date().toLocaleString();
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="page">
      <div className="login">
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={submit}>
              <p className="h4 text-center mb-4 white-text">Log in</p>

              <label htmlFor="login-username" className="white-text">
                Username:
              </label>
              <input
                type="text"
                id="login-username"
                className="input"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
              <br />
              <br />
              <label htmlFor="login-password" className="white-text">
                Password:
              </label>
              <input
                type="password"
                id="login-password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              {error && (
                <ErrorNotice
                  message={error}
                  clearError={() => setError(undefined)}
                />
              )}
              <div className="text-center mt-4 white-text">
                <MDBBtn color="rgb(16, 69, 150)" type="submit" value="register">
                  Login
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}
