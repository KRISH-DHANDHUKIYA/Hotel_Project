import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from '../models/login';
import Signup from "../models/signup"

const Header = () => {

  return (
    <>
      <Navbar expand="lg" className="py-3 shadow-sm Navbar">
        <Container fluid>
          <Navbar.Brand href="#" className="fs-4 font1 d-flex align-items-center " style={{ color: "white" }}>
            <Image src='https://logodix.com/logo/92368.png' roundedCircle className='logo1 me-2' />
            HOTEL TAJ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mx-auto text-center flex-column flex-lg-row font2">
              <Link to="/" className="text-light text-decoration-none px-3 py-2">Home</Link>
              <Link to="/aboutus" className="text-light text-decoration-none px-3 py-2">About Us</Link>
              <Link to="/offers" className="text-light text-decoration-none px-3 py-2">Offers</Link>
              <Link to="/gallery" className="text-light text-decoration-none px-3 py-2">Gallery</Link>
              <Link to="/contactus" className="text-light text-decoration-none px-3 py-2">Contact Us</Link>
            </Nav>

            <div className="auth-buttons mt-3 mt-lg-0">
              <Login />
              <Signup />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Header;
