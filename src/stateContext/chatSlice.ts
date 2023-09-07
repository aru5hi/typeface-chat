import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TChatData, TSingleMessage, TUserData } from "../interface";
import mockUserData from "../mock/userData";
import mockChatData from "../mock/chatData";
export interface TGlobalChatState {
  activeChatId: string | null;
  userData: TUserData | null;
  chatList: Record<string, TChatData> | null;
}

const initialState: TGlobalChatState = {
  activeChatId: null,
  userData: mockUserData,
  chatList: mockChatData
};

interface TNewMessagePayload {
  id: string;
  message: TSingleMessage;
}

interface TReplyPayload {
  parentMsg: string;
  parentChat: string;
  reply: TSingleMessage;
}

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateActiveChatId(state, action: PayloadAction<string>) {
      state.activeChatId = action.payload;
    },
    addNewMessage(state, action: PayloadAction<TNewMessagePayload>) {
      console.log(state);
      if(state.chatList) {
        state.chatList[action.payload.id].messageList.push(action.payload.message);
      }
    },
    addNewReply(state,action: PayloadAction<TReplyPayload>) {
      if(state.chatList) state.chatList[action.payload.parentChat].messageList.forEach(msg => {
        if(msg.id === action.payload.parentMsg) {
          if(!msg.replies) msg.replies = [];
          msg.replies.push(action.payload.reply);
        }
      });
    },
    deleteMessage(state, action: PayloadAction<TNewMessagePayload>) {
      if(state.chatList) {
        const targetIndex = state.chatList[action.payload.id].messageList.findIndex(msg => msg.id === action.payload.message.id);
        state.chatList[action.payload.id].messageList.splice(targetIndex, 1);
      }
    }
  },
});

export const { updateActiveChatId, addNewMessage, deleteMessage, addNewReply } = chatSlice.actions;
export default chatSlice.reducer;