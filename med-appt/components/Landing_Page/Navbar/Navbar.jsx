import "../Navbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");

    navigate("/");
    window.location.reload();
  };

  return (
    <div className="navbarContainer">
      <h2>
        <Link className="anchorLink" to="/">
          StayHealthy
        </Link>
      </h2>

      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a href="#appointments">Appointments</a>
          </li>

          {!sessionStorage.getItem("auth-token") ? (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          ) : (
            <li>
              <button className="logoutBtn" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;