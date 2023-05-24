import { createAsyncThunk } from "@reduxjs/toolkit";
import { Viewer } from "../../../entities/Viewer";
import { Message } from "../../../entities/Message";


export const getChatInfo = createAsyncThunk(
    'getChatInfo',
    async (_, { getState }) => {
        const res = new Promise<void>((resolve, reject) => setTimeout(() => {
            resolve();
        }, 1000))
    }
)