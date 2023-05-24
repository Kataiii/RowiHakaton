import { createAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Message } from "../../../entities/Message";
import { message } from "antd";
import { RequestStatus } from "../../../lib/requestStatus";
import { Stream } from "stream";
import { Viewer } from "../../../entities/Viewer";
import { ChatInfo } from "../../../entities/ChatInfo";
import { getChatInfo } from "./asyncActions";


interface ChatState {
    info: ChatInfo | null,
    getChatInfoStatus: RequestStatus
}

const initialState: ChatState = {
    info: null,
    getChatInfoStatus: RequestStatus.NEVER
}

const addMessage = createAction<Message>('addMessage');

export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(addMessage, (state, action) => {
            state.info?.messages.push(action.payload);
        }),
        builder.addCase(getChatInfo.pending, (state) => {
            state.getChatInfoStatus = RequestStatus.LOADING;
        }),
        builder.addCase(getChatInfo.fulfilled, state => {
            state.getChatInfoStatus = RequestStatus.SUCCESSFUL;
        })
    },

})