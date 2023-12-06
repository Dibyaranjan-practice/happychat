import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ChatHome from "./components/ChatHome";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<ChatHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
