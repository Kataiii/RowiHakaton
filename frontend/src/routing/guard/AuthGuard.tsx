import { Navigate } from "react-router-dom";
import { AUTH_ROUTE_PATH } from "../constatns";


interface AuthGuardProps{
    children : React.ReactElement;
}

const AuthGuard : React.FC<AuthGuardProps> = ({children}) => {
    // let isAuthorized : boolean = auth.formLogin.isAuthorised || registUser.formRegist.isRegist;
    let isAuthorized : boolean = true;

    return(
        isAuthorized
            ?  children
            : <Navigate to={AUTH_ROUTE_PATH} replace/>
    )
}

export default AuthGuard;