import { Container, Row, Col, Image } from 'react-bootstrap';
import "../page_css/Facilityp.css";

const Facility = () => {
    return (
        <div className="mt-5">
            <Container>
                <Row className="align-items-center mb-5">
                    <Col lg={5}>
                        <div className="hover11">
                            <figure>
                                <Image src="https://mjproductsco.com/wp-content/uploads/2023/08/iStock-1364577495_reduced.jpg" alt="Locker Room" fluid rounded />
                            </figure>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <h6 className="text-primary fontt">Locker Room</h6>
                        <h3 className="fw-bold mt-2 fontt">Secure & Convenient Storage</h3>
                        <p className="text-muted fontt">
                            Our locker room provides guests with secure, spacious, and hygienic storage spaces. Whether you're heading to the gym, pool, or out for a day of exploration, your belongings are kept safe with 24/7 access and surveillance. Peace of mind comes standard.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5 flex-lg-row-reverse">
                    <Col lg={5}>
                        <div className="hover11">
                            <figure>
                                <Image src="https://s0.rbk.ru/v6_top_pics/media/img/9/39/756808723403399.jpg" alt="Restaurant" fluid rounded />
                            </figure>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <h6 className="text-primary fontt">Restaurant</h6>
                        <h3 className="fw-bold mt-2 fontt">Elegant Dining with Global Flavors</h3>
                        <p className="text-muted fontt">
                            Indulge in a refined dining experience at our in-house restaurant, where local flavors meet international cuisine. From gourmet breakfasts to romantic dinners, enjoy expertly crafted dishes in an ambiance that blends comfort with elegance. Vegetarian and dietary-specific options available.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col lg={5}>
                        <div className="hover11">
                            <figure>
                                <Image src="https://images.unsplash.com/photo-1616363088386-31c4a8414858" alt="Car Parking Area" fluid rounded />
                            </figure>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <h6 className="text-primary fontt">Car Parking</h6>
                        <h3 className="fw-bold mt-2 fontt">Safe, Accessible & Always Available</h3>
                        <p className="text-muted fontt">
                            We offer ample on-site parking with round-the-clock security and easy access to hotel entrances. Whether you're staying overnight or visiting for an event, our well-lit and clearly marked parking area ensures convenience and safety for you and your vehicle.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5 flex-lg-row-reverse">
                    <Col lg={5}>
                        <div className="hover11">
                            <figure>
                                <Image src="https://architizer-prod.imgix.net/media/mediadata/uploads/1554276184209BJK10.jpg" alt="Gym Center" fluid rounded />
                            </figure>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <h6 className="text-primary fontt">Gym Center</h6>
                        <h3 className="fw-bold mt-2 fontt">Fitness at Your Fingertips</h3>
                        <p className="text-muted fontt">
                            Stay active during your stay with access to our state-of-the-art fitness center. Equipped with the latest cardio machines, strength-training equipment, and free weights, our gym caters to both beginners and seasoned fitness enthusiasts. Towels and water provided.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col lg={5}>
                        <div className="hover11">
                            <figure>
                                <Image src="https://3.bp.blogspot.com/-hqp-nmJVzH0/WmhTL53kQtI/AAAAAAAAAAM/nrb0Ni-W_gkUmSDxS4x_7gXiBF568QxEACLcBGAs/s1600/Swimming%2BPool%2BConstruction%2BAdelaide.jpg" alt="Swimming Pool" fluid rounded />
                            </figure>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <h6 className="text-primary fontt">Swimming Pool</h6>
                        <h3 className="fw-bold mt-2 fontt">Relax, Refresh, Recharge</h3>
                        <p className="text-muted fontt">
                            Take a dip in our pristine outdoor swimming pool—perfect for both casual swims and dedicated laps. Surrounded by a peaceful lounging area and poolside service, it's a great place to unwind under the sun or relax in the evening glow.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Facility;
