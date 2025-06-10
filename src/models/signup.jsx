import { useState } from 'react';
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';

const Signup = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        number: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fname.trim()) {
            newErrors.fname = 'First Name is required.';
        }

        if (!formData.lname.trim()) {
            newErrors.lname = 'Last Name is required.';
        }

        if (!formData.number.trim()) {
            newErrors.number = 'Phone Number is required.';
        } else if (!/^\d{10}$/.test(formData.number.trim())) {
            newErrors.number = 'Please enter a valid 10-digit phone number.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required.';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long.';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required.';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {

            console.log('Signup data:', formData);
            handleClose();

            setFormData({
                fname: '',
                lname: '',
                number: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            setErrors({});
        } else {
            console.log('Form validation failed. Please check errors.');
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>Sign-Up</Button>

            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="w-100 text-center">Sign-Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} noValidate>

                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fname"
                                placeholder="Enter your First Name"
                                value={formData.fname}
                                onChange={handleChange}
                                isInvalid={!!errors.fname}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.fname}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lname"
                                placeholder="Enter your Last Name"
                                value={formData.lname}
                                onChange={handleChange}
                                isInvalid={!!errors.lname}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.lname}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                name="number"
                                placeholder="Enter your Phone Number (e.g., 9876543210)"
                                value={formData.number}
                                onChange={handleChange}
                                isInvalid={!!errors.number}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.number}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Create a Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />
                                <Button variant="outline-secondary" onClick={() => setShowPassword(prev => !prev)}>
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    placeholder="Confirm your Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    isInvalid={!!errors.confirmPassword}
                                />
                                <Button variant="outline-secondary" onClick={() => setShowConfirmPassword(prev => !prev)}>
                                    {showConfirmPassword ? 'Hide' : 'Show'}
                                </Button>
                                <Form.Control.Feedback type="invalid">
                                    {errors.confirmPassword}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Button variant="outline-primary" type="submit" className="w-100">
                            Sign Up
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <span>Already have an account?<b>Log In</b></span>

                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Signup;