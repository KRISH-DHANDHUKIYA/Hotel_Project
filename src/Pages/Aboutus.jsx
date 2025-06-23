import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "../page_css/Aboutus.css"

const NewsEvents = () => {
    return (
        <>
            <Container className="my-5">
                <Row className="align-items-center gy-4">
                    <Col xs={12} md={6}>
                        <div style={{ height: '100%', minHeight: '200px' }}>
                            <Image src="https://watermark.lovepik.com/photo/20211123/large/lovepik-hotel-lobby-picture_500786361.jpg" alt="Hotel Exterior" fluid style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className="fw-bold mb-3 font1">About Us</h1>
                        <p className="text-muted fontt">
                            Welcome to <strong>Hotel Taj</strong>, where timeless elegance meets modern luxury. Nestled in the heart of premier travel destinations, our hotel is dedicated to offering an unforgettable experience to each guest. From the moment you arrive, you'll be surrounded by warm hospitality, world-className service, and a serene environment designed to help you relax and rejuvenate.
                        </p>
                        <p className="text-muted fontt">
                            At Hotel Taj, we believe in creating moments that matter. Whether you're traveling for leisure, business, or a special occasion, our beautifully appointed rooms, fine dining options, and exceptional amenities are designed to exceed your expectations. Our team of passionate professionals is committed to ensuring your stay is not only comfortable but also memorable.
                        </p>
                        <p className="text-muted fontt">
                            With a rich legacy of excellence, Hotel Taj continues to be the preferred choice of discerning travelers from around the globe. Discover a perfect blend of traditional charm and contemporary comfort — discover the art of refined hospitality.
                        </p>
                        <p className="text-muted fontt">
                            Each of our properties is a unique reflection of its location, offering an authentic experience that captures the essence of the destination. From iconic city skylines to tranquil beachfronts and scenic hilltops, Hotel Taj offers an unparalleled escape, no matter where your journey takes you.
                        </p>
                        <p className="text-muted fontt">
                            Our services extend beyond luxurious accommodations. Guests can indulge in our full-service spa, enjoy curated wellness programs, take part in cultural experiences, or conduct business in our state-of-the-art meeting spaces. Gourmet restaurants led by acclaimed chefs serve everything from regional specialties to international cuisine, all prepared with the finest ingredients and utmost care.
                        </p>
                    </Col>
                </Row>
            </Container>

            <div className="py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-dark font1">Meet Our Team</h2>
                        <p className="text-muted mb-5 fontt" style={{ width: "600px", margin: "0 auto" }}>
                            Our hotel thrives thanks to the passionate, friendly, and experienced professionals behind the scenes. Get to know the team who ensures your stay is unforgettable.
                        </p>
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
                                <div className="d-flex justify-content-center gap-3 mt-2">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="fa-brands fa-square-facebook fs-4 text-primary"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="fa-brands fa-square-instagram fs-4 text-danger"></i>
                                    </a>
                                    <a href="https://x.com/" target="_blank">
                                        <i className="fa-brands fa-square-x-twitter fs-4 text-dark"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className="fa-brands fa-linkedin fs-4 text-primary"></i>
                                    </a>
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
                                <div className="d-flex justify-content-center gap-3 mt-2">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="fa-brands fa-square-facebook fs-4 text-primary"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="fa-brands fa-square-instagram fs-4 text-danger"></i>
                                    </a>
                                    <a href="https://x.com/" target="_blank">
                                        <i className="fa-brands fa-square-x-twitter fs-4 text-dark"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className="fa-brands fa-linkedin fs-4 text-primary"></i>
                                    </a>
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
                                <div className="d-flex justify-content-center gap-3 mt-2">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="fa-brands fa-square-facebook fs-4 text-primary"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="fa-brands fa-square-instagram fs-4 text-danger"></i>
                                    </a>
                                    <a href="https://x.com/" target="_blank">
                                        <i className="fa-brands fa-square-x-twitter fs-4 text-dark"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className="fa-brands fa-linkedin fs-4 text-primary"></i>
                                    </a>
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
                                <div className="d-flex justify-content-center gap-3 mt-2">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="fa-brands fa-square-facebook fs-4 text-primary"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="fa-brands fa-square-instagram fs-4 text-danger"></i>
                                    </a>
                                    <a href="https://x.com/" target="_blank">
                                        <i className="fa-brands fa-square-x-twitter fs-4 text-dark"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className="fa-brands fa-linkedin fs-4 text-primary"></i>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default NewsEvents;
