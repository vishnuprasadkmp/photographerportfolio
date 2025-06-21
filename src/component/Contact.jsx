import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbarpf from "./Navbarpf";
import MapComponent from "./MapComponent"; // Ensure this exists
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
    <div className="contact">
      <Navbarpf />
      </div>

      <div className="contact container">
        {/* Top Section: Title + Info Blocks */}
        <div className="contact-top">
          {/* Title */}
          <h2 className="contact-title">Let’s Work <br /> Together</h2>

          {/* Info Blocks */}
          <div className="contact-details">
            {/* Instagram + Email */}
            <div className="contact-block">
              <p>Instagram</p>
              <a
                href="https://www.instagram.com/viiishnu__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon /> @viiishnu__
              </a>

              <div className="contact-email">
                <p>Email</p>
                <a href="mailto:vishnukm407@gmail.com">vishnukm407@gmail.com</a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-block">
              <p>Location</p>
              <h2>Bengaluru, India</h2>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-wrapper">
          <MapComponent />
        </div>
      </div>
    </>
  );
};

export default Contact;
