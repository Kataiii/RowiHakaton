import { createAsyncThunk } from "@reduxjs/toolkit";
import { Viewer } from "../../../entities/Viewer";
import { Message } from "../../../entities/Message";
import { api } from "../../../api/api";


export const getChatInfo = createAsyncThunk(
    'getChatInfo',
    async (chatId: number, { getState }) => {
        const res = await api.getChatInfo(chatId);
        return res;
    }
)