import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.username === "") {
      toast("Username can't be empty");
    }
    if (formData.password === "") {
      toast("Password can't be empty");
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username </label>
        <input type="text" name="username" onChange={changeHandler} />
        <label htmlFor="password">password</label>
        <input type="password" name="password" onChange={changeHandler} />
        <input type="submit" value="Login" />
      </form>
      <ToastContainer />
    </React.Fragment>
  );
}

export default Login;
