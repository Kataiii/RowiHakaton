import { Middleware, MiddlewareAPI, AnyAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

export const socketMiddleware: Middleware = (storeApi: MiddlewareAPI<AppDispatch>) => (next: AppDispatch) => (action: AnyAction) => {
    return next(action);
}