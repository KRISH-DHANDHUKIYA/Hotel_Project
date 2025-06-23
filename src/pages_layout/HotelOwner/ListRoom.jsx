import { Container, Table, Form } from "react-bootstrap";
import { roomsDummyData } from "../../assets/assets";

const ListRoom = () => {
    const rooms = roomsDummyData;

    return (
        <Container className="my-5">
            <div className="mb-4">
                <h1 className="fw-bold text-start font1">Manage Rooms</h1>
                <p className="fs-6 mt-2 text-secondary text-start fontt" style={{ maxWidth: "720px" }}>
                    View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.
                </p>
            </div>

            <p className="text-muted fw-semibold mb-3 fontt">All Rooms</p>

            <div style={{ maxHeight: "320px", overflowY: "auto" }}>
                <Table striped bordered hover responsive className="align-middle text-nowrap">
                    <thead className="table-light fontt">
                        <tr>
                            <th className="fontt">Name</th>
                            <th className="fontt">Facility</th>
                            <th className="fontt">Price / Night</th>
                            <th className="text-center fontt">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((item, index) => (
                            <tr key={index} className="fontt">
                                <td className="fontt">{item.roomType}</td>
                                <td className="fontt">{item.amenities.join(', ')}</td>
                                <td className="fontt">{item.pricePerNight}</td>
                                <td className="text-center fontt">
                                    <Form.Check
                                        type="switch"
                                        id={`availability-switch-${index}`}
                                        checked={item.isAvailable}
                                        readOnly
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default ListRoom;
