import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequest } from "../../../api/types";
import { api } from "../../../api/api";
import axios from "axios";

export const login = createAsyncThunk(
    'login',
    async (loginRequest: LoginRequest, {rejectWithValue}) => {
        try {
            const res = await api.login(loginRequest);
            return res;
        }
        catch(e) {
            if(axios.isAxiosError(e)) {
                return rejectWithValue(e.message);
            }
            return rejectWithValue('Ошибка');
        }
    }
)