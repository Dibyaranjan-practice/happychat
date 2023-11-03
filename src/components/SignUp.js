import React, { useRef } from "react";

function SignUp() {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const loginHandler = (event) => {
    event.preventDefault();
    // fetch("http://localhost:4000/users/create", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     phone: nameRef.current.value,
    //     password: passwordRef.current.value,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res === "Success") {
    //       console.log("Success");
    //     } else {
    //       console.log("Failed");
    //     }
    //   })
    //   .catch(() => console.log("Failed"));
  };
  return (
    <form>
      <input type="number" name="phone" ref={nameRef} />
      <input type="password" name="password" ref={passwordRef} />
      <input type="submit" value="Login" onClick={loginHandler} />
    </form>
  );
}

export default SignUp;
