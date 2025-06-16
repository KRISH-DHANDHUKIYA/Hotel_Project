import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Reviewes = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center g-4">
        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
          <Card className="text-center p-4 border border-secondary-subtle rounded-lg shadow-sm" style={{ width: '18rem' }}>
            <div className="d-flex justify-content-center mb-3">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="Donald Jackman"
                roundedCircle
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            </div>
            <Card.Title className="text-lg text-gray-900 fw-medium mb-1">
              Donald Jackman
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-sm">
              Graphic Designer
            </Card.Subtitle>
            <div className="d-flex justify-content-center mt-3 gap-1">
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
            </div>
            <Card.Text className="text-center mt-3 text-gray-500" style={{ fontSize: '15px' }}>
              I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
            </Card.Text>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
          <Card className="text-center p-4 border border-secondary-subtle rounded-lg shadow-sm" style={{ width: '18rem' }}>
            <div className="d-flex justify-content-center mb-3">
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="Richard Nelson"
                roundedCircle
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            </div>
            <Card.Title className="text-lg text-gray-900 fw-medium mb-1">
              Richard Nelson
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-sm">
              Content Creator
            </Card.Subtitle>
            <div className="d-flex justify-content-center mt-3 gap-1">
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
            </div>
            <Card.Text className="text-center mt-3 text-gray-500" style={{ fontSize: '15px' }}>
              I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
            </Card.Text>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
          <Card className="text-center p-4 border border-secondary-subtle rounded-lg shadow-sm" style={{ width: '18rem' }}>
            <div className="d-flex justify-content-center mb-3">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="James Washington"
                roundedCircle
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            </div>
            <Card.Title className="text-lg text-gray-900 fw-medium mb-1">
              James Washington
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-sm">
              Co-founder
            </Card.Subtitle>
            <div className="d-flex justify-content-center mt-3 gap-1">
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="#FF532E" xmlns="http://www.w3.org/2000/svg"><path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" /></svg>
            </div>
            <Card.Text className="text-center mt-3 text-gray-500" style={{ fontSize: '15px' }}>
              I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviewes