import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './Cartslice'
import productReducer from "./productSlice";

const store = configureStore({
        reducer:{
            cart : CartReducer,
            product : productReducer
        }
})

export default store