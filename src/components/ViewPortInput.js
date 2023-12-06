import React, { useRef, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";

function ViewPortInput({ socket }) {
  const msgRef = useRef("");
  useEffect(() => {
    if (socket) {
      socket.on("send", (data) => console.log(data));
    }
  }, [socket]);
  const msgHandler = (event) => {
    socket.emit("send", { msg: msgRef.current.value });
    msgRef.current.value = "";
  };
  return (
    <div className="h-[14%] mt-[1%] border-2 border-white rounded-sm">
      <input type="text" ref={msgRef} placeholder="type your message here" />
      <SendIcon onClick={msgHandler} />
    </div>
  );
}

export default ViewPortInput;
