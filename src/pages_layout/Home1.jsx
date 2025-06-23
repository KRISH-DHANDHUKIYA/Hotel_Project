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
        e.preventDefault()
        const form = e.currentTarget;

        setValidated(true);

        if (form.checkValidity() === false) {
            e.stopPropagation();
            return
        }
        console.log(formData);
    };

    return (
        <>
            <OwlCarousel className="owl-theme" nav={false} dots={false} responsiveClass={true} items={1} autoplay loop margin={0} autoplayTimeout={3000} responsive={{ 0: { items: 1 }, 600: { items: 1, }, 1000: { items: 1, }, }}>
                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://velikorodnov.com/html/milenia/images/slide-01.jpg" alt="Slide 1" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className="font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">Redefining the Art of Luxury</h4>
                            <button
                                className="text-uppercase btn1"
                                onClick={() => {
                                    const section3 = document.getElementById("features333");
                                    section3?.scrollIntoView({ behavior: "smooth" });
                                }}>
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="item ">
                    <div className="slide-wrapper">
                        <img src="https://i.artfile.me/wallpaper/03-10-2022/1920x1080/interer-bassejny--otkrytye-ploschadki-ot-1623636.jpg" alt="Slide 2" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className=" font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">A Sanctuary for Dreams</h4>
                            <button
                                className="text-uppercase btn1"
                                onClick={() => {
                                    const section3 = document.getElementById("features333");
                                    section3?.scrollIntoView({ behavior: "smooth" });
                                }}>
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="item ">
                    <div className="slide-wrapper">
                        <img src="https://wallup.net/wp-content/uploads/2019/09/758553-interior-salon-disea.jpg" alt="Slide 3" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className=" font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">Capture the spirit of timeless</h4>
                            <button
                                className="text-uppercase btn1"
                                onClick={() => {
                                    const section3 = document.getElementById("features333");
                                    section3?.scrollIntoView({ behavior: "smooth" });
                                }}>
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
            </OwlCarousel>

            <section className="py-5 my-5 bg-dark" >
                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} autoComplete="off">
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


            {/* <section className="py-5 my-5 bg-dark">
                <Container>
                    <div className="d-flex justify-content-center">
                        <Form className="bg-white text-muted rounded px-4 py-4 mt-4 w-100" style={{ maxWidth: '900px' }}>
                            <Row className="gy-3 gx-3 align-items-end">
                                <Col xs={12} md>
                                    <Form.Group controlId="destinationInput">
                                        <Form.Label className="d-flex align-items-center gap-2 mb-1">
                                            <img src={assets.calenderIcon} alt="calendar" style={{ height: '1rem' }} />
                                            Destination
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            list="destinations"
                                            placeholder="Type here"
                                            required
                                        />
                                        <datalist id="destinations">
                                            {cities.map((city, index) => (
                                                <option value={city} key={index} />
                                            ))}
                                        </datalist>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} sm={6} md>
                                    <Form.Group controlId="checkIn">
                                        <Form.Label className="d-flex align-items-center gap-2 mb-1">
                                            <img src={assets.calenderIcon} alt="calendar" style={{ height: '1rem' }} />
                                            Check in
                                        </Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>

                                <Col xs={12} sm={6} md>
                                    <Form.Group controlId="checkOut">
                                        <Form.Label className="d-flex align-items-center gap-2 mb-1">
                                            <img src={assets.calenderIcon} alt="calendar" style={{ height: '1rem' }} />
                                            Check out
                                        </Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>

                                <Col xs={6} md="auto">
                                    <Form.Group controlId="guests">
                                        <Form.Label>Guests</Form.Label>
                                        <Form.Control
                                            type="number"
                                            min={1}
                                            max={4}
                                            placeholder="0"
                                            style={{ maxWidth: '64px' }}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md="auto">
                                    <Button
                                        type="submit"
                                        className="d-flex align-items-center justify-content-center gap-2 bg-dark text-white border-0 w-100 w-md-auto px-4 py-2"
                                    >
                                        <img src={assets.searchIcon} alt="search" style={{ height: '1rem' }} />
                                        <span>Search</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Container>
            </section> */}



        </>
    );
};

export default Home1;