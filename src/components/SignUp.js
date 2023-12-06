import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [formData, setFormData] = useState({
    phone: "",
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validationHandler = () => {
    if (formData.password !== formData.confirmpassword) {
      toast.error("Password and ConfirmPassword should be same");
    }
    if (formData.username === "") {
      toast.error("Username can't be empty");
    }
    if (formData.password === "") {
      toast.error("Password can't be empty");
    }
    if (formData.confirmpassword === "") {
      toast.error("Confirmpassword can't be empty");
    }
    if (formData.email === "") {
      toast.error("Email can't be empty");
    }
  };
  const submitHandler = async (event) => {
    setErrorMessage(" ");
    event.preventDefault();
    validationHandler();
    axios
      .post("http://localhost:4000/users/create", formData)
      .then((res) => {
        setErrorMessage("Success");
      })
      .catch((error) => {
        setErrorMessage(error.response.data);
      });
  };

  return (
    <div>
      {errorMessage}
      <form onSubmit={submitHandler} className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={changeHandler}
          className="rounded-sm border-2 border-gray-600"
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          onChange={changeHandler}
          className="rounded-sm border-2 border-gray-600"
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={changeHandler}
          className="rounded-sm border-2 border-gray-600"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={changeHandler}
          className="rounded-sm border-2 border-gray-600"
        />
        <label htmlFor="confirmpassword">Password</label>
        <input
          className="rounded-sm border-2 border-gray-600"
          type="password"
          name="confirmpassword"
          onChange={changeHandler}
        />
        <input type="submit" value="SignUp" />
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
