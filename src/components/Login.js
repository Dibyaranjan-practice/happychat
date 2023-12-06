import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    let flag = false;
    if (formData.username === "") {
      toast.error("Username can't be empty");
      flag = true;
    }
    if (formData.password === "") {
      toast.error("Password can't be empty");
      flag = true;
    }
    if (!flag) {
      const message = await axios.post("http://localhost:4000/users/login", {
        username: formData.username,
        password: formData.password,
      });
      console.log(message.data);
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <label
          htmlFor="username"
          className="block text-md font-large leading-6 text-gray-900"
        >
          Username
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="text"
              name="username"
              id="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="username"
              onChange={changeHandler}
            />
          </div>
        </div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="password"
              name="password"
              id="password"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="password"
              onChange={changeHandler}
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
      <ToastContainer />
    </React.Fragment>
  );
}

export default Login;
