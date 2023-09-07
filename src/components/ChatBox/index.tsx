import { ChatHeader } from "../ChatHeader/ChatHeader";
import { MessageTextBox } from "../MessageTextBox";
import { MessageList } from "./MessageList";

export const ChatBox = (): JSX.Element => <div className="chatBox"><ChatHeader userData={{
  id: "12",
  name: "Tripti",
  description: "I am a birdie",
  contactNo: "+91-11111111111",
  groups: [],
  profilePicUrl: "https://picsum.photos/id/6/50"
}}/>
<MessageList
  chatType="personal"
  messageList={[
    {
      id: "1",
      messageData: {
        sender: "Arushi Mishra",
        message: "Hello Trupti! How's it going ?? lets catch up",
        timeSent: "2023-09-05T21:50:00",
        senderType: "self"
      },
    },
    {
      id: "12",
      messageData: {
        sender: "Arushi Mishra",
        message: "lets catch up",
        timeSent: "2023-09-05T21:52:00",
        senderType: "self"
      },
    },
    {
      id: "2",
      messageData: {
        sender: "Trupti",
        message: "Heyyy wassup",
        timeSent: "2023-09-05T21:54:01",
        senderType: "other"
      },
    },
    {
      id: "3",
      messageData: {
        sender: "Trupti",
        message: "All good! yes let's meet",
        timeSent: "2023-09-06T13:02:30",
        senderType: "other"
      },
    }
  ]}/>
<MessageTextBox/>
</div>;