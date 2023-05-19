import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container">
          <Link className="navbar-brand bold fw-bold" to="/">
            R-Tools
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="menu collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/features">
                Features
              </Link>
              <Link className="nav-link" to="pricing">
                Pricing
              </Link>
							<Link className="nav-link" to="pricing">
                Login
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
