import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Olawole BOUSSARI</span>
            <ul class="nav position-absolute start-50 translate-middle-x">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
            <ul class="nav gap-4 position-absolute end-0 translate-middle-x">
                <li class="nav-item">
                    <a href='https://www.linkedin.com/in/hamid-boussari-722873241' target="_blank" rel="noopener noreferrer" class="nav-icon">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                </li>
                <li class="nav-item">
                    <a href='https://github.com/axelboussari' target="_blank" rel="noopener noreferrer" class="nav-icon">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                </li>
                <li class="nav-item">
                    <a href='mailto:axel.boussari@gmail.com' target="_blank" rel="noopener noreferrer" class="nav-icon">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;