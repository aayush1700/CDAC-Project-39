import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'
import { isLoggedIn } from '../pages/Auth';
const Privateroute=()=> {
    let loggedIn=false;

    if(isLoggedIn())
        return <Outlet/>
    else
        return <Navigate to={"/Login"}/>;

}

export default Privateroute