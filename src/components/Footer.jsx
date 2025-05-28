import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="container-fluid text-white p-0 Footer ">
      <footer className="text-center text-lg-start">
        <Container className="p-4 pb-0">
          <section>
            <Row className="py-5">
              <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold fs-3 font1">💀 Hotel Taj</h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum fugiat odit
                  alias dicta consequatur harum labore vel! the riodi alll in the eyes thr qerr ywt not will
                  avialbale excepturi expedita, voluptas eligendi.
                </p>
                <div className='py-2'>
                  <Button variant="primary" className="btn-floating m-1" target='blank' href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></Button>
                  <Button variant="primary" className="btn-floating m-1" target='blank' href="https://x.com/"><i className="fab fa-twitter" /></Button>
                  <Button variant="primary" className="btn-floating m-1" target='blank' href="https://www.google.com/"><i className="fab fa-google" /></Button>
                  <Button variant="primary" className="btn-floating m-1" target='blank' href="https://www.instagram.com/"><i className="fab fa-instagram" /></Button>
                  <Button variant="primary" className="btn-floating m-1" target='blank' href="https://github.com/"><i className="fab fa-github" /></Button>
                </div>
              </Col>

              <hr className="w-100 clearfix d-md-none m-4" />

              <Col md={4} lg={3} xl={3} className="mx-auto mt-3 ">
                <h6 className="fw-bold mb-4 fs-5 font2 ">Contact Details</h6>
                <p><i className="fa-solid fa-location-dot me-2 " /> UG-1, 1st Floor, V3 Corner, Honey Park Rd, Adajan, Surat - 395009</p>
                <p><i className="fa-solid fa-envelope me-2" /> info@easyskill.in</p>
                <p><i className="fas fa-phone me-2" /> +91 908 154 5252</p>
              </Col>

              <hr className="w-100 clearfix d-md-none m-4" />

              <Col md={2} lg={2} xl={2} className="mx-auto mt-3">
                <h6 className="mb-4 fw-bold fs-5 font2">Quick Links</h6>
                <p className="text-white" >Home</p>
                <p className="text-white">About Us</p>
                <p className="text-white">Rooms</p>
                <p className="text-white">Gallery</p>
                <p className="text-white">Contact Us</p>
              </Col>
            </Row>
          </section>
        </Container>

        <hr className="w-100 clearfix d-md-none " />

        <div className="text-center p-4 w-100" >
          © 2025 Copyright :<span className='fw-bold fs-6' > Hoteltaj.com </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;