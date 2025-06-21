import Navbarpf from "./Navbarpf";
import ViewPhotos from "./ViewPhotos";
import SinglePhoto from "./SinglePhoto";
import "../styles/Gallery.css";

import { Routes, Route } from "react-router-dom";

function Gallery() {
  return (
    <>
      <div className="Gallery">
        <Navbarpf />
        <Routes>
          <Route path="/" element={<ViewPhotos />} />
        </Routes>
      </div>
    </>
  );
}

export default Gallery;
