import { Container, Row, Col, Image } from "react-bootstrap";

const Home2 = () => {
    return (
        <Container fluid className="py-5 px-3" style={{ backgroundColor: "#f8f8f8" }}>
            <Row className="align-items-center">
                <Col xs={12} lg={6} className="mb-4 mb-lg-0">
                    <h6 className="text-uppercase text1">Welcome To Hotel Taj</h6>
                    <h2 className="mb-3 text2">A New Vision of Luxury</h2>
                    <p className="text3 fw-semibold mb-3">
                        Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.
                    </p>
                    <p className="text-muted mb-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed
                        laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.
                        Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Nam numquam odio hic placeat earum iste, accusamus repellat
                        aperiam saepe sequi blanditiis animi ea ex aliquid quod quaerat culpa doloremque laudantium.
                    </p>
                    <Image src="https://velikorodnov.com/html/milenia/images/sign-1.png" alt="Signature" className="mb-2" fluid style={{ maxWidth: "150px" }} />
                    <div><small className="text-muted">Managing Director</small></div>
                </Col>

                <Col xs={12} sm={10} md={8} lg={6} xl={5} className="mx-auto hover11">
                    <div className="shadow rounded figure">
                        <Image
                            src="https://velikorodnov.com/html/milenia/images/single-gallery-image-1.jpg"
                            alt="Hotel Room"
                            fluid
                        /> 
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home2;
