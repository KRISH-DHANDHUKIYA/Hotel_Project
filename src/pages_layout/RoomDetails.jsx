import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets";
import { assets } from '../assets/assets'
import "../page_css/Roomdetails1.css"
import { Button } from "react-bootstrap";

const RoomDetails = () => {

    const { id } = useParams();

    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [])

    return room && (
        <>
            <div className="page-content details1 px-3 px-md-5 px-lg-6">
                {/* {room details} */}
                <div className="d-flex flex-column align-items-center gap-2 flex-md-row align-items-md-center ">
                    <h1 className="font1 mb-0 fs-md-1" style={{ fontSize: '1.875rem' }} >{room.hotel.name} <span className="fw-normal small">({room.roomType})</span> </h1>
                    <p className="small text-white bg-warning rounded-pill py-1 px-3">20% OFF</p>
                </div>
                {/* {room rating} */}
                <div className="d-flex align-items-center gap-1 mt-2 ">
                    <img src={assets.starIconFilled} alt="star" />
                    <img src={assets.starIconFilled} alt="star" />
                    <img src={assets.starIconFilled} alt="star" />
                    <img src={assets.starIconFilled} alt="star" />
                    <img src={assets.starIconFilled} alt="star" />
                    <p className="ms-2 mb-0">200+ Reviews</p>
                </div>
                {/* {room details} */}
                <div className="d-flex align-items-center gap-1 mt-2 text-secondary">
                    <img src={assets.locationIcon} />
                    <span>{room.hotel.address}</span>
                </div>

                {/* {room.images} */}
                <div className="d-flex flex-column flex-lg-row mt-3 gap-3">
                    <div className="w-100 w-lg-50">
                        <img src={mainImage} className="w-100 rounded shadow img-fluid" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="gap-2 w-100 w-lg-50" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                        {room?.images.length > 1 && room.images.map((image, index) => (
                            <img onClick={() => setMainImage(image)}
                                key={index} src={image} style={{ objectFit: 'cover', cursor: "pointer" }}
                                className={`w-100 rounded shadow ${mainImage === image ? 'border border-3 border-warning' : ''}`} />
                        ))}
                    </div>
                </div>
                {/* {room highlightes} */}
                <div className="d-flex flex-column flex-md-row justify-content-md-between mt-4">
                    <div className="d-flex flex-column">
                        <h1 className="font1 fw-normal" style={{ fontSize: '1.75rem' }}>Experience Luxury Like Never Before</h1>
                        <div className="d-flex flex-wrap align-items-center mt-3 mb-4 gap-3">
                            {room.amenities.map((item, index) => (
                                <div key={index} className="d-flex align-items-center px-3 py-2 rounded bg-light" style={{ gap: '0.5rem' }}>
                                    <img src={facilityIcons[item]} style={{ width: '1.25rem', height: '1.25rem' }} />
                                    <p className="small mb-0">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="fw-medium fs-3">${room.pricePerNight} / Night</p>
                </div>
                {/* {checkin checkout form} */}
                <form className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between bg-white p-3 rounded mx-auto mt-4"
                    style={{ maxWidth: "72rem", boxShadow: "0px 0px 20px rgba(0,0,0,0.15)" }}>

                    <div className="d-flex flex-column">
                        <label htmlFor="checkInDate" className="fw-medium">Check-In</label>
                        <input type="date" id="checkInDate" required placeholder="Check-In" className="w-100 rounded border px-3 py-2 mt-2 border-secondary" />
                    </div>
                    <div className="d-none d-md-block bg-secondary" style={{ width: "1px", height: "3.75rem", opacity: 0.7 }}></div>

                    <div className="d-flex flex-column">
                        <label htmlFor="checkOutDate" className="fw-medium">Check-Out</label>
                        <input type="date" id="checkOutDate" required placeholder="Check-Out" className="w-100 rounded border px-3 py-2 mt-2 border-secondary" />
                    </div>
                    <div className="d-none d-md-block bg-secondary" style={{ width: "1px", height: "3.75rem", opacity: 0.7 }}></div>

                    <div className="d-flex flex-column">
                        <label htmlFor="guests" className="fw-medium">Guests</label>
                        <input type="number" id="guests" required placeholder="0" className="rounded border px-3 py-2 mt-2 border-secondary" />
                    </div>

                    <button type="submit" className="btn btn-primary text-white rounded-md text-base cursor-pointer  w-md-auto mt-md-0 mt-3 px-md-5 py-3 py-md-4"
                        style={{ transition: "all 0.3s ease" }}>
                        Check Availability
                    </button>
                </form>
                {/* {common-specification} */}
                <div style={{ marginTop: '6.25rem' }} className="d-flex flex-column gap-3">
                    {roomCommonData.map((spec, index) => (
                        <div key={index} className="d-flex align-items-start gap-2">
                            <img src={spec.icon} alt={spec.title} style={{ width: '26px' }} />
                            <div>
                                <p className="mb-1">{spec.title}</p>
                                <p className="text-secondary mb-0">{spec.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="border-top border-bottom border-secondary d-flex flex-column justify-content-center align-items-center text-secondary text-center px-3 py-4 Guests">
                    <p>
                        Guests will be allocated on the ground floor according to availability. You get a comfortable two bedroom apartment that has a true city feeling. The price quoted is for two guests. At the guest slot, please mark the number of guests to get the exact price for groups. The guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
                    </p>
                </div>

                {/* {hosted by} */}
                {/* <div className="d-flex flex-column align-items-start gap-4">
                    <div className="d-flex gap-4">
                        <img src={room.hotel.owner.image} className="d-none d-md-inline-block" style={{ height: "72px", width: "72px" }} />
                        <div>
                            <p className="fs-5 fs-md-4 mb-1">Hosted by {room.hotel.name}</p>
                            <div className="d-flex align-items-center mt-1">
                                <img src={assets.starIconFilled} alt="star1" />
                                <img src={assets.starIconFilled} alt="star" />
                                <img src={assets.starIconFilled} alt="star" />
                                <img src={assets.starIconFilled} alt="star" />
                                <img src={assets.starIconFilled} alt="star" />
                                <p className="mb-0 ms-2">200+ Reviews</p>
                            </div>
                        </div>
                    </div>
                    <Button variant="primary" className="mt-3 px-4 py-2">Contact Now</Button>
                </div> */}
            </div>
        </>
    )
}

export default RoomDetails