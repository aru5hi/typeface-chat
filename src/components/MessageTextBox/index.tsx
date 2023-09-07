import { ChangeEvent, KeyboardEvent, useState } from "react";
import "./index.scss";
import classNames from "classnames";
import { TSingleMessage } from "../../interface";

interface TMessageTextBox {
  chatId: string;
  previousMsgId: string;
  onSentClick: (newMessage: TSingleMessage) => void;
}


export const MessageTextBox = (props: TMessageTextBox): JSX.Element => {
  const [message, setNewMessage] = useState("");
  const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setNewMessage(event.target.value);
  };

  const onKeydown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if(event.key === "Enter") {
      event.preventDefault();
      props.onSentClick({
        id: `${props.chatId}-${props.previousMsgId+1}`,
        message: message,
        timeSent: new Date().toISOString(),
        senderType: "self"
      });
      event.currentTarget.blur();
      setNewMessage("");
    }
  };
  return <div className="messageTextBox">
    <textarea
      name="chatMsgInput"
      id="chatInput"
      value={message}
      className={classNames("inputField", "chatInput")}
      onChange={onMessageChange}
      onKeyDown={onKeydown}
      placeholder="Enter your message"
    />
  </div>;
};