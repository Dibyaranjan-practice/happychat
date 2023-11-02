import { io } from "socket.io-client";
const socket = io.connect("http://localhost:4000");

import React from "react";

function Socket() {
  const [message, setMessage] = useState(" ");
  const [receivedMessage, setReceivedMessage] = useState(" ");
  const saveHandler = (event) => {
    setMessage(event.target.value);
  };
  const sendMessage = () => {
    socket.emit("send", { message });
    setMessage("");
  };
  socket.on("send", (data) => {
    setReceivedMessage(data.message);
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your message here"
        name="message"
        value={message}
        onChange={saveHandler}
      />
      <button onClick={sendMessage}>Send</button>
      <p>Received Message:</p>
      <h1>{receivedMessage}</h1>
    </div>
  );
}

export default Socket;
