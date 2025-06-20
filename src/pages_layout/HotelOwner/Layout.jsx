import Navbar1 from "../../Pages/HotelOwner/Navbar1";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Pages/HotelOwner/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Container fluid className="min-vh-100 d-flex flex-column p-0">
            <Navbar1 />
            <Row className="flex-grow-1 m-0">
                <Col xs={12} md={3} lg={2} className="bg-light p-0">
                    <Sidebar />
                </Col>
                <Col xs={12} md={9} lg={10} className="pt-4 px-4">
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;