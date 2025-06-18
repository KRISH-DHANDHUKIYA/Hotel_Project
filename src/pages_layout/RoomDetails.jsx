import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { roomsDummyData } from "../assets/assets";

const RoomDetails = () => {

    const { id } = useParams();

    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [])

    return  room && (
        <>
            <div className="page-content details1 px-3 px-md-5 px-lg-6">

            </div>
        </>
    )
}

export default RoomDetails