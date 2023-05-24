import { createEntityAdapter, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { Chat } from "../../../entities/Chat";
import { RequestStatus } from "../../../lib/requestStatus";
import { getClosedChats, getOpenedChats } from "./asyncActions";


export const chatsEntityAdapter = createEntityAdapter<Chat>({ selectId: (chat) => chat.id });

const initialState = chatsEntityAdapter.getInitialState({
    getClosedChatsRequest: RequestStatus.NEVER,
    getOpenedChatsRequest: RequestStatus.NEVER
})

export const chatsSlice = createSlice({
    name: 'chatsSlice',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getOpenedChats.pending, state => {
            state.getOpenedChatsRequest = RequestStatus.LOADING;
        }),
            builder.addCase(getClosedChats.pending, state => {
                state.getClosedChatsRequest = RequestStatus.LOADING;
            }),
            builder.addCase(getClosedChats.fulfilled, (state, action) => {
                state.getClosedChatsRequest = RequestStatus.SUCCESSFUL;
            }),
            builder.addCase(getOpenedChats.fulfilled, (state, action) => {
                state.getOpenedChatsRequest = RequestStatus.SUCCESSFUL;
            }),
            builder.addMatcher(
                isAnyOf(
                    getClosedChats.fulfilled,
                    getOpenedChats.fulfilled
                ), (state, action) => {
                    const chats = action.payload as Chat[];
                    chatsEntityAdapter.setMany(state, chats);
                })
    },
})
