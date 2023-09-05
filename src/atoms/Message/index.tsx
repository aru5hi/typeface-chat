import classNames from "classnames";
import "./index.scss";
import { TSenderType } from "../../components/ChatBox/interface";
import moment from "moment";

export interface TMessage {
  message: string;
  timeSent: string;
  sender: string;
  classNames?: string;
  senderType: TSenderType;
}

export const Message = (props: TMessage): JSX.Element => <div className={classNames("msgContainer", props.classNames, {
  "selfMsg": props.senderType === "self",
  "otherMsg": props.senderType === "other",
})}>
  <p className="msgSender">{props.senderType === "other" ? props.sender : "You"}</p>
  <p className="message">{props.message}</p>
  <p className="msgTimeStamp">{`${moment(props.timeSent).format("LT")} , ${moment(props.timeSent).format("Do MMM YYYY")}`} </p>
</div>;