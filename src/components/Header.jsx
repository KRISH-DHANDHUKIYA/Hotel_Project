  const Header = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="container-fluid ">
      <a className="navbar-brand fs-3 font1" href="#">HOTEL TAJ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto text-center mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link  active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Rooms</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu border border-2 bg-dark dropdown-menu-dark ">
            <li><a className="dropdown-item" href="#">About us</a></li>
            <li><a className="dropdown-item" href="#">Offers</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Contact us</a></li>
          </ul>
        </li>
         <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Events</a>
         </li>
          <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Blogs</a>
          </li>
      </ul>  
  <div className="d-flex flex-column flex-lg-row gap-2">
  <button className="btn btn-outline-light" type="submit">Log In</button>
  <button className="btn btn-outline-light" type="submit">Sign Up</button>
  </div>
    </div>
    </div>
        </nav>
        </>
    )
}

export default Header