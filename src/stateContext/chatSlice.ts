import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TChatData, TSingleMessage, TUserData } from "../interface";

export interface TGlobalChatState {
  activeChatId: string | null;
  userData: TUserData | null;
  chatList: Record<string, TChatData> | null;
}

const initialState: TGlobalChatState = {
  activeChatId: null,
  userData: {
    id: "1",
    name: "Arushi Mishra",
    description: "I am a birdie",
    contactNo: "+91-9310984887",
    profilePicUrl: "https://picsum.photos/id/6/50"
  },
  chatList: {
    "#chat1": {
      id: "#chat1",
      title: "Tripti",
      chatType: "personal",
      displayPicture: "https://picsum.photos/id/10/50",
      recipients: [
        {
          id: "12",
          name: "Tripti",
          description: "I am a birdie",
          contactNo: "+91-11111111111",
          profilePicUrl: "https://picsum.photos/id/6/50"
        }
      ],
      messageList: [
        {
          id: "12",
          message: "lets catch up",
          timeSent: "2023-09-05T21:52:00",
          senderType: "self",
          sender: {
            id: "1",
            name: "Arushi Mishra",
            description: "I am a birdie",
            contactNo: "+91-9310984887",
            profilePicUrl: "https://picsum.photos/id/6/50"
          },
          replies: []
        },
        {
          id: "2",
          message: "Heyyy wassup",
          timeSent: "2023-09-05T21:54:01",
          senderType: "other",
          sender: {
            id: "12",
            name: "Tripti",
            description: "I am a birdie",
            contactNo: "+91-11111111111",
            profilePicUrl: "https://picsum.photos/id/6/50"
          },
        },
        {
          id: "3",
          sender: {
            id: "12",
            name: "Tripti",
            description: "I am a birdie",
            contactNo: "+91-11111111111",
            profilePicUrl: "https://picsum.photos/id/6/50"
          },
          message: "All good! yes let's meet",
          timeSent: "2023-09-06T13:02:30",
          senderType: "other"
        },
      ]
    }
  }
};

interface TNewMessagePayload {
  id: string;
  message: TSingleMessage;
}
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateActiveChatId(state, action: PayloadAction<string>) {
      state.activeChatId = action.payload;
    },
    addNewMessage(state, action: PayloadAction<TNewMessagePayload>) {
      if(state.chatList) state.chatList[action.payload.id].messageList.push(action.payload.message);
    },
    deleteMessage(state, action: PayloadAction<TNewMessagePayload>) {
      if(state.chatList) {
        const targetIndex = state.chatList[action.payload.id].messageList.findIndex(msg => msg.id === action.payload.message.id);
        state.chatList[action.payload.id].messageList.splice(targetIndex, 1);
      }
    }
  },
});

export const { addNewMessage, deleteMessage } = chatSlice.actions;
export default chatSlice.reducer;