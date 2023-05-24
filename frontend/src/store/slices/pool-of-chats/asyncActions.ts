import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import { selectToken } from "../viewer/selectors";
import { RootState } from "../../store";

export const getOpenedChats = createAsyncThunk(
    'getOpenedChats',
    async (_, {rejectWithValue, getState}) => {
        const token = selectToken(getState() as RootState) ?? '';
        console.log('sfsf');
        const res = await api.getChats(false, token);
        return res;
    } 
)

export const getClosedChats = createAsyncThunk(
    'getClosedChats',
    async (_, {rejectWithValue, getState}) => {
        const token = selectToken(getState() as RootState) ?? '';
        const res = await api.getChats(true, token);
        return res;
    }
)