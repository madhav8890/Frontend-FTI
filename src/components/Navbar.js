import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'

function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg" className='px-5 py-4'>
      <Container fluid>
        <Navbar.Brand href="#">
            <Image src='https://futuretechnoindia.com/wp-content/uploads/2022/02/cropped-cropped-cropped-Untitled_design__1_-removebg-preview-1.png'  style={{width:'50px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto pe-5 my-5 my-lg-0 justify-content-end flex-grow-1 pe-3 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='pe-4 text-white fw-bold'>Home</Nav.Link>
            <Nav.Link href="#action2" className='pe-4 text-white fw-bold'>All Courses</Nav.Link>
            <Nav.Link href="#action2" className='pe-4 text-white fw-bold'>Services</Nav.Link>
            <Nav.Link href="#action2" className='pe-4 text-white fw-bold'>About</Nav.Link>
            <Nav.Link href="#action2" className='pe-4 text-white fw-bold'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;