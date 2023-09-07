import classNames from "classnames";
import "./index.scss";
import { TSingleMessage } from "../../interface";
import moment from "moment";
import { TDateDiff, getDateDiff } from "../../utility/dateUtils";

interface TMessage extends TSingleMessage {
  classNames?: string;
}

export const Message = (props: TMessage): JSX.Element => {

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

  return <div className={classNames("msgContainer", props.classNames, {
    "selfMsg": props.senderType === "self",
    "otherMsg": props.senderType === "other",
  })}>
    {props.sender ?
      <p className="msgSender">{props.sender.name}</p>:
      null}
    <p className="message">{props.message}</p>
    <p className="msgTimeStamp">
      {` ${getMsgDate()} ${moment(props.timeSent).format("LT")}`} </p>
  </div>;

};