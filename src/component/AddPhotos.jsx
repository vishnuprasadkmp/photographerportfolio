import axios from "axios";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "../styles/AddPhotos.css";
import { Link } from "react-router-dom";

function AddPhotos() {
  const formRef = useRef(null);

  const [photos, setPhotos] = useState({
    name: "",
    description: "",
    section: "",
    post: null, // the image file
  });

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "post") {
      setPhotos((prev) => ({ ...prev, post: files[0] }));
    } else {
      setPhotos((prev) => ({ ...prev, [name]: value }));
    }
  }

  function addItems(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", photos.name);
    formData.append("description", photos.description);
    formData.append("section", photos.section);
    formData.append("post", photos.post); // file field

    axios
          .post("https://photographerportfolioserver-3.onrender.com/api/posts", formData, {

      // .post("http://localhost:5000/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success(`${photos.name} added successfully`);
        formRef.current.reset();
        setPhotos({ name: "", description: "", section: "", post: null });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Invalid data format or server error");
      });
  }

  return (
    <>
   
    <div className="AllProducts">
       <Link to="/"><img src="/km.png" alt="Logo" className="logo" />
</Link>
      <h1>ADD PHOTOS</h1>
      <form ref={formRef} onSubmit={addItems} className="add-photo-form">
        <label>Section:</label>
        <select
          name="section"
          onChange={handleChange}
          value={photos.section}
          required
        >
          <option value="">--Select Section--</option>
          <option value="product">Product</option>
          <option value="fashion">Fashion</option>
          <option value="automotive">Automotive</option>
          <option value="portraits">Portraits</option>

          <option value="travel">Travel</option>

        </select>

        <label>Name:</label>
        <input
          name="name"
          onChange={handleChange}
          value={photos.name}
          type="text"
          required
          placeholder="Enter the photo name"
        />

        <label>Description:</label>
        <input
          name="description"
          onChange={handleChange}
          value={photos.description}
          type="text"
          required
          placeholder="Enter the description"
        />

        <label>Upload Photo:</label>
        <input
          name="post"
          onChange={handleChange}
          type="file"
          accept="image/*"
          required
        />

        <button type="submit">Add Photo</button>
      </form>
    </div>
    </>
  );
}

export default AddPhotos;
