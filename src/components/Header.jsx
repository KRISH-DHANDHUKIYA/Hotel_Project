  const Header = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid ">
    <a className="navbar-brand fs-3" href="#">HOTEL TAJ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
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
          <a className="nav-link " aria-current="page" href="#">Eventes</a>
        </li>
          <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Blogs</a>
        </li>
      </ul>  
         <div className="d-flex  ">
  <button className="btn btn-outline-light" type="submit">Log in</button>
  <button className="btn btn-outline-light mx-2" type="submit">Registration</button>
</div>

    </div>
  </div>
</nav>
        </>
    )
}

export default Header