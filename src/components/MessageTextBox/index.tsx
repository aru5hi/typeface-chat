import { ChangeEvent, KeyboardEvent, useState } from "react";
import "./index.scss";
import classNames from "classnames";
import { TSingleMessage } from "../../interface";
import { useAppSelector } from "../../stateContext/reduxHooks";
interface TMessageTextBox {
  chatId: string;
  previousMsgId: string;
  parentMsg?: string;
  onSentClick: (newMessage: TSingleMessage) => void;
  classNames?: string;
}


export const MessageTextBox = (props: TMessageTextBox): JSX.Element => {
  const userData = useAppSelector(state => state.userData);
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
        senderType: "self",
        parentChatId: props.chatId,
        parentMsgId: props.parentMsg,
        sender: userData || undefined
      });
      event.currentTarget.blur();
      setNewMessage("");
    }
  };
  return <div className={classNames("messageTextBox", props.classNames)}>
    <textarea
      name="chatMsgInput"
      id="chatInput"
      value={message}
      className={classNames("inputField", "chatInput")}
      onChange={onMessageChange}
      onKeyDown={onKeydown}
      placeholder={props.parentMsg ? "Replying to this message" : "Enter your message"}
    />
  </div>;
};