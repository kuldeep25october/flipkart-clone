import React, { useState } from "react";
import "./style.scss";
import { message, Spin } from "antd";
import axios from "axios";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = {
      user: userName.trim().toLowerCase(),
      password: password.trim(),
    };
    setIsLoading(true);
    axios
      .post("https://xkode.herokuapp.com/api/user", userObj)
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        if (response.data.success === 1) {
          message.success("Login Successful.");
        }
        if (response.data.success === 0) {
          message.error("Check username and password.");
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  return (
    <div className="container" style={{ width: "100%" }}>
      <div className="loginForm leftSection">
        <div>
          <h1>Sign in to Login Module</h1>
        </div>
      </div>
      <div className="loginForm rightSection">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Login</h2>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLoading === true ? (
            <Spin medium />
          ) : (
            <input type="submit" value="Submit" />
          )}
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
