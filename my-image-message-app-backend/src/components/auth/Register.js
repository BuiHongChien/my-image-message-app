import React, { useState, useContext } from "react";
import Axios from "axios";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import ErrorNotice from "../misc/ErrorNotice";

export default function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { username, password, passwordCheck, message };
      await Axios.post("http://localhost:5000/users/register", newUser);
      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        username,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="page">
      <div className="register">
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={submit}>
              <p className="h4 text-center mb-4 white-text">Register</p>
              <label htmlFor="register-username" className="white-text">
                Username:
              </label>
              <input
                type="text"
                id="register-username"
                className="input"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
              <br />
              <label htmlFor="register-password" className="white-text">
                Password:
              </label>
              <input
                type="password"
                id="register-password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <br />
              <br />
              <input
                type="password"
                className="input"
                onChange={(e) => setPasswordCheck(e.target.value)}
                placeholder="Confirm password"
              />
              <br />
              <label htmlFor="register-message" className="white-text">
                Your message:
              </label>
              <textarea
                type="text"
                id="register-message"
                className="textarea"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here..."
                rows="7"
              />
              {error && (
                <ErrorNotice
                  message={error}
                  clearError={() => setError(undefined)}
                />
              )}
              <div className="text-center mt-4 white-text">
                <MDBBtn color="rgb(16, 69, 150)" type="submit" value="register">
                  Submit
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}
