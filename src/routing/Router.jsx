import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import Products from './Products'
import SingleProductPage from '../pages/SingleProductPage'
import SignUp from '../formValidation2/SignUp'
import Login from '../formValidation2/Login'
import Layout from '../features/Layout'
import UserList from '../context/UserList'
import Cart from '../pages/Cart'



export function Router(){
    return(
        <>
           <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route element={<Layout/>}>
                <Route path='/home' element={<Home/>}/>
                <Route path='/products' element={<Products/>} />
                <Route path='/products/:id' element={<SingleProductPage/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/userlist' element={<UserList/>}/>
            </Route>

           </Routes>
        </>
    )
} 