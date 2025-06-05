import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const Signup = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        number: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>Signup-Up</Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="w-100 text-center">Signup-Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="fname" placeholder="Enter the First Name" value={formData.fname} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lname" placeholder="Enter the Last Name" value={formData.lname} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" name="number" placeholder="Enter the Number" value={formData.number} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter the Email" value={formData.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter the Password" value={formData.password} onChange={handleChange} />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="primary" type="submit">Signup Up</Button>
                        </div>
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