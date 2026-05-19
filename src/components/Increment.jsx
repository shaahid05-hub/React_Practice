import React, { useState } from 'react'

export function Increment(){
    let [count,setcount] = useState(0)

    // function Inc(){
    //     setcount(count+1)
    // }
    // function Dec() {
    //     setcount(count-1)
    // }
    return(
        <>
        <div className='container-fluid bg-primary p-3 text-center'>
            <h1>Count:{count}</h1>
        <button className='btn btn-success m-3' onClick={()=>{setcount(count+1)}}>Inc</button>
        <button className='btn btn-danger m-3' onClick={()=>{setcount(count-1)}}>Dec</button>
        </div>
        </>
    )
}