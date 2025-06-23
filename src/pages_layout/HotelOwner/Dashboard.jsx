import { Container, Row, Col, Card, Table, Badge } from "react-bootstrap";
import { assets, dashboardDummyData } from "../../assets/assets";
import { useState } from "react";

const Dashboard = () => {
    const [DashboardData, setDashboardData] = useState(dashboardDummyData);

    return (
        <Container className="pt-4 px-md-4 px-lg-5">
            <div className="mb-4">
                <h1 className="fw-bold font1">Dashboard</h1>
                <p className="fs-6 mt-2 text-secondary fontt" style={{ maxWidth: "720px" }}>
                    Easily manage your room listings, monitor bookings, and analyze revenue — all from a single dashboard. Get real-time insights to streamline your operations and stay ahead.
                </p>

                <Row className="mt-4 g-4">
                    <Col xs={12} sm={6} md={4}>
                        <Card className="border border-dark bg-light-subtle shadow-sm h-100">
                            <Card.Body className="d-flex align-items-center">
                                <img
                                    src={assets.hotelsolid}
                                    alt="Total Bookings Icon"
                                    className="me-3"
                                    style={{ height: "25px" }}
                                />
                                <div>
                                    <Card.Title className="text-dark fs-5 mb-1 fontt">Total Bookings</Card.Title>
                                    <Card.Text className="text-secondary mb-0 fontt">
                                        {DashboardData.totalBookings}
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4}>
                        <Card className="border border-dark bg-light-subtle shadow-sm h-100">
                            <Card.Body className="d-flex align-items-center">
                                <img
                                    src={assets.dollarsignsolid}
                                    alt="Total Revenue Icon"
                                    className="me-3"
                                    style={{ height: "25px" }}
                                />
                                <div>
                                    <Card.Title className="text-dark fs-5 mb-1 fontt">Total Revenue</Card.Title>
                                    <Card.Text className="text-secondary mb-0 fontt">
                                        ${DashboardData.totalRevenue}
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="mt-5">
                    <h4 className="mb-3 text-dark fontt">Recent Bookings</h4>
                    <div style={{ maxHeight: "320px", overflowY: "auto" }} className="border rounded p-2">
                        <Table responsive hover className="mb-0 align-middle">
                            <thead className="table-light fontt">
                                <tr>
                                    <th className="fontt">User Name</th>
                                    <th className="d-none d-sm-table-cell fontt">Room Type</th>
                                    <th className="text-center fontt">Total Amount</th>
                                    <th className="text-center fontt">Payment Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {DashboardData.bookings.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.user.username}</td>
                                        <td className="d-none d-sm-table-cell fontt">{item.room.roomType}</td>
                                        <td className="text-center fontt">${item.totalPrice}</td>
                                        <td className="text-center fontt">
                                            <Badge
                                                bg={item.isPaid ? "success" : "warning"}
                                                className="px-3 py-2 rounded-pill text-capitalize fontt"
                                            >
                                                {item.isPaid ? "Completed" : "Pending"}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;
