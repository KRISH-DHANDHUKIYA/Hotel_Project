import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { roomsDummyData } from "../assets/assets";
import { HotelFeaturesIcons } from "../assets/assets";
import { roomInfoItems } from "../assets/assets";
import { assets } from '../assets/assets';
import "../page_css/Roomdetails1.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    checkInDate: yup.date().required("Please select a check-in date").typeError("Invalid date"),
    checkOutDate: yup.date().required("Please select a check-out date").min(yup.ref('checkInDate'), "Check-out date cannot be before check-in date").typeError("Invalid date"),
    guests: yup.number().required("Please select number of guests").min(1, "Minimum 1 guest").max(6, "Maximum 6 guests").typeError("Guests must be a number"),
});

const RoomDetails = () => {
    const { id } = useParams();

    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id);
        if (room) {
            setRoom(room);
            setMainImage(room.images[0]);
        }
    }, [id]);

    if (!room) return null;

    const initialValues = { checkInDate: "", checkOutDate: "", guests: "" };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log("Submitted:", values);
        setSubmitting(false);
        resetForm();
    };

    return (
        <>
            <div className="details1 px-3 px-md-5 px-lg-6">
                <div className="d-flex flex-column align-items-center gap-2 flex-md-row align-items-md-center">
                    <h1 className="font1 mb-0 fs-md-1" style={{ fontSize: '1.875rem' }}>
                        {room.hotel.name} <span className="fw-normal small">({room.roomType})</span>
                    </h1>
                    <p className="small text-white bg-warning rounded-pill py-1 px-3">
                        Your Stay, 20% Cheaper!
                    </p>
                </div>

                <div className="d-flex align-items-center gap-1 mt-2">
                    <img src={assets.starfill} width={16} height={16} alt="star" />
                    <img src={assets.starfill} width={16} height={16} alt="star" />
                    <img src={assets.starfill} width={16} height={16} alt="star" />
                    <img src={assets.starfill} width={16} height={16} alt="star" />
                    <img src={assets.staroutline} width={16} height={16} alt="star" />
                    <p className="ms-2 mb-0">200+ Reviews</p>
                </div>

                <div className="d-flex align-items-center gap-1 mt-2 text-secondary">
                    <img src={assets.location333} width={16} height={16} alt="location" />
                    <span>{room.hotel.address}</span>
                </div>

                <div className="d-flex flex-column flex-lg-row mt-3 gap-3">
                    <div className="w-100 w-lg-50">
                        <img src={mainImage} className="w-100 rounded shadow img-fluid" style={{ objectFit: 'cover' }} alt="Main room" />
                    </div>
                    <div
                        className="gap-2 w-100 w-lg-50" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                        {room.images.length > 1 &&
                            room.images.map((image, index) => (
                                <img onClick={() => setMainImage(image)} key={index} src={image} alt={`Room ${index + 1}`} style={{ objectFit: 'cover', cursor: "pointer" }} className={`w-100 rounded shadow ${mainImage === image ? 'border border-3 border-warning' : ''}`} />
                            ))}
                    </div>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-md-between mt-4">
                    <div className="d-flex flex-column">
                        <h1 className="font1 fw-normal" style={{ fontSize: '1.75rem' }}>
                            Experience Luxury Like Never Before
                        </h1>
                        <div className="d-flex flex-wrap align-items-center mt-3 mb-4 gap-3">
                            {room.amenities.map((item, index) => (
                                <div key={index} className="d-flex align-items-center px-3 py-2 rounded bg-light" style={{ gap: '0.5rem' }}>
                                    <img src={HotelFeaturesIcons[item]} alt={item} style={{ width: '1.25rem', height: '1.25rem' }} />
                                    <p className="small mb-0">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="fw-medium fs-3">Price : ${room.pricePerNight} / Night</p>
                </div>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
                        <Form noValidate onSubmit={handleSubmit} className="bg-white p-3 rounded mx-auto mt-4 shadow" style={{ maxWidth: "72rem" }}>
                            <Row className="align-items-center gx-3 gy-3">
                                <Col xs={12} md={4}>
                                    <Form.Group controlId="checkInDate" className="d-flex flex-column">
                                        <Form.Label className="fw-medium">Check-In</Form.Label>
                                        <Form.Control type="date" name="checkInDate" value={values.checkInDate} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.checkInDate && !!errors.checkInDate} className="mt-2" />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.checkInDate}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md="auto" className="d-none d-md-flex align-items-center" />

                                <Col xs={12} md={4}>
                                    <Form.Group controlId="checkOutDate" className="d-flex flex-column">
                                        <Form.Label className="fw-medium">Check-Out</Form.Label>
                                        <Form.Control type="date" name="checkOutDate" value={values.checkOutDate} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.checkOutDate && !!errors.checkOutDate} className="mt-2" />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.checkOutDate}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md="auto" className="d-none d-md-flex align-items-center" />

                                <Col xs={12} md={3}>
                                    <Form.Group controlId="guests" className="d-flex flex-column">
                                        <Form.Label className="fw-medium">Guests</Form.Label>
                                        <Form.Select name="guests" value={values.guests} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.guests && !!errors.guests} className="mt-2">
                                            <option value="">Select guests</option>
                                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                                <option key={num} value={num}>{num}</option>
                                            ))}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.guests}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md="auto">
                                    <Button type="submit" disabled={isSubmitting} className="w-100 w-md-auto mt-3 mt-md-0 px-md-5 py-3" style={{ backgroundColor: "#0d6efd", border: "none" }}>
                                        Check Availability
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>

                <div style={{ marginTop: '6.25rem' }} className="d-flex flex-column gap-3">
                    {roomInfoItems.map((spec, index) => (
                        <div key={index} className="d-flex align-items-start gap-2">
                            <img src={spec.icon} alt={spec.title} style={{ width: '26px', height: '26px' }} />
                            <div>
                                <p className="mb-1">{spec.title}</p>
                                <p className="text-secondary mb-0">{spec.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="border-top border-bottom border-secondary d-flex flex-column justify-content-center align-items-center text-secondary text-center px-3 py-4 Guests">
                    <p>
                        Guests will be allocated on the ground floor according to availability. You get a comfortable two bedroom apartment that has a true city feeling. The price quoted is for two guests. At the guest slot, please mark the number of guests to get the exact price for groups. The guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
                    </p>
                </div>
            </div>
        </>
    );
};

export default RoomDetails;