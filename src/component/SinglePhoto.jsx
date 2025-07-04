import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SinglePhoto.css";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-toastify";

const SinglePhoto = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log("Fetching post with ID:", id);
                // const res = await axios.get(`http://localhost:5000/api/posts/${id}`);

        const res = await axios.get(`https://photographerportfolioserver-3.onrender.com/api/posts/${id}`);
        console.log("Fetched data:", res.data);
        setPost(res.data.payload);
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // ✅ Delete post
  const removePhoto = async (id, name) => {
    try {
            await axios.delete(`http://localhost:5000/api/posts/${id}`);

      // await axios.delete(`https://photographerportfolioserver-3.onrender.com/api/posts/${id}`);
      toast.success(`${name} is removed`);
      navigate('/');
    } catch (error) {
      toast.error("Failed to delete the post.");
    }
  };

  if (loading) return <div className="loader">Loading...</div>;
  if (!post) return <div className="error">Post not found.</div>;

  return (
    <div className="single-post">
      <h2>{post.name}</h2>
      <img src={post.image} alt={post.name} />
      <p>{post.description}</p>
      <p><strong>Category:</strong> {post.section}</p>

      {/* ✅ Show icons only if user is logged in */}
      {user && (
        <div className="buttonGroup">
          <Link to={`/edit/${post._id}`}>
            <ModeEditIcon />
          </Link>
          <button onClick={() => removePhoto(post._id, post.name)}>
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default SinglePhoto;
