import React from "react";
import "./main.scss";
import { ChatBox } from "./ChatBox";

function Main(): React.ReactElement {

  return (
    <div className="App">
      <ChatBox/>
    </div>
  );
}

export default Main;
