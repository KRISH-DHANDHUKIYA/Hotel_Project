import { Container, Row, Col, Image } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className="page-content1">
            <Container>
                <Row className="align-items-center mb-5">
                    <Col lg={5}>
                        <Image src="https://mjproductsco.com/wp-content/uploads/2023/08/iStock-1364577495_reduced.jpg" alt="Locker Room" fluid rounded />
                    </Col>
                    <Col lg={7}>
                        <h6 className="text-primary">Locker Room</h6>
                        <h3 className="fw-bold mt-2">Efficitur sit amet Duis mollis nibh vitae libero</h3>
                        <p className="text-muted">
                            Our locker room offers secure and clean storage for all guests. Enjoy peace of mind while enjoying our other facilities.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5 flex-lg-row-reverse">
                    <Col lg={5}>
                        <Image src="https://s0.rbk.ru/v6_top_pics/media/img/9/39/756808723403399.jpg" alt="Restaurant" fluid rounded />
                    </Col>
                    <Col lg={7}>
                        <h6 className="text-primary">Restaurant</h6>
                        <h3 className="fw-bold mt-2">Curabitur scelerisque lacus ac nisl bibendum tristique</h3>
                        <p className="text-muted">
                            Dine in luxury with our blend of local and international cuisine in an elegant setting.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col lg={5}>
                        <Image src="https://images.unsplash.com/photo-1616363088386-31c4a8414858" alt="Car Parking Area" fluid rounded />
                    </Col>
                    <Col lg={7}>
                        <h6 className="text-primary">Car Parking</h6>
                        <h3 className="fw-bold mt-2">Malesuada nisi nec urna imperdiet posuere</h3>
                        <p className="text-muted">
                            Secure, spacious parking available 24/7 for guests’ convenience near hotel entry points.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5 flex-lg-row-reverse">
                    <Col lg={5}>
                        <Image src="https://architizer-prod.imgix.net/media/mediadata/uploads/1554276184209BJK10.jpg" alt="Gym Center" fluid rounded />
                    </Col>
                    <Col lg={7}>
                        <h6 className="text-primary">Gym Center</h6>
                        <h3 className="fw-bold mt-2">Vestibulum sem mauris ultricies consectetur</h3>
                        <p className="text-muted">
                            Fully-equipped gym with modern machines, cardio gear, and free weights for all levels.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col lg={5}>
                        <Image src="https://3.bp.blogspot.com/-hqp-nmJVzH0/WmhTL53kQtI/AAAAAAAAAAM/nrb0Ni-W_gkUmSDxS4x_7gXiBF568QxEACLcBGAs/s1600/Swimming%2BPool%2BConstruction%2BAdelaide.jpg" alt="Swimming Pool" fluid rounded />
                    </Col>
                    <Col lg={7}>
                        <h6 className="text-primary">Swimming Pool</h6>
                        <h3 className="fw-bold mt-2">Vestibulum ac nunc acinia ante est nec metus</h3>
                        <p className="text-muted">
                            Refresh yourself in our clean and modern swimming pool, perfect for leisure or laps.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;