import { Chat } from "../entities/Chat";
import { Message } from "../entities/Message";
import { Viewer } from "../entities/Viewer";
import { LoginRequest } from "./types";

export const api = {
    login: async (request: LoginRequest) => {

        const viewersPool: Viewer[] = [
            {
                id: 1,
                token: 'yvgnjmkjkbhsbknb scs',
                name: 'Алексей',
                role: 'client',
                mail: 'pash@mail.com',
                password: '123456'
            },
            {
                id: 2,
                token: 'yvgnjmkjkbhsbknb scs',
                name: 'Паштет',
                role: 'manager',
                mail: 'manager@mail.com',
                password: '654321'
            },
            {
                id: 3,
                token: 'yvgnjmkjkbhsbknb scs',
                name: 'Максим',
                role: 'consultant',
                mail: 'pash@mail.com',
                password: '000000'
            },
        ]

        const { mail, password } = request;
        return new Promise<Viewer>((resolve, reject) => setTimeout(() => {
            const existedUser = viewersPool.find(user => user.mail == mail && user.password == password);
            if(existedUser != undefined) resolve(existedUser);
            else reject('Такого пользователя не существует')
        }, 1000));
    },

    getChats: async (isClosed: boolean, token: string) => {
        const chats = new Array(5).fill(1).map((_, i) => ({
            id: i,
            isClosed: isClosed,
            title: `Чат #${i}`,
            lastMessage: 'Последнее моей проблемы сообщение',
            lastSenderName: 'Евгений Палыч',
            lastSenderRoleName: 'Менеджер'
        }));

        return new Promise(resolve => setTimeout(() => resolve(chats), 1000));
    },

    getChatHistory: async (chatId: number) => {
        return new Promise(resolve => setTimeout(() => resolve(
            new Array(58)
                .fill('')
                .map<Message>((_, i) => ({
                    id: i,
                    senderId: i % 2,
                    text: 'соооообщение',
                    time: new Date()
                })) 
        ), 1000));
    }
}