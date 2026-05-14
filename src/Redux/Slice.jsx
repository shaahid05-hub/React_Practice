import { createSlice } from "@reduxjs/toolkit"

    let counterSlice = createSlice({
        name:'count',
        initialState:0,
        reducers:{
            INC: ( state,action ) => (state+1),
            DEC: ( state,action ) => (state-1)
        }
    })


export const {INC,DEC} = counterSlice.actions
export default counterSlice.reducer

