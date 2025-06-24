import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../page_css/Home.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    destination: yup.string().required("Please select a destination."),
    arrivalDate: yup.date().required("Please choose an arrival date.").typeError("Invalid date"),
    departureDate: yup.date().required("Please choose a departure date.").min(yup.ref("arrivalDate"), "Departure date can’t be before arrival date").typeError("Invalid date"),
    guests: yup.number().required("Please select number of guests.").min(1, "At least 1 guest").max(6, "Maximum 6 guests").typeError("Guests must be a number"),
});

const Home1 = () => {
    const initialValues = {
        destination: "",
        arrivalDate: "",
        departureDate: "",
        guests: "",
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log("Form submitted:", values);
        setSubmitting(false);
        resetForm();
    };

    return (
        <>
            <OwlCarousel className="owl-theme" nav={false} dots={false} responsiveClass={true} items={1} autoplay loop margin={0} autoplayTimeout={3000} responsive={{ 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } }}>
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

            <section className="py-5 my-5 bg-dark">
                <Container>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting, }) => (
                            <Form noValidate onSubmit={handleSubmit} autoComplete="off">
                                <Row className="gy-4 gx-3">
                                    <Col xs={12} sm={6} md={3}>
                                        <Form.Group controlId="destination">
                                            <Form.Label className="fw-bold">Destination</Form.Label>
                                            <Form.Select name="destination" value={values.destination} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.destination && !!errors.destination}>
                                                <option value="">Open this select menu</option>
                                                <option value="Dubai">Dubai</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="New York">New York</option>
                                                <option value="London">London</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.destination}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} sm={6} md={3}>
                                        <Form.Group controlId="arrivalDate">
                                            <Form.Label className="fw-bold">Arrival Date</Form.Label>
                                            <Form.Control type="date" name="arrivalDate" value={values.arrivalDate} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.arrivalDate && !!errors.arrivalDate} />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.arrivalDate}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} sm={6} md={3}>
                                        <Form.Group controlId="departureDate">
                                            <Form.Label className="fw-bold">Departure Date</Form.Label>
                                            <Form.Control type="date" name="departureDate" value={values.departureDate} onChange={handleChange} onBlur={handleBlur}
                                                isInvalid={
                                                    touched.departureDate && !!errors.departureDate
                                                } />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.departureDate}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} sm={6} md={2}>
                                        <Form.Group controlId="guests">
                                            <Form.Label className="fw-bold">Guests</Form.Label>
                                            <Form.Select name="guests" value={values.guests} onChange={handleChange} onBlur={handleBlur}
                                                isInvalid={touched.guests && !!errors.guests}
                                            >
                                                <option value="">Select</option>
                                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                                    <option key={num} value={num}>
                                                        {num}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.guests}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} sm={6} md={1} className="d-grid align-self-end">
                                        <Button type="submit" disabled={isSubmitting} style={{ backgroundColor: "#c5915e", border: "none" }} className="fw-bold">
                                            Search
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </section>
        </>
    );
};

export default Home1;