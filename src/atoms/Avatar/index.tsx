import "./index.scss";
import classNames from "classnames";

interface TAvatar {
    name: string;
    imgSrc?: string;
    classname?: string;
}

export const Avatar = (props: TAvatar): JSX.Element => {
  const { name, imgSrc } = props;

  const getNameInitials = (): string => {
    const words = name.toUpperCase().split(" ");
    if(words.length > 1) {
      return `${words[0][0]}${words[1][0]}`;
    } else if(words.length === 1) {
      return words[0].slice(0,2);
    } else return "U";
  };

  const getRandomColor = (): string => `#${Math.floor(Math.random()*16777215).toString(16)}`;

  return <div className={classNames("avatarContainer", props.classname, {
    "avatarTitle": !props.imgSrc
  })} style={{backgroundColor: getRandomColor()}}>
    {imgSrc ?
      <img className="avatarImg" src={imgSrc} alt={getNameInitials()} /> :
      <span className="avatarName">{getNameInitials()}</span>
    }
  </div>;
};