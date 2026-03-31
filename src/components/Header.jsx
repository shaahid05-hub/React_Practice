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
  );
}

export default Header;