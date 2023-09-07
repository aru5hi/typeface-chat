import { Avatar } from "../../atoms/Avatar";
import { TChatData } from "../../interface";
import "./index.scss";


interface TMessageList {
    userData: TChatData;
}

export const ChatHeader = (props: TMessageList): JSX.Element => <div className="headContainer">
  <Avatar name={props.userData.title} imgSrc={props.userData.displayPicture} classname="headerAvatar"/>
  <h4 className="headName">{props.userData.title}</h4>
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