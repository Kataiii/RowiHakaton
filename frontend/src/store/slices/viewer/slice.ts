import { createSlice } from "@reduxjs/toolkit";
import { Viewer } from "../../../entities/Viewer";
import { RequestStatus } from "../../../lib/requestStatus";
import { login } from "./asyncActions";

interface ViewerState {
    viewer: Viewer | null,
    loginStatus: RequestStatus,
    errorText?: string
}


const initialState: ViewerState = {
    viewer: null,
    loginStatus: RequestStatus.NEVER
};

const viewerSlice = createSlice({
    name: 'viewerSlice',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(login.pending, state => {
            state.loginStatus = RequestStatus.LOADING;
        }),
        builder.addCase(login.fulfilled, (state, action) => {
            state.viewer = action.payload;
            state.loginStatus = RequestStatus.SUCCESSFUL;
        }),
        builder.addCase(login.rejected, (state, action) => {
            const errorText = action.payload as string;
            state.errorText = errorText;
            state.loginStatus = RequestStatus.ERROR
        })
    },
})

export const viewerReducer = viewerSlice.reducer;