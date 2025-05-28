import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Home1.css'

const Home = () => {
    return (
        <OwlCarousel className="owl-theme" nav={false} dots={true} responsiveClass={true} items={1} autoplay loop margin={0} autoplayTimeout={3000} responsive={{ 0: { items: 1 }, 600: { items: 1, }, 1000: { items: 1, }, }}>
            <div className="item">
                <div className="slide-wrapper">
                    <img src="https://velikorodnov.com/html/milenia/images/slide-01.jpg" alt="Slide 1" />
                    <div className="overlay" />
                    <div className="slide-content">
                        <h6 className="text-uppercase">Welcome to Taj Hotel</h6>
                        <span className='fs-1 '>Redefining the Art of Luxury</span>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="slide-wrapper">
                    <img src="https://i.artfile.me/wallpaper/03-10-2022/1920x1080/interer-bassejny--otkrytye-ploschadki-ot-1623636.jpg" alt="Slide 2" />
                    <div className="overlay" />
                    <div className="slide-content">
                        <h6 className="text-uppercase">Welcome to Taj Hotel</h6>
                        <span className='fs-1 '>A Sanctuary for Dreams</span>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="slide-wrapper">
                    <img src="https://wallup.net/wp-content/uploads/2019/09/758553-interior-salon-disea.jpg" alt="Slide 3" />
                    <div className="overlay" />
                    <div className="slide-content">
                        <h6 className="text-uppercase">Welcome to Taj Hotel</h6>
                        <span className='fs-1 '>Capture the spirit of timeless</span>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    );
};

export default Home;