import { Container, Table, Form } from "react-bootstrap";
import { roomsDummyData } from "../../assets/assets"; // Make sure this path is correct

const ListRoom = () => {
    const rooms = roomsDummyData; // Use your actual data source

    return (
        <Container className="my-5">
            {/* Heading */}
            <div className="mb-4">
                <h1 className="fw-bold text-start">Manage Rooms</h1>
                <p className="fs-6 mt-2 text-secondary text-start" style={{ maxWidth: "720px" }}>
                    View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.
                </p>
            </div>

            <p className="text-muted fw-semibold mb-3">All Rooms</p>

            <div style={{ maxHeight: "320px", overflowY: "auto" }}>
                <Table striped bordered hover responsive className="align-middle text-nowrap">
                    <thead className="table-light">
                        <tr>
                            <th>Name</th>
                            <th>Facility</th>
                            <th>Price / Night</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((item, index) => (
                            <tr key={index}>
                                <td>{item.roomType}</td>
                                <td>{item.amenities.join(', ')}</td>
                                <td>{item.pricePerNight}</td>
                                <td className="text-center">
                                    <Form.Check
                                        type="switch"
                                        id={`availability-switch-${index}`}
                                        // label={item.isAvailable ? "Available" : "Unavailable"}
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
