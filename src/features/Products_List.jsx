import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Products_List() {

    let [products, setProducts] = useState([])
    let [search, setSearch] = useState('')
    let [categoryList, setcategoryList] = useState([])
    let [category, setCategory] = useState('')
    let [page, setPage] = useState(1)
    let [viewbtn, setViewbtn] = useState(0)
    let perPage = 12

    useEffect(() => {
        async function dataApi() {
            let { data } = await axios.get('https://dummyjson.com/products/category-list')
            // console.log(data);
            setcategoryList(data)
        }
        dataApi()
    }, [])

    useEffect(() => {
        async function proApi() {
            let url;
            if (category) {
                url = `https://dummyjson.com/products/category/${category}`
            }
            else if (search) {
                url = `https://dummyjson.com/products/search?q=${search}`
            }
            else {
                url = `https://dummyjson.com/products?limit=100`
            }

            let { data } = await axios.get(url)
            console.log(data.products);

            let allProducts = data.products || []
            setViewbtn(allProducts.length)

            let pagination = allProducts.slice((page - 1) * perPage, page * perPage)

            setProducts(pagination)

        }
        proApi()
    }, [category, search, page])


    let btns = Math.ceil(viewbtn / perPage)


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className=" col-4">
                        <input type="text" className='form-control border border-info text-center' placeholder='Search' value={search}
                            onChange={e => {
                                setPage(1)
                                setSearch(e.target.value)
                                setCategory('')

                            }}
                        />
                    </div>
                    <div className=" col-4">
                        <select name="" id="" className='form-control border border-warning text-center'
                            onChange={e => {
                                setPage(1)
                                setSearch('')
                                setCategory(e.target.value)
                            }}
                        >
                            <option value="">Select Category</option>
                            {
                                categoryList.map((item) =>
                                    <option value={item} key={item}>{item}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-between my-5">
 
                        {
                            products.map(i =>

                                <div className="col-4 my-4 d-flex flex-column" key={i.id}>
                                    <NavLink to={`/products/{i.id}`} className='nav-link'>
                                        <div className=" container card h-100 " >
                                            <img src={i.thumbnail} alt="" style={{ height: "350px", objectFit: "cover" }} />
                                            <h2 className='text-center' style={{ minHeight: '80px' }}>{i.title}</h2>
                                            <p style={{ minHeight: "60px" }} className='px-1'>{i.description.slice(0, 200) + '...'}</p>
                                            <div className='row justify-content-evenly mb-4'>
                                                <button className="btn btn-primary w-auto btn-outline-dark">Add to Cart</button>
                                                <button className="btn btn-primary w-auto btn-outline-dark">Details</button>
                                            </div>
                                        </div>
                                    </NavLink>

                                </div>


                            )
                        }


                    </div>
                </div>
                <div className="row justify-content-center my-5">
                    {
                        btns > 1 && Array.from({ length: btns }, (_, i) => i + 1).map(btn =>
                            <div className="col-1" key={btn}>
                                <button className="btn btn-outline-primary" onClick={() => setPage(btn)}>
                                    {
                                        btn
                                    }
                                </button>
                            </div>
                        )
                    }

                </div>
            </div>

        </>
    )
}

export default Products_List
