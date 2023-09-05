import { TMessage } from "../../atoms/Message";

export type TSenderType = "other" | "self";

export interface TSingleMessage {
  id: string;
  messageData: TMessage;
}