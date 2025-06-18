// const MyBooking = () => {
//     return (
//         <>
//             <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
//                 <Title title="My Bookings" subTitle='Easily manage your past, current and uplcoming hotel reservations in one place. Plan your trips for seamlessally with just a few clickes' align="left" />


//                 <div className="max-w-6xl mt-8 w-full text-grey-800">

//                     <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-grey-300 font-medium text-base py-3">
//                         <div className="w-1/3">Hotels</div>
//                         <div className="w-1/3">Date & Timings</div>
//                         <div className="w-1/3">Payment</div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default MyBooking

import { Container, Row, Col } from "react-bootstrap";

const MyBooking = () => {
    return (
        <div className="pt-5 pb-5" style={{ backgroundColor: "#f9f9f9" }}>
            <Container fluid="lg" className="px-4 px-md-5 px-lg-6 px-xl-7" style={{ paddingTop: "7rem" }}>
                <div className="d-flex flex-column align-items-start text-start mb-4">
                    <h1 className="fw-bold">My Bookings</h1>
                    <p
                        className="fs-6 mt-2"
                        style={{
                            color: "rgba(107, 114, 128, 0.9)",
                            maxWidth: "720px",
                        }}
                    >
                        Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks.
                    </p>
                </div>

                <Row className="border-bottom border-secondary-subtle py-3 fw-medium d-none d-md-flex">
                    <Col md={6}>Hotels</Col>
                    <Col md={4}>Date & Timings</Col>
                    <Col md={2}>Payment</Col>
                </Row>

                <Row className="py-4 border-bottom align-items-center">
                    <Col md={6}>
                      
                    </Col>
                    <Col md={4}>
                        
                    </Col>
                   
                </Row>

            </Container>
        </div>
    );
};

export default MyBooking;
