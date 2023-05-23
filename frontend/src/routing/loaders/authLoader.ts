import { redirect } from "react-router";
import { selectIsAuth } from "../../store/slices/viewer/selectors";
import { useAppSelector } from "../../store/store";
import { CHATS_ROUTE_PATH, AUTH_ROUTE_PATH } from "../constatns";

export const authLoader = () => {
    return null;
    // const isAuth = useAppSelector(selectIsAuth)
    // return redirect(isAuth
    //     ? CHATS_ROUTE_PATH
    //     : AUTH_ROUTE_PATH,
    // )
}