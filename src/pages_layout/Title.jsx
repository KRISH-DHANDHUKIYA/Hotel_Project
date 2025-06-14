import { Container } from 'react-bootstrap';

const Title = () => {
    return (
        <Container  className="text-center d-flex flex-column align-items-center justify-content-center my-4">
            <h1 className="font1 fw-bold" >
                Featured Destination
            </h1>
            <p className="text-muted mx-auto mt-2 " style={{ maxWidth: '700px' }}>
                Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.
            </p>
        </Container>
    );
};

export default Title