import React, { useState } from "react";
import SignUp from "./components/SignUp";

function App() {
  const [login, setLogin] = useState(false);
  return <div>{!login && <SignUp />}</div>;
}

export default App;
