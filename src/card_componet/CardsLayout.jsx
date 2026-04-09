import React from 'react'
import Card from './Card'

export const CardsLayout = ()=>{
    return(
        <>
        <div className='container'>
            <Card name={'shaahid'} desc={'Steverogers'}/>
            <Card name={'Naveen'} desc={'IronMan'}/>
        </div>
        </>
    )
}