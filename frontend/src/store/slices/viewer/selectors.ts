import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectIsAuth = createDraftSafeSelector(
    [(state: RootState) => state.viewerReducer.viewer],
    (viewer) => viewer != null
)

export const selectToken = createDraftSafeSelector(
    [(state: RootState) => state.viewerReducer.viewer],
    (viewer) => viewer?.token
)

export const selectViwer = createDraftSafeSelector(
    [(state: RootState) => state.viewerReducer.viewer],
    (viewer) => viewer
)

export const selectLoginStatus = createDraftSafeSelector(
    [(state: RootState) => state.viewerReducer.loginStatus],
    (status) => status
)

export const selectErrorText = createDraftSafeSelector(
    [(state: RootState) => state.viewerReducer.errorText],
    (errorText) => errorText
);