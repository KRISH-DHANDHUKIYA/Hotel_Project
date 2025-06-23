import { Link } from "react-router-dom";
import { Card, Button, Image, Badge, Row, Col } from "react-bootstrap";
import { assets } from "../assets/assets";

const Home3 = ({ room, index }) => {
    return (
        <Link to={`/room/${room._id}`} onClick={() => scrollTo(0, 0)} key={room._id} className="text-decoration-none text-reset ">

            <Card className="w-100 shadow-sm rounded-4 overflow-hidden bg-white mx-auto" style={{ maxWidth: '17.5rem' }}>
                <div className="position-relative">
                    <div className="zoom-container">
                        <Card.Img
                            src={room.images[0]}
                            alt="Room"
                            className="zoom-img"
                        />
                    </div>

                    {index % 2 === 0 && (
                        <Badge bg="danger" text="light" className="position-absolute top-0 start-0 mt-3 ms-3 fs-6 fw-semibold rounded-pill">
                            Best Seller
                        </Badge>
                    )}
                </div>

                <Card.Body className="pt-4">
                    <Row className="align-items-center justify-content-between mb-2">
                        <Col xs="auto">
                            <Card.Title as="h5" className="mb-0 text-dark">
                                {room.hotel.name}
                            </Card.Title>
                        </Col>
                        <Col xs="auto" className="d-flex align-items-center">
                            <Image src={assets.starfill} alt="Rating" width={16} height={16} className="me-1" />
                            <small>4.5</small>
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-3">
                        <Col xs="auto">
                            <Image src={assets.location333} alt="Location" width={14} height={14} className="me-1" />
                        </Col>
                        <Col className="ps-0">
                            <small className="text-muted">{room.hotel.address}</small>
                        </Col>
                    </Row>

                    <Row className="align-items-center justify-content-between">
                        <Col>
                            <span className="fs-5 fw-semibold text-dark">${room.pricePerNight}</span> <small>/ Night</small>
                        </Col>
                        <Col xs="auto">
                            <Button variant="outline-danger" size="sm" className="fw-semibold">
                                Book Now
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default Home3;