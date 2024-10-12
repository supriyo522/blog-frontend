import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/api';
import './BlogFeed.css'; 

const BlogFeed = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await API.get('/blogs/location');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-container">
      <h2>Public Blog Feed</h2>
  
      
      <div>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
  
      {blogs.length === 0 ? (
        <p className="no-blogs">No blogs available in your location</p>
      ) : (
        blogs.map(blog => (
          <div key={blog._id} className="blog-post">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}  
export default BlogFeed;
