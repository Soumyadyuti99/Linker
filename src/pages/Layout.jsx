import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";


export default function Layout() {
    
    const url = 'http://localhost:3001/login/api';
    /*const requestOptions = {
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
    }, [user])*/
    
    
    return(
        <div>
            <nav>
                <NavLink className='links' to='/'>#LINKER</NavLink>
                <div className="info">                    
                    <Link to='/login' className="login-out-btn">Login</Link>
                    <NavLink className='links' to='/user'>User</NavLink>
                </div>                
            </nav>
            <Outlet />            
            <footer>© Linker 2023</footer>            
        </div>
    )
}