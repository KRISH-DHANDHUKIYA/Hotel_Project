import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import '../../page_css/Admin.css'

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.chartline },
    { name: "Add Room", path: "/owner/add-room", icon: assets.plusminussolid },
    { name: "List Room", path: "/owner/list-room", icon: assets.listsolid }
  ];

  return (
    <div className="h-100 border-end bg-dark  pt-3 px-1 px-md-0">
      <Nav className="flex-column">
        {sidebarLinks.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="sidebar-link text-dark text-decoration-none d-flex align-items-center py-3 px-2 px-md-4 gap-2 fontt"
          >
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              style={{ width: 20, height: 20 }}
              className="me-2 dem1"
            />
            <span className="d-none d-md-inline text-light">{item.name}</span>
          </Link>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
