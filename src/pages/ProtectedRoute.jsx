import React from "react";
import UserDetails from "./UserDetails";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProtectedRoute() {    
    const {loginWithRedirect, isAuthenticated, isLoading} = useAuth0();    
    
    React.useEffect(()=>{
        if(!isLoading && !isAuthenticated){
            loginWithRedirect();
        }
    },[isAuthenticated, isLoading])    
      
    return isAuthenticated? (<UserDetails />): 
    null;    
}