import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import '../styles/EditPost.css'
const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [photos, setPhotos] = useState({
    name: "",
    description: "",
    section: "",
    post: null, // new image file if user uploads
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
                const res = await axios.get(`https://photographerportfolioserver-3.onrender.com/api/posts/${id}`);

        // const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        const data = res.data.payload;
        if (data) {
          setPhotos({
            name: data.name,
            description: data.description,
            section: data.section,
            post: null, // don't pre-fill image file
          });
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        toast.error("Could not load post");
      }
    };

    fetchPost();
  }, [id]);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "post") {
      setPhotos((prev) => ({ ...prev, post: files[0] }));
    } else {
      setPhotos((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function updatePost(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", photos.name);
    formData.append("description", photos.description);
    formData.append("section", photos.section);
    if (photos.post) {
      formData.append("post", photos.post); // only if new file is uploaded
    }

    try {
            await axios.put(`https://photographerportfolioserver-3.onrender.com/api/posts/${id}`, formData, {

      // await axios.put(`http://localhost:5000/api/posts/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Post updated successfully");
      navigate(`/post/${id}`);
    } catch (err) {
      console.error(err);
      toast.error("Error updating post");
    }
  }

  return (
    <>
    <div className="EditPostPage">
    <Link to="/"><img src="/km.png" alt="Logo" className="logo" />
</Link>
    <h1>EDIT POST</h1>

    <form ref={formRef} onSubmit={updatePost} className="add-photo-form">
      <label>Section:</label>
      <select name="section" onChange={handleChange} value={photos.section} required>
        <option value="">--Select Section--</option>
        <option value="automotive">Automotive</option>
        <option value="product">Product</option>
        <option value="portraits">Portraits</option>
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

      <label>Upload New Photo (optional):</label>
      <input
        name="post"
        onChange={handleChange}
        type="file"
        accept="image/*"
      />

      <button type="submit">Update Post</button>
    </form>
    </div>
    </>
  );
};

export default EditPost;
