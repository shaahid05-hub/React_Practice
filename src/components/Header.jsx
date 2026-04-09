<<<<<<< HEAD
// import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <>
//     <div className='bg-primary p-3 d-flex justify-content-center'>
//         <Nav
//       activeKey="/home"
//       onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
//     >
//       <Link to='/'>Home</Link>
//       <Link to='/products'>Products</Link>
//       <Link to='/about'>About</Link>
//       </Nav>
//     </div>
//     </>
//   );
// }

// export default Header;



import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-primary p-3'>
      <ul className="nav justify-content-center">
  <li className="nav-item">
    <NavLink to="/" className="nav-link text-white fs-4">Home</NavLink>  
 </li>
  <li className="nav-item">
    <NavLink to="/products" className="nav-link text-white fs-4">Products</NavLink>  
  </li>
  <li className="nav-item">
    <NavLink to="/about" className="nav-link text-white fs-4">About</NavLink>  
  </li>
</ul>
    </div>

=======
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <>
    <div className='bg-primary p-3 d-flex justify-content-center'>
        <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home" className='text-white fs-4'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='text-white fs-4'>Courses</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='text-white fs-4'>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='text-white fs-4'>Contact</Nav.Link>
      </Nav.Item>
      </Nav>
    </div>
    </>
>>>>>>> bb6ac800273f20e7f1f385e2cbd00c568bdc44ca
  );
}

export default Header;