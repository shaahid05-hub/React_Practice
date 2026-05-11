import { createSlice } from "@reduxjs/toolkit";


    let cartD = JSON.parse(localStorage.getItem('cartD')) || []


let cartSlice = createSlice({
    name:'cart',
    initialState:cartD,
    reducers:
    {
        ADD:(state,action) => {
            let item = action.payload
            console.log(item);
            let existP = state.find(pro=>pro.id == item.id)
            if (existP) {
                existP.quantity += 1 
            }
            else {
                state.push(item)
            }
            localStorage.setItem('cartD',JSON.stringify(state))
        },

        INC:(state,action) => {
            let item = action.payload
            // console.log(item);
            let product = state.find(pro => pro.id == item.id)
            product.quantity += 1
            localStorage.setItem('cartD',JSON.stringify(state)) 
        },

        DEC:(state,action) => {
            let item = action.payload
            console.log(item);
            let product = state.find(pro => pro.id == item.id)
            if(product.quantity > 1){
                product.quantity -= 1 
            }
            else{
            let productR = state.filter(pro => pro.id !== item.id)
            localStorage.setItem('cartD',JSON.stringify(productR)) 
            return productR
            }
        }
    }
})

export const {ADD,INC,DEC} = cartSlice.actions
export default cartSlice.reducer