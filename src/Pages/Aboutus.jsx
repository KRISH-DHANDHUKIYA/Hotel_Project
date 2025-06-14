import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../page_css/Aboutus.css"

const NewsEvents = () => {
    return (
        <>
            <div className="bg-white py-5">
                <Container className="my-5">
                    <div className="text-center mb-4">
                        <small className="d-block text-uppercase text-secondary mb-2">
                            Luxury experience
                        </small>
                        <h2 className="fw-bold">News &amp; Events</h2>
                    </div>

                    <Row className="justify-content-center">
                        <Col xl={4} lg={6} className="mb-4">
                            <Link to="/news-post" className="text-decoration-none text-dark">
                                <div className="news-card hover-effect-1">
                                    <figure>
                                        <img src="https://themes.getmotopress.com/ciestra/wp-content/uploads/sites/21/2018/08/surf_lesson.jpg" alt="blog1" className="img-fluid w-100" />
                                    </figure>
                                    <div className="p-3">
                                        <small className="text-muted d-block">Travel</small>
                                        <h5 className="fw-bold mt-2">The vacation and travel Guide for experts in 2022</h5>
                                        <em className="text-primary d-block mt-2">Read more</em>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl={4} lg={6} className="mb-4">
                            <Link to="/news-post" className="text-decoration-none text-dark">
                                <div className="news-card hover-effect-2">
                                    <figure>
                                        <img src="https://themes.getmotopress.com/ciestra/wp-content/uploads/sites/21/2018/08/slide_01.jpg" alt="blog3" className="img-fluid w-100" />
                                    </figure>
                                    <div className="p-3">
                                        <small className="text-muted d-block">Event</small>
                                        <h5 className="fw-bold mt-2">Yayoi Kusama: Infinity Mirror Rooms at Tate Modern</h5>
                                        <em className="text-primary d-block mt-2">Read more</em>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl={4} lg={6} className="mb-4">
                            <Link to="/news-post" className="text-decoration-none text-dark">
                                <div className="news-card hover-effect-3">
                                    <figure>
                                        <img src="https://themes.getmotopress.com/ciestra/wp-content/uploads/sites/21/2018/08/about.jpg" alt="blog2" className="img-fluid w-100" />
                                    </figure>
                                    <div className="p-3">
                                        <small className="text-muted d-block">Restaurant</small>
                                        <h5 className="fw-bold mt-2">Best Local Restaurant in 2022</h5>
                                        <em className="text-primary d-block mt-2">Read more</em>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>

                    <div className="text-end mt-4">
                        <Link to="/news-1">
                            <Button variant="outline-primary">View all News</Button>
                        </Link>
                    </div>

                </Container>
            </div>

           
        </>
    );
};

export default NewsEvents;
