import axios from "axios"
import { useEffect, useReducer } from "react"
import { Grid, GridItem } from '@chakra-ui/react'
import ProductCard from "../Components/ProductCard"
const initialState={
    Products:[],
    IsLoading:true,
    IsError:""
}
const reducer=(state,action)=>{
    switch (action.type){
        case "Success":return {...state,Products:action.payload,IsLoading:false,IsError:false}
        case "Failure":return {Products:[],IsLoading:false,IsError:"Something went wrong"}
        default:throw new Error()
    }
}
const Products=()=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const {Products,IsLoading,IsError}=state;
    const GetData=()=>{
        axios.get(`http://localhost:3000/data`).then((Response)=>dispatch({type:"Success",payload:Response.data})).catch((Error)=>dispatch({type:"Failure",payload:Error}))
    }
    useEffect(()=>{
        GetData()
    },[])
    return <div>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} w="100%">
        {
            Products?.map((Item)=>{
                return <GridItem key={crypto.randomUUID()}>
                    <ProductCard id={Item.id}
                    category={Item.category}
                    description={Item.description}
                    image={Item.image}
                    markedPrice={Item.markedPrice}
                    sellingPrice={Item.sellingPrice}
                    title={Item.title}
                    />
                    
                    </GridItem>
            })
        }
        </Grid>
    </div>
}
export {Products}