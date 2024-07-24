import { useState } from "react";
import logo from "../images/logo.png";
import "../stylesheets/header.css"
const Header=()=>{

    const[btnName,setBtnName]=useState("Login");

    return <div className="header">
        <div className="logo-container">
            <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="nav-items">
            <ul> 
                <li>Home</li>
                <li>Contact</li>
                <li>About us</li>
                <li>Cart</li>
                <li><button className="login" onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button></li>
            </ul>
        </div>
    </div>
}

export default Header;