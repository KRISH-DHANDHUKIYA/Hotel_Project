import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { assets, userBookingsDummyData } from "../assets/assets";
import { useState } from "react";

const MyBooking = () => {

    const [bookings, setBookings] = useState(userBookingsDummyData);

    return (
        <div className="pt-5 pb-5" style={{ backgroundColor: "#f9f9f9" }}>
            <Container fluid="lg" className="px-3 px-md-4 px-lg-5">
                <div className="mb-4">
                    <h1 className="fw-bold font1">My Bookings</h1>
                    <p className="fs-6 mt-2 text-secondary fontt" style={{ maxWidth: "720px" }}>
                        Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks.
                    </p>
                </div>

                {/* Table Headers for md and up */}
                <Row className="border-bottom border-secondary-subtle py-3 fw-medium d-none d-md-flex">
                    <Col md={6} className="fontt">Hotels</Col>
                    <Col md={4} className="fontt">Date & Timings</Col>
                    <Col md={2} className="fontt">Payment</Col>
                </Row>

                {bookings.map((booking) => (
                    <Row key={booking._id} className="py-4 border-bottom align-items-start">
                        {/* Hotel Info */}
                        <Col xs={12} md={6} className="d-flex flex-column flex-md-row mb-3 mb-md-0">
                            <Image src={booking.room.images[0]} alt="hotel_images" rounded className="me-md-3 mb-3 mb-md-0"
                                style={{ width: "120px", height: "90px", objectFit: "cover", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }} />
                            <div>
                                <p className="fw-bold mb-1 fontt">{booking.hotel.name}
                                    <span className="text-muted ms-1 fontt">({booking.room.roomType})</span>
                                </p>
                                <div className="text-muted small">
                                    <div className="d-flex align-items-center mb-1">
                                        <img src={assets.location333} alt="location_icon" className="me-2" width="16" height="16" />
                                        <span className="fontt">{booking.hotel.address}</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <img src={assets.guestsicons} alt="guests_icon" className="me-2" width="16" height="16" />
                                        <span className="fontt">Guests: {booking.guests}</span>
                                    </div>
                                </div>
                                <p className="mt-2 mb-0 fw-semibold text-dark fontt">Total: ${booking.totalPrice}</p>
                            </div>
                        </Col>

                        {/* Date & Timings */}
                        <Col xs={12} md={4} className="mb-3 mb-md-0">
                            <div className="d-flex flex-wrap gap-4">
                                <div>
                                    <p className="mb-1 fw-semibold fontt">Check-In:</p>
                                    <p className="text-muted small fontt">{new Date(booking.checkInDate).toDateString()}</p>
                                </div>
                                <div>
                                    <p className="mb-1 fw-semibold fontt">Check-Out:</p>
                                    <p className="text-muted small fontt">{new Date(booking.checkOutDate).toDateString()}</p>
                                </div>
                            </div>
                        </Col>

                        {/* Payment Status */}
                        <Col xs={12} md={2}>
                            <div className="d-flex flex-md-column align-items-start align-items-md-center justify-content-center pt-md-3 gap-2 gap-md-0">
                                <div className="d-flex align-items-center">
                                    <div style={{
                                        width: "12px", height: "12px", borderRadius: "50%", backgroundColor: booking.isPaid ? "#28a745" : "#dc3545", marginRight: "0.5rem"
                                    }}></div>
                                    <p className={`fontt mb-0 ${booking.isPaid ? "text-success" : "text-danger"} `}>
                                        {booking.isPaid ? "Paid" : "Unpaid"}
                                    </p>
                                </div>
                                {!booking.isPaid && (
                                    <Button variant="outline-secondary" size="sm" className="rounded-pill fontt" style={{ fontSize: "0.75rem" }}>
                                        Pay Now
                                    </Button>
                                )}
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default MyBooking;