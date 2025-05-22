import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSelect = (eventKey) => {
    setActiveLink(eventKey);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-4 font1">HOTEL TAJ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto text-center" activeKey={activeLink} onSelect={handleSelect}>
            <Nav.Link eventKey="Home" href="#">Home</Nav.Link>
            <Nav.Link eventKey="Rooms" href="#22">Rooms</Nav.Link>
            <NavDropdown title="Pages" id="pages-dropdown" menuVariant="dark">
              <NavDropdown.Item eventKey="About us" href="#">About us</NavDropdown.Item>
              <NavDropdown.Item eventKey="Offers" href="#">Offers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="Contact us" href="#">Contact us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey="Events" href="#">Events</Nav.Link>
            <Nav.Link eventKey="Blogs" href="#">Blogs</Nav.Link>
          </Nav>
          <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
            <Button variant="outline-light">Log In</Button>
            <Button variant="outline-light">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;