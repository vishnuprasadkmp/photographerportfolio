import '../styles/Navbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
function Navbarpf() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <nav className="w-100">
          <div className="logo">
            <Link to="/">
              <img src="/km.png" alt="Logo" className="logo" />
            </Link>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li> <a id='insta'
          href="https://www.instagram.com/viiishnu__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
            <InstagramIcon/>
        </a></li>
          </ul>
        </nav>
      </Container>
    </Navbar>
  );
}

export default Navbarpf;
