import { Navbar, Nav, Container, Image, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from '../models/Login';
import { useState } from 'react';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    <>
      <Navbar expand="lg" className={`py-3 shadow-sm Navbar transition bg-dark`}>
        <Container>
          <Navbar.Brand className="fs-4 font1 d-flex align-items-center" style={{ cursor: "pointer" }}>
            <Link to="/" className="d-flex align-items-center text-decoration-none text-light">
              <Image src="https://logodix.com/logo/92368.png" roundedCircle className="logo1 me-2" />
              HOTEL TAJ
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="sidebar" onClick={handleShow} className='bg-light' />

          <Navbar.Collapse id="navbarSupportedContent" className="d-none d-lg-flex justify-content-between">
            <Nav className="mx-auto text-center flex-row fontt">
              <Link to="/" className="text-decoration-none px-3 py-2 text-light">Home</Link>
              <Link to="/aboutus" className="text-decoration-none px-3 py-2 text-light">About Us</Link>
              <Link to="/room" className="text-decoration-none px-3 py-2 text-light">Room</Link>
              <Link to="/facility" className="text-decoration-none px-3 py-2 text-light">Facility</Link>
              <Link to="/mybooking" className="text-decoration-none px-3 py-2 text-light">My Booking</Link>
            </Nav>

            <div className="auth-buttons mt-3 mt-lg-0">
              <Button className="bg-danger border-0" onClick={() => setShowLogin(true)}>
                Log in
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={handleClose} placement="start" className="bg-dark text-light">
        <Offcanvas.Header closeButton closeVariant="white" />
        <Offcanvas.Body>
          <Nav className="flex-column text-center fontt">
            <Link to="/" onClick={handleClose} className="text-light text-decoration-none py-2">Home</Link>
            <Link to="/aboutus" onClick={handleClose} className="text-light text-decoration-none py-2">About Us</Link>
            <Link to="/room" onClick={handleClose} className="text-light text-decoration-none py-2">Room</Link>
            <Link to="/facility" onClick={handleClose} className="text-light text-decoration-none py-2">Facility</Link>
            <Link to="/mybooking" onClick={handleClose} className="text-light text-decoration-none py-2">My Booking</Link>
          </Nav>
          <div className="auth-buttons mt-3 text-center">
            <Button className="bg-danger border-0" onClick={() => { setShowSidebar(false); setShowLogin(true); }}>
              Log in
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Login show={showLogin} onHide={() => setShowLogin(false)} />
    </>
  );
};

export default Header;