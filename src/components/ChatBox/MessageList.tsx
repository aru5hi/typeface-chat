import classNames from "classnames";
import { Message } from "../../atoms/Message";
import { TChatType, TSingleMessage } from "../../interface";
import "./index.scss";
import { useEffect } from "react";


interface TMessageList {
  chatType: TChatType;
  messageList: TSingleMessage[];
}

export const MessageList = (props: TMessageList): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      const messages = document.querySelectorAll(".singleMsg");
      messages[messages.length - 1].scrollIntoView();
    }, 200);
  }, []);

  const rendermessages = (messageList: TSingleMessage[]): JSX.Element[] => messageList.map(message =>
    <div key={message.id} className={classNames("singleMsg")}>
      <Message
        key={message.id + message.timeSent}
        {...message}
        parentChatId={message.parentChatId}
        sender={props.chatType !== "personal" ? message.sender :undefined}
        classNames={classNames({"threadReply": message.parentChatId})}
      />
    </div>);


  return <>
    {rendermessages(props.messageList)}
  </>;
};