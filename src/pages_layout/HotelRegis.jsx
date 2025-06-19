// import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';
// import { assets, cities } from '../assets/assets';
// import { useState } from 'react';

// const HotelRegis = () => {

//     const [show, setShow] = useState(true);
//     const handleClose = () => setShow(false);

//     return (
//         <Modal show={show} onHide={handleClose} size="lg" centered backdrop="static" className="Register Your Hotel">
//             <div className="d-flex w-100">
//                 <div className="d-none d-md-block w-50">
//                     <Image src={assets.regImage} alt="reg_image" fluid style={{ borderTopLeftRadius: '0.5rem', borderBottomLeftRadius: '0.5rem', height: '100%', objectFit: 'cover' }} />
//                 </div>

//                 <div className="p-4 w-100 w-md-50 position-relative">
//                     <Image src={assets.closeIcon} alt="close_icon" onClick={handleClose} style={{
//                         position: 'absolute', top: '1rem', right: '1rem', width: '16px', height: '16px', cursor: 'pointer',
//                     }} />
//                     <h4 className="mt-4 text-center">Register Your Hotel</h4>

//                     <div className='w-full mt-4'>
//                         <label htmlFor="name" className='font-medium text-grey-500'>
//                             Hotel Name
//                         </label>
//                         <input id='name' type="text" placeholder='Type here' className='border boder-gray-200 w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required />
//                     </div>

//                     <div className='w-full mt-4'>
//                         <label htmlFor="contact" className='font-medium text-grey-500'>
//                             Phone
//                         </label>
//                         <input id='contact' type="text" placeholder='Type here' className='border boder-gray-200 w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required />
//                     </div>

//                     <div className='w-full mt-4'>
//                         <label htmlFor="address" className='font-medium text-grey-500'>
//                             Address
//                         </label>
//                         <input id='address' type="text" placeholder='Type here' className='border boder-gray-200 w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required />
//                     </div>

//                     <div className='w-full mt-4 max-w-60 mr-auto'>
//                         <label htmlFor="city" className='font-medium text-grey-500'>
//                             City
//                         </label>
//                         <select id="city" className='rounded border boder-gray-200 w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required>
//                             <option value="">Select City</option>
//                             {cities.map((city) => (
//                                 <option key={city} value={city}>{city}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <button className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6'>
//                         Register
//                     </button>z
//                 </div>
//             </div>
//         </Modal>
//     );
// };

// export default HotelRegis;


import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';
import { assets, cities } from '../assets/assets';
import { useState } from 'react';

const HotelRegis = () => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered backdrop="static">
            <div className="d-flex w-100">
                <div className="d-none d-md-block w-50">
                    <Image
                        src={assets.regImage}
                        alt="reg_image"
                        fluid
                        style={{
                            borderTopLeftRadius: '0.5rem',
                            borderBottomLeftRadius: '0.5rem',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </div>

                <div className="p-4 w-100 w-md-50 position-relative">
                    <Image
                        src={assets.closeIcon}
                        alt="close_icon"
                        onClick={handleClose}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            width: '16px',
                            height: '16px',
                            cursor: 'pointer',
                        }}
                    />
                    <h4 className="mt-4 text-center">Register Your Hotel</h4>

                    <Form className="mt-4">
                        <Form.Group controlId="hotelName" className="mb-3">
                            <Form.Label>Hotel Name</Form.Label>
                            <Form.Control type="text" placeholder="Type here" required />
                        </Form.Group>

                        <Form.Group controlId="contact" className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Type here" required />
                        </Form.Group>

                        <Form.Group controlId="address" className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Type here" required />
                        </Form.Group>

                        <Form.Group controlId="city" className="mb-3" style={{ maxWidth: "250px" }}>
                            <Form.Label>City</Form.Label>
                            <Form.Select required>
                                <option value="">Select City</option>
                                {cities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3">
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
        </Modal>
    );
};

export default HotelRegis;
