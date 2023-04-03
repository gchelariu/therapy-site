import justLogo from "../assets/just-logo.png";
import justLogoName from "../assets/just-logoName.png";
import "../header/Navigation.css"

function Navigation() {
    return (
        <div className="navigation">
          <div className="logo">
            <img className="justLogo" src={justLogo} alt="" />
            <img className="justLogoName" src={justLogoName} alt="" />
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