import { Container, Row, Col, Button, Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "../page_css/Aboutus.css"

const NewsEvents = () => {
    return (
        <>
            <Container className="my-5 page-content">
                <Row className="align-items-center gy-4">
                    <Col xs={12} md={6}>
                        <div style={{ height: '100%', minHeight: '200px' }}>
                            <Image src="https://watermark.lovepik.com/photo/20211123/large/lovepik-hotel-lobby-picture_500786361.jpg" alt="Hotel Exterior" fluid style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className="fw-bold mb-3">About Us</h1>
                        <p className="text-muted">
                            Welcome to <strong>Hotel Taj</strong>, where timeless elegance meets modern luxury. Nestled in the heart of premier travel destinations, our hotel is dedicated to offering an unforgettable experience to each guest. From the moment you arrive, you'll be surrounded by warm hospitality, world-class service, and a serene environment designed to help you relax and rejuvenate.
                        </p>
                        <p className="text-muted">
                            At Hotel Taj, we believe in creating moments that matter. Whether you're traveling for leisure, business, or a special occasion, our beautifully appointed rooms, fine dining options, and exceptional amenities are designed to exceed your expectations. Our team of passionate professionals is committed to ensuring your stay is not only comfortable but also memorable.
                        </p>
                        <p className="text-muted">
                            With a rich legacy of excellence, Hotel Taj continues to be the preferred choice of discerning travelers from around the globe. Discover a perfect blend of traditional charm and contemporary comfort — discover the art of refined hospitality.
                        </p>
                        <p className="text-muted">
                            Each of our properties is a unique reflection of its location, offering an authentic experience that captures the essence of the destination. From iconic city skylines to tranquil beachfronts and scenic hilltops, Hotel Taj offers an unparalleled escape, no matter where your journey takes you.
                        </p>
                        <p className="text-muted">
                            Our services extend beyond luxurious accommodations. Guests can indulge in our full-service spa, enjoy curated wellness programs, take part in cultural experiences, or conduct business in our state-of-the-art meeting spaces. Gourmet restaurants led by acclaimed chefs serve everything from regional specialties to international cuisine, all prepared with the finest ingredients and utmost care.
                        </p>
                    </Col>
                </Row>
            </Container>

            <div className="py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-dark font1">Our Team</h2>
                    </div>
                    <Row className="gy-4">
                        <Col xs={12} sm={6} lg={3}>
                            <div className="text-center p-3 border rounded shadow-sm bg-white h-100">
                                <Image
                                    src="https://spotlisting.itech-theme.com/user/assets/images/team/1.jpg"
                                    alt="George Sutton"
                                    fluid
                                    rounded
                                    className="effects1 mb-3"
                                    style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                                />
                                <h5 className="fw-semibold mb-1">Pal Soni</h5>
                                <p className="text-muted mb-2">Waiter</p>
                                <div>
                                    <a href="https://www.facebook.com/" className="text-primary me-3"><FaFacebook /></a>
                                    <a href="https://www.instagram.com/" className="text-danger me-3"><FaInstagram /></a>
                                    <a href="https://x.com/" className="text-info me-3"><FaTwitter /></a>
                                    <a href="https://www.linkedin.com/" className="text-primary me-3"><FaLinkedin /></a>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} lg={3}>
                            <div className="text-center p-3 border rounded shadow-sm bg-white h-100">
                                <Image
                                    src="https://media.istockphoto.com/id/1401557224/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_r6SmNYFG-x-2OFIjQA8hGu7e7QHBL0m6bR8RgsmMYY="
                                    alt="Amber Hayes"
                                    fluid
                                    rounded
                                    className="mb-3 effects1"
                                    style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                                />
                                <h5 className="fw-semibold mb-1">Ticha Soni</h5>
                                <p className="text-muted mb-2 ">Guest Experience Manager</p>
                                <div>
                                   <a href="https://www.facebook.com/" className="text-primary me-3"><FaFacebook /></a>
                                    <a href="https://www.instagram.com/" className="text-danger me-3"><FaInstagram /></a>
                                    <a href="https://x.com/" className="text-info me-3"><FaTwitter /></a>
                                    <a href="https://www.linkedin.com/" className="text-primary me-3"><FaLinkedin /></a>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} lg={3}>
                            <div className="text-center p-3 border rounded shadow-sm bg-white h-100">
                                <Image
                                    src="https://media.istockphoto.com/id/1354035357/photo/successful-caucasian-smiling-man-shop-assistant-receptionist-in-formal-attire-writing-while.jpg?s=612x612&w=0&k=20&c=45KD_PAjLSKxywaNQSujjchhsnpRWVilKOTY-yan4KQ="
                                    alt="Rebecca Arana"
                                    fluid
                                    rounded
                                    className="mb-3 effects1"
                                    style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                                />
                                <h5 className="fw-semibold mb-1">Ravi Arana</h5>
                                <p className="text-muted mb-2">Hotel Manager</p>
                                <div>
                                   <a href="https://www.facebook.com/" className="text-primary me-3"><FaFacebook /></a>
                                    <a href="https://www.instagram.com/" className="text-danger me-3"><FaInstagram /></a>
                                    <a href="https://x.com/" className="text-info me-3"><FaTwitter /></a>
                                    <a href="https://www.linkedin.com/" className="text-primary me-3"><FaLinkedin /></a>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} lg={3}>
                            <div className="text-center p-3 border rounded shadow-sm bg-white h-100">
                                <Image
                                    src="https://spotlisting.itech-theme.com/user/assets/images/team/2.jpg"
                                    alt="Mary Hamilton"
                                    fluid
                                    rounded
                                    className="mb-3 effects1"
                                    style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                                />
                                <h5 className="fw-semibold mb-1">Chesty Rosi</h5>
                                <p className="text-muted mb-2">Receptionist</p>
                                <div>
                                    <a href="https://www.facebook.com/" className="text-primary me-3"><FaFacebook /></a>
                                    <a href="https://www.instagram.com/" className="text-danger me-3"><FaInstagram /></a>
                                    <a href="https://x.com/" className="text-info me-3"><FaTwitter /></a>
                                    <a href="https://www.linkedin.com/" className="text-primary me-3"><FaLinkedin /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* <div className="bg-white py-5">
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
            </div> */}


        </>
    );
};

export default NewsEvents;
