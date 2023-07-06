import React from "react";
import './style.css'
const Navigationbar = ()=>{
    return(
        <nav className="navItems" >
            <ul>
                
                <a href="/product" >Products</a>
                <a href="/login" >Login</a>
            </ul>
        </nav>
    )
}
export default Navigationbar