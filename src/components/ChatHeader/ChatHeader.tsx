import { Avatar } from "../../atoms/Avatar";
import { TUserData } from "../ChatBox/interface";
import "./index.scss";


interface TMessageList {
    userData: TUserData;
}

export const ChatHeader = (props: TMessageList): JSX.Element => <div className="headContainer">
  <Avatar name={props.userData.name} imgSrc={props.userData.profilePicUrl} classname="headerAvatar"/>
  <h4 className="headName">{props.userData.name}</h4>
  <div className="threeDot">
    <span className="dots"></span>
    <span className="dots"></span>
    <span className="dots"></span>
    <div className="menuList">
      <p className="item">Search  </p>
      <p className="item">Mute</p>
      <p className="item">Block</p>
    </div>
  </div>
</div>;