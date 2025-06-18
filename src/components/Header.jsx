import { Navbar, Nav, Container, Image, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from '../models/Login'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar expand="lg" fixed="top" className={`py-3 shadow-sm  Navbar transition ${isScrolled ? 'bg-white' : 'bg-dark'}`}>
        <Container>
          <Navbar.Brand className="fs-4 font1 d-flex align-items-center" style={{ cursor: "pointer" }}>
            <Link to="/" className="d-flex align-items-center text-decoration-none" style={{ color: isScrolled ? "black" : "white" }}>
              <Image src="https://logodix.com/logo/92368.png" roundedCircle className="logo1 me-2" />
              HOTEL TAJ
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="sidebar" onClick={handleShow} className='bg-light' />

          <Navbar.Collapse id="navbarSupportedContent" className="d-none d-lg-flex justify-content-between">
            <Nav className="mx-auto text-center flex-row font2">
              <Link to="/" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>Home</Link>
              <Link to="/aboutus" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>About Us</Link>
              <Link to="/room" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>Room</Link>
              <Link to="/facility" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>Facility</Link>
            </Nav>

            <div className="auth-buttons mt-3 mt-lg-0">
              <FontAwesomeIcon icon={faMagnifyingGlass} className={`me-3 ${isScrolled ? 'text-dark' : 'text-light'}`} style={{ cursor: "pointer" }} />
              <Button className='bg-danger border-0' onClick={() => setShowLogin(true)}>
                Log in
              </Button>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={handleClose} placement="start" className="bg-dark text-light ">
        <Offcanvas.Header closeButton closeVariant="white">
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column text-center font2">
            <Link to="/" onClick={handleClose} className="text-light text-decoration-none py-2">Home</Link>
            <Link to="/aboutus" onClick={handleClose} className="text-light text-decoration-none py-2">About Us</Link>
            <Link to="/room" onClick={handleClose} className="text-light text-decoration-none py-2">Room</Link>
            <Link to="/facility" onClick={handleClose} className="text-light text-decoration-none py-2">Facility</Link>
          </Nav>
          <div className="auth-buttons mt-3 text-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-light m-2' style={{ cursor: "pointer" }} />
            <Button className='bg-danger border-0' onClick={() => { setShowSidebar(false); setShowLogin(true); }}>
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