import React from "react";
import ViewPortChat from "./ViewPortChat";
import ViewPortHeader from "./ViewPortHeader";
import ViewPortInput from "./ViewPortInput";

function ViewPort({ socket }) {
  return (
    <div className="flex flex-col h-screen w-4/5  p-4 text-2xl">
      <ViewPortHeader />
      <ViewPortChat />
      <ViewPortInput socket={socket} />
    </div>
  );
}

export default ViewPort;
