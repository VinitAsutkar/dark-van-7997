import React from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider"
import "./Navbar.css"
const Navbar=()=>{
    const {IsAuth,Logout}=React.useContext(AuthContext);
    return <div id="Navbar">
        <div id="Logo"><Link to={"/"}><img style={{width:"100%"}} src="https://cdn.worldvectorlogo.com/logos/sports-line.svg" alt="Logo"/></Link></div>
        <Link to={"/products"} style={{textDecoration:"none",color:"black"}}><span id="Products">Products</span></Link>
        <Link to={"/cart"} style={{textDecoration:"none",color:"black"}}><div id="Cart"><i class="fa-sharp fa-solid fa-cart-shopping"></i><span id="Cart-Count">0</span><span> Cart</span></div></Link>
        <Link to={"/login"} style={{textDecoration:"none",color:"black"}}><div id="User"><i class="fa-solid fa-user"></i><span id="Profile">{JSON.parse(localStorage.getItem("Profile"))}</span></div></Link>
        <div style={{display:IsAuth?true:"none"}} onClick={()=>Logout()}><span id="Logout">Logout <i class="fa-sharp fa-solid fa-power-off"></i></span></div>
    </div>
}
export {Navbar}