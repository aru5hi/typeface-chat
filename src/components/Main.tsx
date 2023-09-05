import React from "react";
import "./main.scss";
import { MessageList } from "./ChatBox/MessageList";

function Main(): React.ReactElement {

  return (
    <div className="App">
      <MessageList messageList={[
        {
          id: "1",
          messageData: {
            sender: "Arushi Mishra",
            message: "Hello Trupti! How's it going ?? lets catch up",
            timeSent: "05-09-2023 21:50:00",
            senderType: "self"
          },
        },
        {
          id: "2",
          messageData: {
            sender: "Trupti",
            message: "Heyyy wassup",
            timeSent: "05-09-2023 21:54:01",
            senderType: "other"
          },
        }
      ]}/>
    </div>
  );
}

export default Main;
