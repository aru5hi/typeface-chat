import React from "react";
import "./main.scss";
import { ChatBox } from "./ChatBox";
import { ChatList } from "./ChatList";
import { useAppSelector } from "../stateContext/reduxHooks";

function Main(): React.ReactElement {
  const activeChat = useAppSelector(state => state.activeChatId);

  return (<>
    <ChatList/>
    {activeChat ? <ChatBox chatId={activeChat}/> : null}
  </>
  );
}

export default Main;
