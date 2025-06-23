import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid text-white p-0 Footer bg-dark">
      <footer className="text-center text-lg-start">
        <Container className="p-4 pb-0">
          <section>
            <Row className="py-5 gy-4">
              <Col xs={12} md={6} lg={4} className="text-center text-lg-start">
                <div className="d-flex justify-content-center justify-content-lg-start 
                 align-items-center mb-3">
                  <Image src="https://logodix.com/logo/92368.png" roundedCircle
                    className="logo1 me-2" />
                  <h6 className="text-uppercase mb-0 font-weight-bold fs-3 font1">Hotel Taj</h6>
                </div>
                <p className="fontt">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat odit alias dicta consequatur harum labore.
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start  
                flex-wrap gap-2 my-3">
                  <Button variant="primary" className="btn-floating" target="_blank" href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </Button>
                  <Button variant="primary" className="btn-floating" target="_blank" href="https://x.com/">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button variant="primary" className="btn-floating" target="_blank" href="https://www.google.com/">
                    <i className="fab fa-google" />
                  </Button>
                  <Button variant="primary" className="btn-floating" target="_blank" href="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </Button>
                  <Button variant="primary" className="btn-floating" target="_blank" href="https://www.youtube.com/">
                    <i className="fab fa-youtube" />
                  </Button>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={4} className="text-center text-lg-start">
                <h6 className="font1 my-3 fs-5">Contact Details</h6>
                <p className="fontt"><i className="fa-solid fa-location-dot me-2" /> UG-1, V3 Corner, Adajan, Surat</p>
                <p className="fontt"><i className="fa-solid fa-envelope me-2" /> info@easyskill.in</p>
                <p className="fontt"><i className="fas fa-phone me-2" /> +91 908 154 5252</p>
              </Col>

              <Col xs={12} sm={6} lg={4} className="text-center text-lg-start">
                <h6 className="my-3 fs-5 font1">Quick Links</h6>
                <Link to="/" className="text-white text-decoration-none d-block mb-2 fontt">Home</Link>
                <Link to="/aboutus" className="text-white text-decoration-none d-block mb-2 fontt">About Us</Link>
                <Link to="/room" className="text-white text-decoration-none d-block mb-2 fontt">Room</Link>
                <Link to="/facility" className="text-white text-decoration-none d-block mb-2 fontt">Facility</Link>
              </Col>
            </Row>
          </section>
        </Container>

        <Container className="px-4">
          <hr className="text-white opacity-50 mx-auto" style={{ maxWidth: '1140px' }} />
        </Container>

        <div className="text-center p-3 mt-2 text-white small fontt">
          © 2025 Copyright
          <span className="fw-bold">
            <Link to="/" className="text-white text-decoration-none fontm"> Hoteltaj.com</Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
