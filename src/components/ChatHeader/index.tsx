import { Avatar } from "../../atoms/Avatar";
import { TChatData } from "../../interface";
import "./index.scss";


interface TMessageList {
    userData: TChatData;
    menuItems?: {name: string}[];
}

export const ChatHeader = (props: TMessageList): JSX.Element => <div className="headContainer">
  <Avatar name={props.userData.title} imgSrc={props.userData.displayPicture} classname="headerAvatar"/>
  <h4 className="headName">{props.userData.title}</h4>

</div>;