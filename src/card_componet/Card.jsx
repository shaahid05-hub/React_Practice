import React from 'react'

function Card({name,desc}) {
  return (
    <>
    <div className='card p-3 mt-5'>
        <img src="https://images.pexels.com/photos/33392859/pexels-photo-33392859.jpeg" alt="" />
        <h1>{name}</h1>
        <p>{desc}</p>
    </div>
    </>
  )
}

export default Card
