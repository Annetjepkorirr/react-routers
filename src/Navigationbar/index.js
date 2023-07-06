import React from "react";
import './style.css'
const Navigationbar = ()=>{
    return(
        <nav>
            <ul>
                <li><a href="/Home" ></a>Home</li>
                <li><a href="/About" ></a>About</li>
                <li><a href="/Login" ></a>Login</li>
            </ul>
        </nav>
    )
}
export default Navigationbar