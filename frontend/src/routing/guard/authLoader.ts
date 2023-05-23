import { redirect } from "react-router-dom";
import { AUTH_ROUTE_PATH } from "../constatns";

export const authLoader = () => {
    //Получение пользователя из какого-нибудь стора
    const isAuth = false;
    if(!isAuth) return redirect(AUTH_ROUTE_PATH);
    return null
}