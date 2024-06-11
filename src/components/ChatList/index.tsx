import { useAppDispatch, useAppSelector } from "../../stateContext/reduxHooks";
import { updateActiveChatId } from "../../stateContext/chatSlice";
import { ChatListItem } from "./ChatListItem";
import { UserHeader } from "../ChatHeader/UserHeader";
import "./index.scss";

export const ChatList = (): JSX.Element => {
  const chatData = useAppSelector(state => state.chatList);
  const chatList  = chatData ? Object.values(chatData) : [];
  const userData = useAppSelector(state => state.userData);
  const dispatch = useAppDispatch();

  const handleChatClick = (chatId: string): void => {
    dispatch(updateActiveChatId(chatId));
  };

  const renderChatList = (): JSX.Element[] => chatList.map(chat => <ChatListItem key={chat.id} {...chat} onChatCLick={handleChatClick}/>);

  return <aside className="appSide">
    {userData ?
      <>
        <UserHeader userData={userData}/>
        <div className="listContainer">{renderChatList()}</div>
      </>
      :null
    }
  </aside>;
};


