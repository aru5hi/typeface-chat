import { useAppDispatch, useAppSelector } from "../../stateContext/reduxHooks";
import { updateActiveChatId } from "../../stateContext/chatSlice";
import { ChatListItem } from "./ChatListItem";
import { UserHeader } from "../ChatHeader/UserHeader";
import "./index.scss";

export const ChatList = (): JSX.Element => {
  const chatData = useAppSelector(state => state.chatList);
  const chatList  = chatData ? Object.values(chatData) : [];
  const userData = useAppSelector(state => state.userData);
  const activeChat = useAppSelector(state => state.activeChatId);
  const dispatch = useAppDispatch();

  const handleChatClick = (chatId: string): void => {
    dispatch(updateActiveChatId(chatId));
  };

  const renderChatList = (): JSX.Element[] => chatList.map(chat => <ChatListItem {...chat} onChatCLick={handleChatClick}/>);

  return <aside className={`appSide ${activeChat ? "inlineList" : ""}`}>
    {userData ?
      <>
        <UserHeader userData={userData}/>
        {renderChatList()}
      </>
      :null
    }
  </aside>;
};


