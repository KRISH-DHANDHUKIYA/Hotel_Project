import { useState } from "react";
import { assets } from "../../assets/assets";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddRoom = () => {
    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
    });

    const [inputs, setInputs] = useState({
        roomType: "",
        pricePerNight: 0,
        amenities: {
            "Free WiFi": false,
            "Free Breakfast": false,
            "Room Service": false,
            "Mountain View": false,
            "Pool Access": false,
        },
    });

    return (
        <Container className="my-5">
            <div className="mb-4">
                <h1 className="fw-bold text-start font1">Add Room</h1>
                <p className="fs-6 mt-2 text-secondary text-start fontt" style={{ maxWidth: "720px" }}>
                    Fill the details carefully — accurate room details, pricing, and amenities enhance the user booking experience.
                </p>
            </div>

            <div className="mb-4">
                <h5 className="text-dark mb-3 fontt">Room Images</h5>
                <Row className="g-3">
                    {Object.keys(images).map((key) => (
                        <Col xs={6} sm={4} md={3} key={key}>
                            <Form.Label htmlFor={`roomImage${key}`} className="w-100">
                                <img
                                    src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
                                    alt="upload"
                                    className="img-fluid border rounded "
                                    style={{ cursor: "pointer", height: "160px", objectFit: "cover" }}
                                />
                            </Form.Label>
                            <Form.Control
                                type="file"
                                id={`roomImage${key}`}
                                accept="image/*"
                                onChange={(e) =>
                                    setImages({ ...images, [key]: e.target.files[0] })
                                }
                                hidden
                            />
                        </Col>
                    ))}
                </Row>
            </div>

            <Row className="mb-4">
                <Col xs={12} sm={6} md={4}>
                    <Form.Group controlId="roomType" className="mb-3">
                        <Form.Label className="fw-semibold fontt">Room Type</Form.Label>
                        <Form.Select
                            value={inputs.roomType}
                            className="fontt"
                            onChange={(e) =>
                                setInputs({ ...inputs, roomType: e.target.value })
                            }
                        >
                            <option value="">Select Room Type</option>
                            <option value="Single Bed">Single Bed</option>
                            <option value="Double Bed">Double Bed</option>
                            <option value="Luxury Bed">Luxury Bed</option>
                            <option value="Family Suite">Family Suite</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col xs={12} sm={6} md={4}>
                    <Form.Group controlId="pricePerNight" className="mb-3">
                        <Form.Label className="fontt">
                            Price <span className="small fontt"> / Night</span>
                        </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0"
                            className="fontt"
                            min="0"
                            value={inputs.pricePerNight}
                            onChange={(e) =>
                                setInputs({ ...inputs, pricePerNight: e.target.value })
                            }
                        />
                    </Form.Group>
                </Col>
            </Row>

            <div className="mb-4">
                <Form.Label className="fw-semibold mb-3 fontt">Amenities</Form.Label>
                <div className="gap-3">
                    {Object.keys(inputs.amenities).map((amenity, index) => (
                        <Form.Check
                            key={index}
                            type="checkbox"
                            id={`amenity-${index}`}
                            label={amenity}
                            className="me-3 fontt"
                            checked={inputs.amenities[amenity]}
                            onChange={() =>
                                setInputs({
                                    ...inputs,
                                    amenities: {
                                        ...inputs.amenities,
                                        [amenity]: !inputs.amenities[amenity],
                                    },
                                })
                            }
                        />
                    ))}
                </div>
            </div>

            <Row className="mt-5">
                <Col className="d-flex justify-content-start">
                    <Button variant="primary fontt">
                        Add Room
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AddRoom;
