import { Chat } from "../entities/Chat";
import { Viewer } from "../entities/Viewer";
import { LoginRequest } from "./types";

export const api = {
    login: async (request: LoginRequest) => {
        const { mail, password } = request;
        return new Promise<Viewer>(resolve => setTimeout(() => resolve({
            name: 'Аркаша',
            token: 't2763fyfvuyg7cyf73fgvycyitif73tfytcv'
        }), 1000));
    },

    getChats: async (isClosed: boolean, token: string) => {
         const  chats = new Array(5).fill(1).map((_, i) => ({
            id: i,
            isClosed: isClosed,
            title: `Чат #${i}`,
            lastMessage: 'Последнее сообщение',
            lastSenderName: 'Евгений Палыч',
            lastSenderRoleName: 'Менеджер'
        }));

        return new Promise(resolve => setTimeout(() => resolve(chats), 1000));
    },

    getChatHistory: async (chatId: number) => {
        return new Promise(resolve => setTimeout(() => resolve(null)));
    }
}