import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
    return(
        <div className="container">
            <div className="hero">
                <div className="shadow"><p className="intro">Discover your next online adventure with personalized recommendations!</p>
                <NavLink to='/user'><button className="hero-btn">Check out how</button></NavLink>
                 </div>  
                             
            </div>
        </div>
    )    
}