import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { assets, dashboardDummyData } from "../../assets/assets";
import { useState } from "react";

const Dashboard = () => {
    const [DashboardData, setDashboardData] = useState(dashboardDummyData);

    return (
        <Container className="pt-4 px-md-4 px-lg-5">
            <div className="mb-4">
                <h1 className="fw-bold">Dashboard</h1>
                <p className="fs-6 mt-2 text-secondary" style={{ maxWidth: "720px" }}>
                    Easily manage your room listings, monitor bookings, and analyze revenue — all from a single dashboard. Get real-time insights to streamline your operations and stay ahead.
                </p>

                <Row className="mt-4 g-4">
                    {/* Total Bookings */}
                    <Col xs={12} sm={6} md={4}>
                        <Card className="border border-primary bg-light-subtle shadow-sm h-100">
                            <Card.Body className="d-flex align-items-center">
                                <img
                                    src={assets.totalBookingIcon}
                                    alt="Total Bookings Icon"
                                    className="me-3"
                                    style={{ height: "40px" }}
                                />
                                <div>
                                    <Card.Title className="text-primary fs-5 mb-1">Total Bookings</Card.Title>
                                    <Card.Text className="text-secondary mb-0">
                                        {DashboardData.totalBookings}
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Total Revenue */}
                    <Col xs={12} sm={6} md={4}>
                        <Card className="border border-primary bg-light-subtle shadow-sm h-100">
                            <Card.Body className="d-flex align-items-center">
                                <img
                                    src={assets.totalRevenueIcon}
                                    alt="Total Revenue Icon"
                                    className="me-3"
                                    style={{ height: "40px" }}
                                />
                                <div>
                                    <Card.Title className="text-success fs-5 mb-1">Total Revenue</Card.Title>
                                    <Card.Text className="text-secondary mb-0">
                                        ${DashboardData.totalRevenue}
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Recent Bookings */}
                <div className="mt-5">
                    <h4 className="mb-3 text-dark">Recent Bookings</h4>
                    <div style={{ maxHeight: "320px", overflowY: "auto" }} className="border rounded p-2">
                        <Table responsive hover className="mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>User Name</th>
                                    <th>Room Name</th>
                                    <th>Total Amount</th>
                                    <th>Payment Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DashboardData.recentBookings && DashboardData.recentBookings.length > 0 ? (
                                    DashboardData.recentBookings.map((booking, index) => (
                                        <tr key={index}>
                                            <td>{booking.userName}</td>
                                            <td>{booking.roomName}</td>
                                            <td>₹{booking.amount}</td>
                                            <td>
                                                <span
                                                    className={`badge ${booking.isPaid ? "bg-success" : "bg-danger"
                                                        }`}
                                                >
                                                    {booking.isPaid ? "Paid" : "Unpaid"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center text-muted">
                                            No recent bookings found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;
