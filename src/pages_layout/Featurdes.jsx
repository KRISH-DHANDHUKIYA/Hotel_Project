import { Container, Row, Col, Button } from 'react-bootstrap';
import { roomsDummyData } from '../assets/assets';
import Hotel3 from './Home3';
import { Link } from 'react-router-dom';

const Featurdes = () => {
    return (
        <div id="features333" className='bg-light mb-5'>
            <Container className="py-5">

                <div className="mb-5">
                    <h1 className="fw-bold text-center fontm">Featured Destination</h1>
                    <p className="fs-6 mt-2 text-secondary text-center fontt" style={{ maxWidth: "600px", margin: "0 auto" }}>
                        Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.
                    </p>
                </div>
                <Row className="justify-content-center mt-4">
                    {roomsDummyData.slice(0, 4).map((room, index) => (
                        <Col key={room._id} xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center mb-4">
                            <Hotel3 room={room} index={index} />
                        </Col>
                    ))}
                </Row>

                <div className="d-flex justify-content-center">
                    <Link to="/room" onClick={() => window.scrollTo(0, 0)} className="btn btn-danger text-light my-5 px-4 py-2 border border-danger rounded  small fw-medium shadow-sm fontt">
                        Explore the Full List
                    </Link>
                </div>

            </Container>
        </div>
    );
};

export default Featurdes;