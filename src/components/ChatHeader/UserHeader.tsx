import classNames from "classnames";
import { Avatar } from "../../atoms/Avatar";
import { TUserData } from "../../interface";
import "./index.scss";


interface TMessageList {
    userData: TUserData;
}

export const UserHeader = (props: TMessageList): JSX.Element => <div className={classNames("headContainer", "user")}>
  <Avatar name={props.userData.name} imgSrc={props.userData.profilePicUrl} classname="headerAvatar"/>
  <h4 className="headName">{props.userData.name}</h4>
</div>;