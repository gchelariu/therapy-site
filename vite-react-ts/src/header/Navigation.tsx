import justLogo from "../assets/just-logo.png";

function Navigation() {
    return (
        <div className="header">
          <div className="logo">
            <img src={justLogo} alt="some" />
          </div>
          <div className="nav-links" id="navLinks">
            <ul>
              <li className="nav-item">
                <a href="#aboutMe">
                  Despre mine
                </a>
              </li>
              <li className="nav-item">
                <a href="#servicii">
                  Servicii
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
}

export default Navigation;