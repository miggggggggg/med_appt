import "../Navbar/Navbar.css"

function Navbar(){

    return(<>
    <div className="navbarContainer">
      <h2><a className="anchorLink" href="#stayhealthy">StayHealthy</a></h2>
      <nav>
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#appointments">Appointments</a></li>
          <li><a href="#signUp">Sign up</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </div>
    </>)
}

export default Navbar;