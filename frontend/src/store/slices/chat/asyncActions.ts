import { createAsyncThunk } from "@reduxjs/toolkit";
import { Viewer } from "../../../entities/Viewer";
import { Message } from "../../../entities/Message";
import { api } from "../../../api/api";
import { selectViwer } from "../viewer/selectors";
import { RootState } from "../../store";


export const getChatInfo = createAsyncThunk(
    'getChatInfo',
    async (chatId: number, { getState }) => {
        const res = await api.getChatInfo(chatId);
        return res;
    }
)

export const sendMessage = createAsyncThunk(
    'sendMessage',
    async (message: string, {getState}) => {
        const sender = selectViwer(getState() as RootState)!;
        const res = await api.sendMessage(message, sender.id);
        return res;
    }
)