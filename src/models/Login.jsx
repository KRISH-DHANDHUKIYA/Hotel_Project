import { useState } from 'react';
import { Modal, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

const Login = ({ show, onHide, onCreateAccount, onForgotPassword }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Login data:', formData);
      onHide();
      setFormData({ email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <div className="p-3">
        <Row className="align-items-start align-items-sm-center mb-3">
          <Col xs={12} sm={6}>
            <h5 className="mb-2 mb-sm-0">Login</h5>
          </Col>
          <Col xs={12} sm={6}>
            <div className="d-flex justify-content-sm-end align-items-center gap-2">
              <p className="fs-6 mb-0">
                or{' '}
                <Button
                  variant="link"
                  className="p-0 text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();
                    onCreateAccount && onCreateAccount();
                  }}
                >
                  Create an Account
                </Button>
              </p>
              <Button variant="bg-light" className="btn-close p-0 m-0" aria-label="Close" onClick={onHide}></Button>
            </div>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label className="fw-semibold small">Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter The Email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} required />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2" controlId="loginPassword">
            <Form.Label className="fw-semibold small">Password</Form.Label>
            <InputGroup>
              <Form.Control type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter The password" value={formData.password} onChange={handleChange} isInvalid={!!errors.password} required />
              <Button variant="outline-secondary" onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Check type="checkbox" id="rememberMe" label={<span className="small">Remember me</span>} className="mb-3" />

          <Button variant="danger" type="submit" className="w-100 mb-2">Login</Button>

          <div className="text-center">
            <a href="#" className="small text-primary text-decoration-none" onClick={(e) => {
              e.preventDefault();
              onForgotPassword && onForgotPassword();
            }}>
              Forgot your password?
            </a>
          </div>
        </Form>
      </div>
    </Modal>
  );
};
export default Login;