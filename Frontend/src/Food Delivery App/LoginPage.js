import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "./LoginPage.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  cnf_password: "",
};

const LoginPage = () => {
  const [isMember, setIsMember] = useState(false);
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const signupUser = async (currentUser) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/signup',
        currentUser
      );
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        navigate("/Menu");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setError(error.response ? error.response.data : "An error occurred");
    }
  };
  
  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/login',
        currentUser
      );
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        navigate("/Menu");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setError(error.response ? error.response.data : "An error occurred");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, cnf_password } = values;
    console.log(name);
    const currentUser = { name, email, password, cnf_password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      signupUser(currentUser);
    }
  };
  return (
    <div className="contact-form">
      <h2>Login/Signup</h2>
      <div className="container">
        <form onSubmit={onSubmit}>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          {!isMember && (
            <div>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                required
                name="name"
                value={values.name}
                onChange={onHandleChange}
              />
            </div>
          )}
          <div>
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard"
              name="email"
              required
              value={values.email}
              onChange={onHandleChange}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              variant="standard"
              required
              onChange={onHandleChange}
            />
          </div>
          {!isMember && (
            <div>
              <TextField
                id="standard-basic"
                label="Confirm Password"
                name="cnf_password"
                type="password"
                variant="standard"
                required
                onChange={onHandleChange}
              />
            </div>
          )}
          <Button variant="contained" type="submit">
            {isMember ? "Login" : "signUp"}
          </Button>
          {isMember && (
            <p className="login-register-text">
              Don't have an account? Please
              <span
                className="login-register-link"
                onClick={() => setIsMember(!isMember)}
              >
                Register
              </span>
            </p>
          )}
          {!isMember && (
            <p className="login-register-text">
              Already have an account? Please
              <span
                className="login-register-link"
                onClick={() => setIsMember(!isMember)}
              >
                Login
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;