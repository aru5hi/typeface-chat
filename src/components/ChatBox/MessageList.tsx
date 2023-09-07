import classNames from "classnames";
import { Message } from "../../atoms/Message";
import { TChatType, TSingleMessage } from "../../interface";
import "./index.scss";


interface TMessageList {
  chatType: TChatType;
  messageList: TSingleMessage[];
}

export const MessageList = (props: TMessageList): JSX.Element => {
  console.log(props.chatType);
  const rendermessages = (messageList: TSingleMessage[]): JSX.Element[] => messageList.map(message => <div className={classNames("singleMsg")}>
    {message.replies?.length ? <div className={classNames({
      "threadParent left": message.senderType === "other",
      "threadParent right": message.senderType === "self",
    })}>
      <Message
        key={message.id + message.timeSent}
        {...message}
        parentChatId={message.parentChatId}
        sender={props.chatType !== "personal" ? message.sender :undefined}
      />
      {rendermessages(message.replies)}
    </div> :
      <Message
        key={message.id + message.timeSent}
        {...message}
        parentChatId={message.parentChatId}
        sender={props.chatType !== "personal" ? message.sender :undefined}
        classNames={classNames({"threadReply": message.parentChatId})}
      />}
  </div>);
  return <div className="messageListContainer">
    {rendermessages(props.messageList)}
  </div>;
};