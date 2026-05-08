import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Header() {
  let catv = useSelector(state=> state.cart)
  return (
    <>
      <div className='bg-warning p-3 position-fixed start-0 end-0 top-0 z-3'>
        <div className=''>
          <ul className="nav justify-content-evenly">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link text-dark fs-5">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link text-dark fs-5">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-dark fs-5">About</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/userlist" className="nav-link text-dark fs-5">UserList</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link text-dark fs-5">Cart <sup>{catv.length}</sup></NavLink>
            </li>
            

          </ul>
        </div>



      </div>




    </>
  )
}

export default Header