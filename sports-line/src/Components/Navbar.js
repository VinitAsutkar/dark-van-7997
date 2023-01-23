import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider"
import { CartSizeContext } from "../Context/CartSizeContextProvider";
import "./Navbar.css"
const Navbar=()=>{
    const {IsAuth,Logout}=useContext(AuthContext);
    const {CartSize}=useContext(CartSizeContext);
    return <div id="Navbar">
        <div id="Logo"><Link to={"/"}><img style={{width:"100%"}} src="https://cdn.worldvectorlogo.com/logos/sports-line.svg" alt="Logo"/></Link></div>
        <Link to={"/products"} style={{textDecoration:"none",color:"black"}}><span id="Products">Products</span></Link>
        <Link to={"/cart"} style={{textDecoration:"none",color:"black"}}><div id="Cart"><i className="fa-sharp fa-solid fa-cart-shopping"></i><span id="Cart-Count">{CartSize}</span><span> Cart</span></div></Link>
        <Link to={"/login"} style={{textDecoration:"none",color:"black"}}><div id="User"><i className="fa-solid fa-user"></i><span id="Profile">{JSON.parse(localStorage.getItem("Profile"))||"Login"}</span></div></Link>
        <div style={{display:IsAuth?true:"none"}} onClick={()=>Logout()}><span id="Logout"><i className="fa-sharp fa-solid fa-power-off"></i> Logout</span></div>
    </div>
}
export {Navbar}