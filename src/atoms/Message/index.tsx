import classNames from "classnames";
import "./index.scss";
import { TSingleMessage } from "../../interface";
import moment from "moment";
import { TDateDiff, getDateDiff } from "../../utility/dateUtils";
import { addNewReply } from "../../stateContext/chatSlice";
import { useState } from "react";
import { MessageTextBox } from "../../components/MessageTextBox";
import { useAppDispatch } from "../../stateContext/reduxHooks";
interface TMessage extends TSingleMessage {
  classNames?: string;
}

export const Message = (props: TMessage): JSX.Element => {
  const parentChat = props.parentChatId;
  const [showReplyTextBox, setReplyState] = useState(false);
  const dispatch = useAppDispatch();
  const checkDateDiff= (): TDateDiff => {
    const currentDate = new Date();
    const msgDate = new Date(props.timeSent);
    const diff = getDateDiff(msgDate, currentDate);
    return diff;
  };

  const getMsgDate = (): string => {
    const diff = checkDateDiff();
    if(Math.floor(diff.days) < 1 && diff.hours < 12) return "";
    else if(Math.floor(diff.days) < 1 && diff.hours > 12) return "Yesterday,";
    else if(Math.floor(diff.days) === 1) return "Yesterday,";
    else if(Math.floor(diff.days) > 1) return moment(props.timeSent).format("Do MMM YYYY") + ",";
    else return "";
  };

  const onReplySubmit = (newReply: TSingleMessage): void => {
    if(parentChat) {
      dispatch(addNewReply({parentMsg: props.id , parentChat, reply: newReply}));
      setReplyState(false);
    }
  };

  return <>
    <div className={classNames("msgContainer", props.classNames, {
      "selfMsg": props.senderType === "self",
      "otherMsg": props.senderType === "other",
    })}>

      <p className="message">{props.message}</p>
      <p className="msgTimeStamp">
        {` ${getMsgDate()} ${moment(props.timeSent).format("LT")}`} </p>
    </div>
    {showReplyTextBox  ?
      <MessageTextBox
        classNames="replyBox"
        chatId={parentChat || ""}
        parentMsg={props.id}
        previousMsgId={props.replies  ? props.replies[props.replies?.length - 1].id : ""}
        onSentClick={(newMessage): void => onReplySubmit(newMessage)}/> :
      null}
  </>;

};