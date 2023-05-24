import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { chatsEntityAdapter } from "./slice";

const baseSelectors = chatsEntityAdapter.getSelectors();

export const selectChats = createDraftSafeSelector(
    [
        (state: RootState) => baseSelectors.selectAll(state.chatsReducer),
        (state: RootState, isClosed: boolean) => isClosed
    ],
    (chats, isClosed) => chats.filter(chat => chat.isClosed == isClosed)
);

export const selectGetClosedStatus = createDraftSafeSelector(
    [(state: RootState) => state.chatsReducer.getClosedChatsRequest],
    (closedStatus) => closedStatus
);

export const selectGetOpenedStatus = createDraftSafeSelector(
    [(state: RootState) => state.chatsReducer.getOpenedChatsRequest],
    (openedRequest) => openedRequest
)