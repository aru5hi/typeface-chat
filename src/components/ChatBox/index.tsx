import { useAppDispatch, useAppSelector } from "../../stateContext/reduxHooks";
import { ChatHeader } from "../ChatHeader";
import { MessageTextBox } from "../MessageTextBox";
import { MessageList } from "./MessageList";
import { addNewMessage } from "../../stateContext/chatSlice";
import { TSingleMessage } from "../../interface";

interface TChatBox {
  chatId: string;
}
export const ChatBox = (props: TChatBox): JSX.Element => {
  const chatList = useAppSelector(state => state.chatList);
  const userData = useAppSelector(state => state.userData);
  const dispatch = useAppDispatch();
  const previousMsgId = chatList ? chatList[props.chatId]?.messageList[chatList[props.chatId]?.messageList?.length - 1].id : "0";
  const currentChat = chatList ? chatList[props.chatId]: null;

  const handleNewMessage = (newMessage: TSingleMessage): void => {
    dispatch(addNewMessage({id: props.chatId, message: newMessage}));
  };

  return <>
    {userData && currentChat ? <div className="chatBox appMain">
      <ChatHeader userData={currentChat}/>
      {chatList ?
        <MessageList
          chatType={currentChat.chatType}
          messageList={currentChat.messageList}/> :
        null}
      <MessageTextBox chatId={props.chatId} previousMsgId={previousMsgId} onSentClick={handleNewMessage}/>
    </div> : null}
  </>;
};


