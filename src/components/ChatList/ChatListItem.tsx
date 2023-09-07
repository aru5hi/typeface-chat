import { Avatar } from "../../atoms/Avatar";
import { TChatData } from "../../interface";

interface TChatList extends TChatData {
    onChatCLick: (chatId: string) => void;
}
export const ChatListItem = (props: TChatList): React.ReactElement =><div className="chatItemContainer"
  onClick={(): void => props.onChatCLick(props.id)}>
  <Avatar name={props.title} imgSrc={props.displayPicture}/>
  <p className="chatTitle">
    {props.title}
    <span className="lastMessage">{props.messageList[props.messageList.length - 1].message}</span>
  </p>
</div>;