import { Message } from "./Message";
import { Viewer } from "./Viewer";

export type ChatStatus = 'closed' | 'opened' | 'waiting' | 'never';
export interface ChatInfo {
    id: number,
    companiom: Viewer,
    messages: Message[],
    status: ChatStatus
}