import { Box, Button, Container, Flex, Heading, Image, List, ListItem, SimpleGrid, Stack, StackDivider, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useEffect, useReducer, useState } from "react"
import { useParams } from "react-router-dom"
import { CartSizeContext } from "../Context/CartSizeContextProvider"
const initialState={
  Product:[],
  IsLoading:true,
  IsError:""
}
const reducer=(state,action)=>{
  switch (action.type){
    case "Success":return {...state,Product:action.payload,IsLoading:false,IsError:false}
    case "Failure":return {Product:[],IsLoading:false,IsError:"Something went wrong"}
    default:throw new Error()
  }
}
const ProductInfo=()=>{
  const {CheckCartSize}=useContext(CartSizeContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {Product,IsLoading,IsError}=state;
  const {ID}=useParams();
  const GetData=(ID)=>{
    axios.get(`http://localhost:3000/data/${ID}`).then((Response)=>dispatch({type:"Success",payload:Response.data})).catch((Error)=>dispatch({type:"Failure",payload:Error}))
  }
  useEffect(()=>{
    GetData(ID)
  },[ID])
  const {id,image,sellingPrice,title,description,features}=Product;
  const AddtoCart=(id,image,sellingPrice,title)=>{
    axios.post(`http://localhost:3000/cart`,{id,image,sellingPrice,title})
  }
  return <div>
    <Container maxW={'7xl'}>
      <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
          rounded={'md'}
          alt={'product image'}
          src={image}
          fit={'cover'}
          align={'center'}
          margin={'auto'}
          />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {title}
              </Heading>
              <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {`$${sellingPrice}`}
              </Text>
            </Box>
            <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')}/>}>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {description}
                </Text>
                <Text fontSize={'lg'}>{features}</Text>
              </VStack>
              <Box>
                <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
                </Text>
              </Box>
            </Stack>
            <Button onClick={()=>{CheckCartSize();AddtoCart(id,image,sellingPrice,title)}}
            rounded={'none'}
            border={'1px solid red'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={'red'}
            color={'white'}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
            </Button>
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
      </SimpleGrid>
    </Container>
    </div>
}
export {ProductInfo}