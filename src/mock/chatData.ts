import { TChatData } from "../interface";

export default {
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
        id: "msg-0",
        message: "lets catch up",
        timeSent: "2023-09-05T21:52:00",
        senderType: "self",
        parentChatId: "#chat1",
        sender: {
          id: "1",
          name: "Arushi Mishra",
          description: "I am a birdie",
          contactNo: "+91-9310984887",
          profilePicUrl: "https://picsum.photos/id/6/50"
        }
      },
      {
        id: "msg-1",
        message: "Heyyy wassup",
        timeSent: "2023-09-05T21:54:01",
        senderType: "other",
        parentChatId: "#chat1",
        sender: {
          id: "12",
          name: "Tripti",
          description: "I am a birdie",
          contactNo: "+91-11111111111",
          profilePicUrl: "https://picsum.photos/id/6/50"
        },
      },
      {
        id: "msg-2",
        parentChatId: "#chat1",
        message: "All good! yes let's meet",
        timeSent: "2023-09-06T13:02:30",
        senderType: "other",
        sender: {
          id: "12",
          name: "Tripti",
          description: "I am a birdie",
          contactNo: "+91-11111111111",
          profilePicUrl: "https://picsum.photos/id/6/50"
        },
      },
    ]
  },
  "#chat2": {
    id: "#chat2",
    title: "Friends",
    chatType: "thread",
    displayPicture: "https://picsum.photos/id/20/50",
    recipients: [
      {
        id: "12",
        name: "Tripti",
        description: "I am a birdie",
        contactNo: "+91-11111111111",
        profilePicUrl: "https://picsum.photos/id/6/50"
      },
      {
        id: "11",
        name: "Garima",
        description: "Busy",
        contactNo: "+91-11111111111",
        profilePicUrl: "https://picsum.photos/id/16/50"
      }
    ],
    messageList: [
      {
        id: "msg-01",
        message: "lets catch up",
        timeSent: "2023-09-05T21:52:00",
        senderType: "self",
        parentChatId: "#chat2",
        sender: {
          id: "1",
          name: "Arushi Mishra",
          description: "I am a birdie",
          contactNo: "+91-9310984887",
          profilePicUrl: "https://picsum.photos/id/6/50"
        },
        replies: [
          {
            id: "msg-01-1",
            message: "Hell yess",
            timeSent: "2023-09-05T21:54:01",
            senderType: "other",
            parentChatId: "#chat2",
            parentMsgId: "msg-01",
            sender: {
              id: "11",
              name: "Garima",
              description: "busy",
              contactNo: "+91-11111111111",
              profilePicUrl: "https://picsum.photos/id/6/50"
            },
          },
        ]
      },
      {
        id: "12",
        message: "Heyyy wassup",
        timeSent: "2023-09-05T21:54:01",
        senderType: "other",
        parentChatId: "#chat2",
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
        parentChatId: "#chat2",
        message: "All good! yes let's meet",
        timeSent: "2023-09-06T13:02:30",
        senderType: "other",
        sender: {
          id: "12",
          name: "Tripti",
          description: "I am a birdie",
          contactNo: "+91-11111111111",
          profilePicUrl: "https://picsum.photos/id/6/50"
        },
      },
    ]
  }
} as unknown as Record<string, TChatData>;