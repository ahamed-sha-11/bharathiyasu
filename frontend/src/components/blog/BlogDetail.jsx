import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogsData from "../../data/blogs.json";
import NavBar from "../navbar/NavBar";
import "./blog-detail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/#blog");
  };

  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="blog-detail-wrapper">
        <NavBar />
        <div className="blog-detail-container">
          <p className="not-found">Blog post not found.</p>
          <button onClick={handleBack} className="back-button">
            ← Back
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="blog-detail-wrapper">
      <NavBar />
      <article className="blog-detail-container">
        <button onClick={handleBack} className="back-button">
          ← Back
        </button>

        <header className="blog-detail-header">
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-detail-meta">
            <span className="blog-detail-date">
              {formatDate(blog.publication_date)}
            </span>
            <span className="blog-detail-category">{blog.category}</span>
            <span className="blog-detail-author">By {blog.author}</span>
          </div>
        </header>

        <div className="blog-detail-content">
          <p>{blog.content}</p>
        </div>

        <div className="blog-detail-tags">
          <h4>Tags:</h4>
          <div className="blog-tags-list">
            {blog.tags.map((tag) => (
              <span key={tag} className="blog-tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
