// import { Navbar, Nav, Container, Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom';//named export
// import Login from '../models/login';// default export 
// import Signup from "../models/signup"

// const Header = () => {
//   return (
//     <>
//       <Navbar expand="lg" className="py-3 shadow-sm Navbar">
//         <Container fluid>
//           <Navbar.Brand className="fs-4 font1 d-flex align-items-center " style={{ color: "white", cursor: "pointer" }}>
//             <Image src='https://logodix.com/logo/92368.png' roundedCircle className='logo1 me-2' />
//             HOTEL TAJ
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarSupportedContent" className='bg-light' />
//           <Navbar.Collapse id="navbarSupportedContent">
//             <Nav className="mx-auto text-center flex-column flex-lg-row font2">
//               <Link to="/" className="text-light text-decoration-none px-3 py-2">Home</Link>
//               <Link to="/aboutus" className="text-light text-decoration-none px-3 py-2">About Us</Link>
//               <Link to="/offers" className="text-light text-decoration-none px-3 py-2">Offers</Link>
//               <Link to="/gallery" className="text-light text-decoration-none px-3 py-2">Gallery</Link>
//               <Link to="/contactus" className="text-light text-decoration-none px-3 py-2">Contact Us</Link>
//             </Nav>
//             <div className="auth-buttons mt-3 mt-lg-0">
//               <Login />
//               <Signup />
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Header;


// import { Navbar, Nav, Container, Image, Offcanvas } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Login from '../models/login';
// // import Signup from "../models/signup";
// import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleClose = () => setShowSidebar(false);
//   const handleShow = () => setShowSidebar(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <Navbar expand="lg" fixed="top" className={`py-3 shadow-sm Navbar transition ${isScrolled ? 'bg-white' : 'bg-dark'}`}>
//         <Container>
//           <Navbar.Brand className="fs-4 font1 d-flex align-items-center" style={{ color: isScrolled ? "black" : "white", cursor: "pointer" }}>
//             <Image src="https://logodix.com/logo/92368.png" roundedCircle className='logo1 me-2' />
//             HOTEL TAJ
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="sidebar" onClick={handleShow} className='bg-light' />

//           <Navbar.Collapse id="navbarSupportedContent" className="d-none d-lg-flex justify-content-between">
//             <Nav className="mx-auto text-center flex-row font2">
//               <Link to="/" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>Home</Link>
//               <Link to="/aboutus" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>About Us</Link>
//               <Link to="/offers" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>Offers</Link>
//               <Link to="/gallery" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>Gallery</Link>
//               <Link to="/contactus" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>Contact Us</Link>
//             </Nav>

//             <div className="auth-buttons mt-3 mt-lg-0">
//               <FontAwesomeIcon icon={faMagnifyingGlass} className={`me-3 ${isScrolled ? 'text-dark' : 'text-light'}`} style={{ cursor: "pointer" }} />
//               <Login />
//               {/* <Signup /> */}
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Offcanvas show={showSidebar} onHide={handleClose} placement="start" className="bg-dark text-light ">
//         <Offcanvas.Header closeButton closeVariant="white">
//           <Offcanvas.Title>HOTEL TAJ</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column text-center font2">
//             <Link to="/" onClick={handleClose} className="text-light text-decoration-none py-2">Home</Link>
//             <Link to="/aboutus" onClick={handleClose} className="text-light text-decoration-none py-2">About Us</Link>
//             <Link to="/offers" onClick={handleClose} className="text-light text-decoration-none py-2">Offers</Link>
//             <Link to="/gallery" onClick={handleClose} className="text-light text-decoration-none py-2">Gallery</Link>
//             <Link to="/contactus" onClick={handleClose} className="text-light text-decoration-none py-2">Contact Us</Link>
//           </Nav>
//           <div className="auth-buttons mt-3 text-center">
//             <FontAwesomeIcon icon={faMagnifyingGlass} className='text-light m-2' style={{ cursor: "pointer" }} />
//             <Login />
//             {/* <Signup /> */}
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default Header;


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
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar expand="lg" fixed="top" className={`py-3 shadow-sm  Navbar transition ${isScrolled ? 'bg-white' : 'bg-dark'}`}>
        <Container>
          <Navbar.Brand className="fs-4 font1 d-flex align-items-center" style={{ color: isScrolled ? "black" : "white", cursor: "pointer" }}>
            <Image src="https://logodix.com/logo/92368.png" roundedCircle className='logo1 me-2' />
            HOTEL TAJ
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="sidebar" onClick={handleShow} className='bg-light' />

          <Navbar.Collapse id="navbarSupportedContent" className="d-none d-lg-flex justify-content-between">
            <Nav className="mx-auto text-center flex-row font2">
              <Link to="/" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>Home</Link>
              <Link to="/aboutus" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>About Us</Link>
              <Link to="/offers" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>Offers</Link>
              <Link to="/gallery" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>Gallery</Link>
              <Link to="/contactus" className={`text-decoration-none px-3 py-2 ${isScrolled ? 'text-dark' : 'text-light'}`}>Contact Us</Link>
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
            <Link to="/offers" onClick={handleClose} className="text-light text-decoration-none py-2">Offers</Link>
            <Link to="/gallery" onClick={handleClose} className="text-light text-decoration-none py-2">Gallery</Link>
            <Link to="/contactus" onClick={handleClose} className="text-light text-decoration-none py-2">Contact Us</Link>
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