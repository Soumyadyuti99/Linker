import React, {useState, useEffect} from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');     

    const handleLogin = async(e) => {
        e.preventDefault();

        console.log('Username :', username);
        console.log('Password :', password);

        try {
            // Make a POST request to the login API
            const response = await fetch('http://localhost:3001/signup/api', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: username,
                password: password,
              }),
            });
        
            // Check if the request was successful (status code 200-299)
            if (response.ok) {
              // Authentication successful, you can handle the response here
              console.log('Login successful');
            } else {
              // Authentication failed, handle the error
              console.error('Login failed');
            }
          } catch (error) {
            // Handle any network or fetch-related errors
            console.error('Error during login:', error);
          }
       

    };

    async function handleGoogleLogin() {
        try {
            // Make a POST request to the login API
            const response = await fetch('http://localhost:3001/google', {
              method: 'GET',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
              }              
            });
        
            // Check if the request was successful (status code 200-299)
            if (response.ok) {
              // Authentication successful, you can handle the response here
              console.log('Login successful');
            } else {
              // Authentication failed, handle the error
              console.error('Login failed');
            }
          } catch (error) {
            // Handle any network or fetch-related errors
            console.error('Error during login:', error);
          }
                
    }

    


    return (
        <div>
          <h2>Login Page</h2>
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => {                    
                    setUsername(e.target.value)}}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => {
                    
                    setPassword(e.target.value)}}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
          <p>Or sign up using</p>
          <form action="http://localhost:3001/google" method="get">
            <input type="submit" value="Google"/>
          </form>
        </div>
      );
    
}