import { TMessage } from "../../atoms/Message";

export type TChatType = "group" | "channel" | "personal"
export type TSenderType = "other" | "self";

export interface TSingleMessage {
  id: string;
  messageData: TMessage;
}

export interface TUserData {
  id: string;
  name: string;
  description: string;
  contactNo: string;
  groups: string[];//array of groupIds
  profilePicUrl?: string;
}