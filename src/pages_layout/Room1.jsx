import { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { Link } from "react-router-dom";
import { Collapse, Button } from 'react-bootstrap';

const Room1 = () => {

    const [openFilter, setopenFilter] = useState(false)

    const RoomType = [
        "Single Bed",
        "Double Bed",
        "Luxury Bed",
        "Family Suite"
    ]

    const PriceRange = [
        '0 to 500',
        '500 to 1000',
        '1000 to 2000',
        '2000 to 3000'
    ]

    const SortOption = [
        'Price Low to High',
        'Price High to Low',
        'Newest First'
    ]


    const Checkbox = ({ label, selected = false, onChange = () => { } }) => {
        return (
            <label className="d-flex gap-3 align-items-center mt-2 fs-6 cursor-pointer">
                <input type="checkbox" checked={selected} onChange={(e) =>
                    onChange(e.target.checked, label)} />
                <span className="font-light user-select-none">{label}</span>
            </label>
        )
    }

    const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
        return (
            <label className="d-flex gap-3 align-items-center mt-2 fs-6 cursor-pointer">
                <input type="radio" name="sortOption" checked={selected} onChange={() =>
                    onChange(label)} />
                <span className="font-light user-select-none">{label}</span>
            </label>
        )
    }

    return (
        <>
            <div className="d-flex flex-column-reverse flex-lg-row align-items-start justify-content-between mt-5 px-4 px-md-5 px-lg-6 px-xl-7">
                <div>
                    <div className="d-flex flex-column align-items-start text-start">
                        <h1 className="fw-bold font1">Explore the Room</h1>
                        <p className="fs-6 fs-md-5 mt-2 fontt" style={{ color: 'rgba(107, 114, 128, 0.9)', maxWidth: '696px' }}>
                            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                        </p>
                    </div>

                    {roomsDummyData.map((room) => (
                        <div key={room._id} className="mb-5 d-flex flex-column flex-md-row align-items-start border-bottom border-secondary" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', gap: '1.5rem' }}>
                            <Link to={`/room/${room._id}`} onClick={() => scrollTo(0, 0)}>
                                <img src={room.images[0]} alt="h-img" title="View Room Details" className="w-100 rounded-4 shadow-lg"
                                    style={{
                                        maxHeight: '260px', objectFit: 'cover', cursor: 'pointer', width: '100%', maxWidth: '100%',
                                    }} />
                            </Link>

                            <div className="d-flex flex-column gap-2 mt-3">
                                <p className="text-muted fontt">{room.hotel.city}</p>

                                <Link to={`/room/${room._id}`} onClick={() => scrollTo(0, 0)} style={{ textDecoration: 'none' }}>
                                    <p style={{ color: '#1F2937', fontSize: '30px', cursor: 'pointer' }} className="font1">
                                        {room.hotel.name}
                                    </p>
                                </Link>

                                <div className="d-flex align-items-center">
                                    <img src={assets.starIconFilled} alt="filled star" />
                                    <img src={assets.starIconFilled} alt="filled star" />
                                    <img src={assets.starIconFilled} alt="filled star" />
                                    <img src={assets.starIconFilled} alt="filled star" />
                                    <img src={assets.starIconFilled} alt="filled star" />
                                    <p className="ms-2 mb-0 fontt">200+ Reviews</p>
                                </div>

                                <div className="d-flex align-items-center gap-1 mt-2 fs-6" style={{ color: '#6B7280' }}>
                                    <img src={assets.locationIcon} alt="location" />
                                    <span className="fontt">{room.hotel.address}</span>
                                </div>

                                <div className="d-flex flex-wrap align-items-center mt-3 mb-4 gap-3">
                                    {room.amenities.map((item, index) => (
                                        <div key={index} className="d-flex align-items-center gap-2 px-3 py-2 rounded" style={{ backgroundColor: 'rgba(245, 245, 255, 0.7)' }}>
                                            <img key={index} src={facilityIcons[item]} title={item} style={{ width: '20px', height: '20px' }} />
                                            <p className="small mb-0 fontt">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <p className="fs-4 fw-medium text-dark fontt">Price : ${room.pricePerNight} / Night</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white border text-secondary mb-4 mb-lg-0 mt-lg-5" style={{ width: '20rem' }}>
                    <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                        <p className="fw-medium text-dark text-uppercase mb-0 fs-6 fontt">Filters</p>

                        <Button
                            variant="link"
                            className="text-uppercase p-0 d-lg-none"
                            onClick={() => setopenFilter(!openFilter)}
                            aria-controls="filter-collapse"
                            aria-expanded={openFilter}
                            style={{ textDecoration: 'none' }}
                        >
                            {openFilter ? 'Hide' : 'Show'}
                        </Button>

                        <span className="text-uppercase d-none d-lg-inline fontt" style={{ cursor: 'pointer' }}>
                            Clear
                        </span>
                    </div>

                    <Collapse in={openFilter || window.innerWidth >= 992}>
                        <div id="filter-collapse">
                            <div className="px-3 pt-3 pb-4">
                                <div className="mb-4">
                                    <p className="fw-medium text-dark mb-2 fs-6 fontt">Popular Filters</p>
                                    {RoomType.map((room, index) => (
                                        <Checkbox key={index}  label={room} className="fontt" />
                                    ))}
                                </div>

                                <div className="mb-4">
                                    <p className="fw-medium text-dark mb-2 fs-6 fontt">Price Range</p>
                                    {PriceRange.map((range, index) => (
                                        <Checkbox key={index} label={`$ ${range}`} className="fontt" />
                                    ))}
                                </div>

                                <div>
                                    <p className="fw-medium text-dark mb-2 fs-6 fontt">Sort By</p>
                                    {SortOption.map((option, index) => (
                                        <RadioButton key={index} label={option} className="fontt" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </>
    );
};

export default Room1;