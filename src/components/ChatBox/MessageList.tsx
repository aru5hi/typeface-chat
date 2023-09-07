import { Message } from "../../atoms/Message";
import { TChatType, TSingleMessage } from "../../interface";
import "./index.scss";


interface TMessageList {
  chatType: TChatType;
  messageList: TSingleMessage[];
}

export const MessageList = (props: TMessageList): JSX.Element => {
  const rendermessages = (): JSX.Element[] => props.messageList.map(message => <div className="singleMsg">
    <Message
      key={message.id + message.timeSent}
      {...message}
      sender={props.chatType !== "personal" ? message.sender :undefined}
    />
  </div>);
  return <div className="messageListContainer">
    {rendermessages()}
  </div>;
};