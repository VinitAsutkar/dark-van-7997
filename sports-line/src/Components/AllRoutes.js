import { Route, Routes } from "react-router-dom"
import { Cart } from "../Pages/Cart"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { ProductInfo } from "../Pages/ProductInfo"
import { Products } from "../Pages/Products"
const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:ID" element={<ProductInfo/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
}
export {AllRoutes}