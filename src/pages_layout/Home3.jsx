// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";

// const Home3 = ({ room, index }) => {
//     return (
//         <>
//             <Link to={'/offers' + room._id} onClick={() => { scrollTo(0, 0) }} key={room._id} className="position-relative w-100 rounded-4 overflow-hidden bg-white text-secondary shadow-sm"
//                 style={{ maxWidth: '17.5rem' }}>
//                 <img src={room.images[0]} alt="imhw1" />

//                 {index % 2 === 0 && <p className="px-3 py-1 position-absolute top-0 start-0 translate-middle-y mt-3 ms-3 fs-6 bg-white text-dark fw-semibold rounded-pill"
//                 >Best Seller</p>}

//                 <div className="p-4 pt-5 ">
//                     <div className="d-flex align-items-center justify-content-between">
//                         <p className="fs-4 fw-semibold text-dark">{room.hotel.name}</p>
//                         <div className="d-flex align-items-center gap-1">
//                             <img src={assets.starIconFilled} alt="starto1" /> 4.5
//                         </div>
//                     </div>
//                     <div className="d-flex align-items-center gap-1 small">
//                         <img src={assets.locationIcon} alt="locto1" />
//                         <span>{room.hotel.address}</span>
//                     </div>
//                     <div className="d-flex align-items-center justify-content-between mt-4">
//                         <p><span className="fs-4 text-dark">${room.pricePerNight}</span> / night</p>
//                         <button className="px-4 py-2 fs-6 fw-semibold border border-secondary rounded transition cursor-pointer">
//                             Book Now
//                         </button>
//                     </div>
//                 </div>
//             </Link>
//         </>
//     );
// };

// export default Home3

import { Link } from "react-router-dom";
import { Card, Button, Image, Badge, Row, Col } from "react-bootstrap";
import { assets } from "../assets/assets";

const Home3 = ({ room, index }) => {
    return (
        <Link to={`/offers${room._id}`} onClick={() => scrollTo(0, 0)} key={room._id} className="text-decoration-none text-reset ">

            <Card className="w-100 shadow-sm rounded-4 overflow-hidden bg-white mx-auto" style={{ maxWidth: '17.5rem' }}>
                <div className="position-relative">
                    <Card.Img src={room.images[0]} alt="Room" />

                    {index % 2 === 0 && (
                        <Badge bg="light" text="dark" className="position-absolute top-0 start-0 mt-3 ms-3 fs-6 fw-semibold rounded-pill">
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
                            <Image src={assets.starIconFilled} alt="Rating" width={16} height={16} className="me-1" />
                            <small>4.5</small>
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-3">
                        <Col xs="auto">
                            <Image src={assets.locationIcon} alt="Location" width={14} height={14} className="me-1" />
                        </Col>
                        <Col className="ps-0">
                            <small className="text-muted">{room.hotel.address}</small>
                        </Col>
                    </Row>

                    <Row className="align-items-center justify-content-between">
                        <Col>
                            <span className="fs-5 fw-semibold text-dark">${room.pricePerNight}</span> <small>/ night</small>
                        </Col>
                        <Col xs="auto">
                            <Button variant="outline-secondary" size="sm" className="fw-semibold">
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