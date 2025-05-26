import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" className="py-3 shadow-sm Navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-4 font1">HOTEL TAJ</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto text-center flex-column flex-lg-row gap-2 gap-lg-0 my-3 my-lg-0 font2">
            <Link to="/" className="text-light text-decoration-none px-2 py-1">
              Home
            </Link>
            <Link to="/aboutus" className="text-light text-decoration-none px-2 py-1">
              About Us
            </Link>
            <Link to="/offers" className="text-light text-decoration-none px-2 py-1">
              Offers
            </Link>
            <Link to="/gallery" className="text-light text-decoration-none px-2 py-1">
              Gallery
            </Link>
            <Link to="/contactus" className="text-light text-decoration-none px-2 py-1">
              Contact Us
            </Link>
          </Nav>

          <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0 ">
            <Button className="btn btn-danger">Log In</Button>
            <Button className="btn btn-primary">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header