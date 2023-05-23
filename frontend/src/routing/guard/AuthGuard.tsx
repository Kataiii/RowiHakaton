import { Navigate } from "react-router-dom";


interface AuthGuardProps{
    children : React.ReactElement;
}

const AuthGuard : React.FC<AuthGuardProps> = ({children}) => {
    // let isAuthorized : boolean = auth.formLogin.isAuthorised || registUser.formRegist.isRegist;
    let isAuthorized : boolean = true;

    return(
        isAuthorized
            ? 
            children
            :
            <Navigate to={'-1'} replace/>
    )
}

export default AuthGuard;