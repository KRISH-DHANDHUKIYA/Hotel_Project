import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../page_css/Home.css'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home1 = () => {
    return (
        <>
            <OwlCarousel className="owl-theme" nav={false} dots={false} responsiveClass={true} items={1} autoplay loop margin={0} autoplayTimeout={3000} responsive={{ 0: { items: 1 }, 600: { items: 1, }, 1000: { items: 1, }, }}>
                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://velikorodnov.com/html/milenia/images/slide-01.jpg" alt="Slide 1" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className=" font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">Redefining the Art of Luxury</h4>
                            <button className="text-uppercase btn1">Discover More</button>
                        </div>

                    </div>
                </div>

                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://i.artfile.me/wallpaper/03-10-2022/1920x1080/interer-bassejny--otkrytye-ploschadki-ot-1623636.jpg" alt="Slide 2" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className=" font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">A Sanctuary for Dreams</h4>
                            <button className="text-uppercase btn1">Discover More</button>
                        </div>

                    </div>
                </div>

                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://wallup.net/wp-content/uploads/2019/09/758553-interior-salon-disea.jpg" alt="Slide 3" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className=" font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">Capture the spirit of timeless</h4>
                            <button className="text-uppercase btn1">Discover More</button>
                        </div>

                    </div>
                </div>
            </OwlCarousel>

            <Container fluid className="my-3">
                <Row className="g-3 align-items-center text-center">
                    <Col xs={12} sm={6} md={3}>
                        <div>Arrival Date</div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div>Departure Date</div>
                    </Col>
                    <Col xs={6} sm={6} md={2}>
                        <div>Adults</div>
                    </Col>
                    <Col xs={6} sm={6} md={2}>
                        <div>Children</div>
                    </Col>
                    <Col xs={12} md={2}>
                        <Button className="text-uppercase btn1 w-100 py-2">
                            Check Availability
                        </Button>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Home1;