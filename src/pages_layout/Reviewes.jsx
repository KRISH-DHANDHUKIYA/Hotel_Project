import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { assets } from '../assets/assets'

const Reviewes = () => {
  return (
    <Container fluid className="my-5 d-flex flex-column align-items-center justify-content-center">
      <div className="text-center d-flex flex-column align-items-center justify-content-center mb-5">
        <h1 className="fw-bold fontm" style={{ fontSize: '2.5rem' }}>
          What Our Guests Say
        </h1>
        <p className="text-muted mt-2 fontt" style={{ maxWidth: '700px', fontSize: '1rem' }}>
          Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.
        </p>
      </div>
      <Row className="justify-content-center g-4">
        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
          <Card className="text-center p-4 border border-secondary-subtle rounded-lg shadow-sm" style={{ width: '18rem' }}>
            <div className="d-flex justify-content-center mb-3">
              <Image
                src="https://avatars.mds.yandex.net/i?id=709c594cad8f14e76a45c7dd6f927a13eadc12f5-3908415-images-thumbs&n=13"
                alt="Donald Jackman"
                roundedCircle
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            </div>
            <Card.Title className="text-lg text-gray-900 fw-medium mb-1 fontt">
              Suyash Sharma
            </Card.Title>
            <div className="d-flex justify-content-center mt-3 gap-1">
              <img src={assets.starIconFilled} alt="star1" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
            </div>
            <Card.Text className="text-center mt-3 text-gray-500 fontt" style={{ fontSize: '15px' }}>
              The exceptional customer service at this hotel impressed me. They were always friendly and asked how our stay was going every time we walked in the door. They were also able to recommend places to get any meal that we needed.
            </Card.Text>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
          <Card className="text-center p-4 border border-secondary-subtle rounded-lg shadow-sm" style={{ width: '18rem' }}>
            <div className="d-flex justify-content-center mb-3">
              <Image
                src="https://avatars.mds.yandex.net/i?id=7639312ee343715e79c0fca18b205774411eabcd-5247757-images-thumbs&n=13"
                alt="Richard Nelson"
                roundedCircle
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            </div>
            <Card.Title className="text-lg text-gray-900 fw-medium mb-1 fontt">
              Tim David
            </Card.Title>
            <div className="d-flex justify-content-center mt-3 gap-1">
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconOutlined} alt="star2" />
            </div>
            <Card.Text className="text-center mt-3 text-gray-500 fontt" style={{ fontSize: '15px' }}>
              The hotel was beautiful, with clean and comfortable rooms. It was even better than expected. The price was terrific. There were great restaurants within walking distance. I would definitely stay there again.
            </Card.Text>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
          <Card className="text-center p-4 border border-secondary-subtle rounded-lg shadow-sm" style={{ width: '18rem' }}>
            <div className="d-flex justify-content-center mb-3">
              <Image
                src="https://diccut.com/upload/photos/2024/10/NRefIhbwhuVskAymDlrW_09_c7d1067df7b17a97c8b882e2772c1e47_avatar_full.jpg"
                alt="James Washington"
                roundedCircle
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            </div>
            <Card.Title className="text-lg text-gray-900 fw-medium mb-1 fontt">
              Samar Joshef
            </Card.Title>
            <div className="d-flex justify-content-center mt-3 gap-1">
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconOutlined} alt="star2" />
            </div>
            <Card.Text className="text-center mt-3 text-gray-500 fontt" style={{ fontSize: '15px' }}>
              I recently stayed at Hotel Taj and it was one of the best hotel experiences I've ever had. The Room was spacious and comfortable, and the amenities were top-notch, with helpful and friendly staff.
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviewes