import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../page_css/Home.css'
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Home1 = () => {

    const [formData, setFormData] = useState({
        destination: "",
        arrivalDate: "",
        departureDate: "",
        guests: "",
    });

    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        else {
            console.log("Form Submitted:", formData);
        }
        setValidated(true);
    };

    return (
        <>
            <OwlCarousel className="owl-theme" nav={false} dots={false} responsiveClass={true} items={1} autoplay loop margin={0} autoplayTimeout={3000} responsive={{ 0: { items: 1 }, 600: { items: 1, }, 1000: { items: 1, }, }}>
                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://velikorodnov.com/html/milenia/images/slide-01.jpg" alt="Slide 1" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className=" font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">Redefining the Art of Luxury</h4>
                            <button className="text-uppercase btn1">Discover More</button>
                        </div>

                    </div>
                </div>

                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://i.artfile.me/wallpaper/03-10-2022/1920x1080/interer-bassejny--otkrytye-ploschadki-ot-1623636.jpg" alt="Slide 2" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className=" font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">A Sanctuary for Dreams</h4>
                            <button className="text-uppercase btn1">Discover More</button>
                        </div>

                    </div>
                </div>

                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://wallup.net/wp-content/uploads/2019/09/758553-interior-salon-disea.jpg" alt="Slide 3" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className=" font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">Capture the spirit of timeless</h4>
                            <button className="text-uppercase btn1">Discover More</button>
                        </div>

                    </div>
                </div>
            </OwlCarousel>

            <section className="py-5 my-5" style={{ backgroundColor: "#faf5ef" }}>
                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="gy-4 gx-3">
                            <Col xs={12} sm={6} md={3}>
                                <Form.Group controlId="destination">
                                    <Form.Label className="fw-bold">Destination</Form.Label>
                                    <Form.Select value={formData.destination} onChange={handleChange} required>
                                        <option value="">Open this select menu</option>
                                        <option value="Dubai">Dubai</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="New York">New York</option>
                                        <option value="London">London</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Please select a destination.</Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col xs={12} sm={6} md={3}>
                                <Form.Group controlId="arrivalDate">
                                    <Form.Label className="fw-bold">Arrival Date</Form.Label>
                                    <Form.Control type="date" value={formData.arrivalDate} onChange={handleChange} required />
                                    <Form.Control.Feedback type="invalid">Please choose an arrival date.</Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col xs={12} sm={6} md={3}>
                                <Form.Group controlId="departureDate">
                                    <Form.Label className="fw-bold">Departure Date</Form.Label>
                                    <Form.Control type="date" value={formData.departureDate} onChange={handleChange} required />
                                    <Form.Control.Feedback type="invalid">Please choose a departure date.</Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col xs={12} sm={6} md={2}>
                                <Form.Group controlId="guests">
                                    <Form.Label className="fw-bold">Guests</Form.Label>
                                    <Form.Select value={formData.guests} onChange={handleChange} required>
                                        <option value="">Select</option>
                                        {[1, 2, 3, 4, 5, 6].map((num) => (
                                            <option key={num} value={num}>
                                                {num}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Please select number of guests.</Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col xs={12} sm={6} md={1} className="d-grid align-self-end">
                                <Button type="submit" style={{ backgroundColor: "#c5915e", border: "none" }} className="fw-bold">
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </section>
        </>
    );
};

export default Home1;