import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="card p-3"
      style={{
        width: "20rem",
        position: "absolute",
        transform: "translate(-50%,-50%)",
        top: "50%",
        left: "50%",
      }}
    >
      <h1>Login Page</h1>
      <hr />
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>{" "}
        <span>
          Don't Have Account <Link to="/signup">Signup </Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
