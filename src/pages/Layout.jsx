import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Layout() {
    const { loginWithRedirect, isAuthenticated, user} = useAuth0();
    const { logout } = useAuth0();
    const url = 'http://localhost:3001/login/api';
    const data =  user;
    const requestOptions = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data), // Convert the data to JSON format
    }
    React.useEffect(()=>{
        async function PostUser() {
        
            try {
                const response = await fetch(url, requestOptions);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                console.log("posting");
                const responseData = await response.json();
                console.log(responseData);
            }
            catch(error){
                console.error(error);
            }
        }
        PostUser();
    }, [user])
    
    
    return(
        <div>
            <nav>
                <NavLink className='links' to='/'>#LINKER</NavLink>
                <div className="info">
                    {!isAuthenticated && <button className="login-out-btn" onClick={
                        ()=>loginWithRedirect() }>
                    Login/Sign Up</button>}
                    {isAuthenticated && <button className="login-out-btn" onClick={()=> logout()}>Logout</button>}
                    <NavLink className='links' to='/user'>User</NavLink>
                </div>                
            </nav>
            <Outlet />            
            <footer>© Linker 2023</footer>            
        </div>
    )
}