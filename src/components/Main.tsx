import React from "react";
import "./main.scss";
import { ChatBox } from "./ChatBox";

function Main(): React.ReactElement {

  return (
    <div className="App">
      <ChatBox chatId="#chat1"/>
    </div>
  );
}

export default Main;
