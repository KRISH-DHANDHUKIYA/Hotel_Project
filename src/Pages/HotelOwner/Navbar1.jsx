import { Navbar, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../page_css/Admin.css";

const Navbar1 = () => {
    return (
        <Navbar expand="md" bg="dark" variant="light" className="border-bottom shadow-sm py-3 ">
            <Container fluid className="d-flex justify-content-between align-items-center">
                <Link to="/" className="d-flex align-items-center text-decoration-none text-dark">
                    <Image src="https://logodix.com/logo/92368.png" alt="logo" height="36" className="d-inline-block align-top opacity-75 me-2 ms-5" />
                    <span className="fw-bold font1 text-light">HOTEL TAJ</span>
                </Link>
            </Container>
        </Navbar>
    );
};

export default Navbar1;

