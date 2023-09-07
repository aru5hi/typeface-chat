export type TSenderType = "other" | "self";
export type TChatType = "group" | "channel" | "personal"


export interface TUserData {
  id: string;
  name: string;
  description: string;
  contactNo: string;
  // groups: string[];//array of groupIds
  profilePicUrl?: string;
  contacts?: TUserData[];
}



export interface TSingleMessage {
  id: string;
  message: string;
  timeSent: string;
  senderType: TSenderType;
  sender?: TUserData;
  replies?: TSingleMessage[];
}

export interface TChatData {
  id: string;
  title: string;
  displayPicture?: string;
  chatType: TChatType;
  recipients: TUserData[];
  messageList: TSingleMessage[];
}
