import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import ViewPort from "./ViewPort";
import { io } from "socket.io-client";

function ChatHome() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []);
  return (
    <section className="flex h-screen w-screen mx-auto">
      <Chat />
      <ViewPort socket={socket} />
    </section>
  );
}

export default ChatHome;
