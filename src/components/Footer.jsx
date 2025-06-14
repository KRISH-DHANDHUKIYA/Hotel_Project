import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

const Footer = () => {
  const [subscribedEmail, setSubscribedEmail] = useState("");

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required.")
  });

  const initialvalue = {
    email: ''
  };

  const handlesubmit = (values, { resetForm }) => {
    console.log("Email object:", values);
    setSubscribedEmail(values.email);
    resetForm();
  };

  return (
    <div className="container-fluid text-white p-0 Footer bg-dark">
      <footer className="text-center text-lg-start">
        <Container className="p-4 pb-0">
          <section>
            <Row className="py-5">

              <Col xs={12} sm={6} md={6} lg={3} className="mt-3" style={{ cursor: "pointer" }}>
                <h6 className="text-uppercase mb-4 font-weight-bold fs-3 font1 d-flex align-items-center justify-content-center justify-content-lg-start">
                  <Image src="https://logodix.com/logo/92368.png" roundedCircle className="logo1 me-2" />
                  Hotel Taj
                </h6>
                <p className="text-center text-lg-start font2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat odit alias dicta consequatur harum labore.
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start flex-wrap py-2">
                  <Button variant="primary" className="btn-floating m-1" target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></Button>
                  <Button variant="primary" className="btn-floating m-1" target="_blank" href="https://x.com/"><i className="fab fa-twitter" /></Button>
                  <Button variant="primary" className="btn-floating m-1" target="_blank" href="https://www.google.com/"><i className="fab fa-google" /></Button>
                  <Button variant="primary" className="btn-floating m-1" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram" /></Button>
                </div>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3} className="mt-3">
                <h6 className="fw-bold mb-4 fs-5 font1 text-center text-lg-start">Contact Details</h6>
                <p className="font2"><i className="fa-solid fa-location-dot me-2 " /> UG-1, V3 Corner, Adajan, Surat</p>
                <p className="font2"><i className="fa-solid fa-envelope me-2 " /> info@easyskill.in</p>
                <p className="font2"><i className="fas fa-phone me-2 " /> +91 908 154 5252</p>
                <p className="font2"><i className="fas fa-phone me-2" /> +91 987 654 3210</p>
              </Col>

              <Col xs={12} sm={6} md={6} lg={2} className="mt-3">
                <h6 className="mb-4 fw-bold fs-5 font1 text-center text-lg-start">Quick Links</h6>
                <Link to="/" className="text-white text-decoration-none d-block mb-2 font2">Home</Link>
                <Link to="/aboutus" className="text-white text-decoration-none d-block mb-2 font2">About Us</Link>
                <Link to="/offers" className="text-white text-decoration-none d-block mb-2 font2">Offers</Link>
                <Link to="/gallery" className="text-white text-decoration-none d-block mb-2 font2">Gallery</Link>
                <Link to="/contactus" className="text-white text-decoration-none d-block mb-2 font2">Contact Us</Link>
              </Col>

              <Col xs={12} sm={6} md={6} lg={4} className="mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold fs-5 font1 text-center text-lg-start">Subscribe</h6>
                <Formik initialValues={initialvalue} validationSchema={validationSchema} onSubmit={handlesubmit}>
                  {() => (
                    <Form className="d-flex flex-column flex-sm-row align-items-start justify-content-center justify-content-lg-start">
                      <div className="w-100 me-sm-2">
                        <Field name="email" type="email" placeholder="Enter your email" className="form-control font2" />
                        <ErrorMessage name="email" component="div" className="text-danger mt-1" style={{ fontSize: '0.875rem' }} />
                      </div>
                      <Button type="submit" className="mt-2 mt-sm-0">Subscribe</Button>
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          </section>
        </Container>

        <hr className="text-white opacity-50" />

        <div className="text-center p-3 mt-2 text-white">
          © 2025 Copyright:
          <span className="fw-bold">
            <Link to="/" className="text-white text-decoration-none">Hoteltaj.com</Link>
          </span>
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;