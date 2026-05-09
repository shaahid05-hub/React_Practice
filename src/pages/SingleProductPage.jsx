import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ADD } from '../Redux/CartSlice'

function SingleProductPage() {

  let dispatch = useDispatch()
  let navigate = useNavigate()
  let { id } = useParams()
  // console.log(id);
  
  let [product, setProduct] = useState({})

  useEffect(() => {
    async function api() {
      let { data } = await axios.get(`https://dummyjson.com/products/${id}`)
    
      // console.log(data);
      setProduct(data);
    }
    api()
  },[id])

  if (!product) {
    return <h2 className='text-center my-5'>Loading...</h2>
  }

  return (
<>
     <div className="container mt-5 pad">
      <div className="row justify-content-center">
       {
         <div className="col-md-6">
          <div className="card p-3">

            <img
              src={product.thumbnail}
              alt=""
              style={{ height: "300px", objectFit: "contain" }}
            />

            <h2 className='text-center mt-3'>
              {product.title}
            </h2>

            <p className='px-2'>
              {product.description}
            </p>

            <div className='d-flex justify-content-between mt-3'>
              <button className="btn btn-outline-dark mx-2" onClick={()=>(dispatch(ADD({...product,quantity:1})))}>Add to Cart</button>

              <button
                className="btn btn-outline-secondary"
                onClick={() => navigate('/products')}
              >
                Back
              </button>
            </div>

          </div>
        </div>
       }
      </div>
    </div>
</>

   


  )
}

export default SingleProductPage
