import React from "react";
import "./Login.css"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import axios from "axios"
const Login=()=>{
    const {IsAuth,Login}=React.useContext(AuthContext);
    const [LoginEmail,SetLoginEmail]=React.useState("");
    const [LoginPassword,SetLoginPassword]=React.useState("");
    const [LoginCredentials,SetLoginCredentials]=React.useState({});
    const HandleLogin=()=>{
        SetLoginCredentials({LoginEmail,LoginPassword})
        GetUserInfo()
    }
    const GetUserInfo=()=>{
        axios.get(`https://636df0bbb567eed48acd7f24.mockapi.io/userdata`).then((Response)=>MatchCredentials(Response.data))
    }
    const MatchCredentials=(Data)=>{
        let Form={Email:LoginEmail,Password:LoginPassword}
    if(Form.Email==""||Form.Password==""){
        alert(`Please enter your credentials`)
    }
    else{
        let Flag=false;
        Data.forEach((element)=>{
            if(element.Email==Form.Email&&element.Password==Form.Password){
                Flag=true;
                localStorage.setItem("Profile",JSON.stringify(element.Name))
            }
        })
        if(Flag){
            Login()
        }
        else{
            alert(`Please enter correct credentials`)
        }
    }
    }
    if(IsAuth){
        return <Navigate to={"/"}/>
    }
    return <div id="Authentication">
    <div id="Payment-Offers"><img src="https://assets.bounceexchange.com/assets/uploads/clients/4506/creatives/f26cebe259c52dc3c4ea4e2ada9b833a.jpg" alt=""/></div>
    <div id="Login-Register">
        <div id="Login-Header">Login</div>
        <div id="Login-Form">
            <div class="Email"><input type="text" placeholder="Email" id="Login-Email" onChange={(Event)=>SetLoginEmail(Event.target.value)}/></div>
            <div class="Password"><input type="password" placeholder="Password" id="Login-Password" onChange={(Event)=>SetLoginPassword(Event.target.value)}/></div>
            <button id="Login" onClick={()=>HandleLogin()}>Login</button>
        </div>
        <h3>New to Sportsline ?</h3>
        <div id="Register-Header">Register</div>
        <div id="Register-Form">
            <div class="Name"><input type="text" placeholder="Name" id="Register-Name"/></div>
            <div class="Mobile"><input type="number" placeholder="Mobile Number" id="Register-Mobile"/></div>
            <div class="Email"><input type="text" placeholder="Email" id="Register-Email"/></div>
            <div class="Password"><input type="password" placeholder="Password" id="Register-Password"/></div>
            <button id="Register">Register</button>
        </div>
    </div>
</div>
}
export {Login}