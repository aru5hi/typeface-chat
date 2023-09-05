import { Message } from "../../atoms/Message";
import { TSingleMessage } from "./interface";
import "./index.scss";
import { Avatar } from "../../atoms/Avatar";

interface TMessageList {
  messageList: TSingleMessage[];
}

export const MessageList = (props: TMessageList): JSX.Element => {
  const rendermessages = (): JSX.Element[] => props.messageList.map(message => <div className="singleMsg">
    <Avatar name={message.messageData.sender}/>
    <Message
      key={message.id}
      {...message.messageData}
      classNames={message.messageData.senderType === "other" ? "otherMessage" : "selfmessage"}
    />
  </div>);
  return <div className="messageListContainer">
    {rendermessages()}
  </div>;
};