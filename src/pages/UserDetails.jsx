import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function UserDetails(){
    const {user, isAuthenticated} = useAuth0();     
    
    return isAuthenticated?
     (
        <div className="user-container">
        <div className="container profile-container">
            {user?.picture && <img className = 'user-img' src={user.picture} alt={user?.name}/>}
            <h2>{user?.name}</h2>
            <p>@{user?.nickname}</p>
            <NavLink className='links' end to='.'>Frequently visited websites</NavLink>
            <NavLink className='links' to='recommendation'>Recommended Websites</NavLink>            
        </div>
        <Outlet/>
        </div>
    ):
    <div>User not authenticated. Please sign in.</div>
}