import { Navigate } from "react-router-dom";


interface RoleGuardProps{
    children : React.ReactElement;
}

const RoleGuard : React.FC<RoleGuardProps> = ({children}) => {
    let isUser : boolean = true;

    return(
        isUser
            ? 
            children
            :
            <Navigate to={'-1'} replace/>
    )
}

export default RoleGuard;