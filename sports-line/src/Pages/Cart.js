import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartSizeContext } from "../Context/CartSizeContextProvider";
import "./Cart.css"
const Cart=()=>{
    const [Data,SetData]=useState([]);
    const sumWithInitial=Data.reduce((previousValue,currentValue)=>previousValue+currentValue.sellingPrice,0);
    const GetCartData=()=>{
        axios.get(`http://localhost:3000/cart`).then((Response)=>SetData(Response.data))
    }
    useEffect(()=>{
        GetCartData()
    },[])
    const RemoveCartItem=(id)=>{
        axios.delete(`http://localhost:3000/cart/${id}`)
    }
    const {CartSize,CheckCartSize}=useContext(CartSizeContext);
    return <div>
        <div id="Empty-Cart" style={{display:!CartSize?true:"none"}}><img src="https://www.reliancedigital.in/build/client/images/emptycart.png" alt=""/></div>
    <p id="Empty-Cart-Statement" style={{display:!CartSize?true:"none"}}>Your Shopping Cart is Empty</p>
    <div id="Continue-Shopping" style={{display:!CartSize?true:"none"}}><Link to={"/products"}><button id="Continue-Shopping-Button">CONTINUE SHOPPING</button></Link></div>
    <div id="Checkout" style={{display:CartSize?true:"none"}}>
        <div id="Cart-Products">
            {
                Data?.map((Item)=>(
                    <div key={crypto.randomUUID()}>
                        <img className="Imagediv" src={Item.image} alt="Image"/>
                        <p>{Item.title}</p>
                        <p>{Item.sellingPrice}</p>
                        <button onClick={()=>{RemoveCartItem(Item.id);CheckCartSize();GetCartData()}} className="Remove">Remove</button>
                    </div>
                ))
            }
        </div>
        <div id="Checkout-Section">
            <div id="Price-Details">
                <p>Price Details</p>
                <div id="Price">
                    <p>Price (<span id="Quantity"></span> Items)</p>
                    <p>₹<span id="Total">{sumWithInitial}</span></p>
                </div>
                <div id="Delivery-Charges">
                    <p>Delivery Charges</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div id="Amount-Payable">
                    <p>Amount Payable</p>
                    <p>₹<span id="Total-Amount">{sumWithInitial}</span></p>
                </div>
            </div>
            <button id="Checkout-Button">Checkout</button>
        </div>
    </div>
    </div>
}
export {Cart}