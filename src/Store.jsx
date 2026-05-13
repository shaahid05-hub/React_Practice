import { configureStore } from "@reduxjs/toolkit"
import shaahid from './Redux/Slice'
import cartD from './Redux/CartSlice'


    export default configureStore({
        reducer:{
            count:shaahid,
            cart: cartD
        }
    })
    
