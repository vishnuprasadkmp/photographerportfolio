import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ViewPhotos.css";
import { Link } from "react-router-dom";

const ViewPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [animationState, setAnimationState] = useState("idle");

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/api/posts");

        const res = await axios.get("https://photographerportfolioserver-3.onrender.com/api/posts");
        const data = res.data.payload || [];
        setPhotos(Array.isArray(data) ? data : []);
        setFilteredPhotos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching photos:", err);
      }
    };
    fetchPhotos();
  }, []);

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;

    setAnimationState("exiting");
    setTimeout(() => {
      setActiveCategory(category);
      const newFiltered =
        category === "All"
          ? photos
          : photos.filter((photo) => photo.section === category);
      setFilteredPhotos(newFiltered);
      setAnimationState("entering");
      setTimeout(() => {
        setAnimationState("idle");
      }, 500);
    }, 500);
  };

  const categories = [
    { label: "All", value: "All" },
    { label: "Product", value: "product" },
    { label: "Fashion", value: "fashion" },

    { label: "Automotive", value: "automotive" },
    { label: "Portraits", value: "portraits" },
    { label: "Travel", value: "travel" },



  ];

  return (
    <section className="alime-portfolio-area">
      <div className="alime-projects-menu">
        <div className="portfolio-menu">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`btn ${activeCategory === cat.value ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`photo-grid ${animationState}`}>
        {filteredPhotos.length === 0 ? (
          <p className="no-photos">No photos in this category.</p>
        ) : (
          filteredPhotos.map((photo, index) => (
            <div
              className={`single-portfolio-content ${
                animationState === "exiting"
                  ? "slide-out-left"
                  : animationState === "entering"
                  ? "slide-in-right"
                  : ""
              }`}
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="image-wrapper">
                <img src={photo.image} alt={photo.name} />
                <div className="hover-content">
                  <Link to={`/post/${photo._id}`} className="hover-icon">+</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ViewPhotos;
