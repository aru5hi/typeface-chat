import { ChangeEvent } from "react";
import "./index.scss";
import classNames from "classnames";

interface TMessageTextBox {
  onSentClick?: (text: string) => void;
}


export const MessageTextBox = (props: TMessageTextBox): JSX.Element => {

  const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    console.log(event.target.value);
  };
  return <div className="messageTextBox">
    <textarea
      name="chatMsgInput"
      id="chatInput"
      className={classNames("inputField", "chatInput")}
      onChange={onMessageChange}
      placeholder="Enter your message"
    />
  </div>;
};