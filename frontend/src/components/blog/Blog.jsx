import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import blogsData from "../../data/blogs.json";
import "./blog.css";

const INITIAL_TAGS_SHOWN = 4;

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const [showAllTags, setShowAllTags] = useState(false);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    blogsData.forEach((blog) => {
      blog.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Determine which tags to show
  const visibleTags = showAllTags ? allTags : allTags.slice(0, INITIAL_TAGS_SHOWN);
  const hasMoreTags = allTags.length > INITIAL_TAGS_SHOWN;

  // Filter blogs based on search and tag
  const filteredBlogs = useMemo(() => {
    return blogsData.filter((blog) => {
      const searchMatch =
        searchTerm === "" ||
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase());

      const tagMatch = selectedTag === null || blog.tags.includes(selectedTag);

      return searchMatch && tagMatch;
    });
  }, [searchTerm, selectedTag]);

  // Handle tag selection with toggle
  const handleTagSelect = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="blog-section" id="blog">
      <h1>Blog</h1>

      {/* Search Controls */}
      <div className="blog-search-wrapper">
        <div className="blog-search-container">
          <input
            type="text"
            className="blog-search-input"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="blog-search-clear"
              onClick={() => setSearchTerm("")}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Tag Filter - Horizontal inline with Show More */}
        <div className="blog-filter-wrapper">
          <div className="blog-filter-header">
            <span className="blog-filter-label">Filter:</span>
            <div className="blog-filter-tags">
              <button
                className={`blog-tag-filter ${selectedTag === null ? "active" : ""}`}
                onClick={() => setSelectedTag(null)}
                title="Show all articles"
              >
                All
              </button>
              {visibleTags.map((tag) => (
                <button
                  key={tag}
                  className={`blog-tag-filter ${selectedTag === tag ? "active" : ""}`}
                  onClick={() => handleTagSelect(tag)}
                  title={`Filter by ${tag}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Show More/Less Button */}
          {hasMoreTags && (
            <button
              className="blog-filter-toggle-more"
              onClick={() => setShowAllTags(!showAllTags)}
            >
              {showAllTags ? "Show Less" : `Show More (${allTags.length - INITIAL_TAGS_SHOWN})`}
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <p className="blog-results-count">
        {filteredBlogs.length} article{filteredBlogs.length !== 1 ? "s" : ""} found
        {selectedTag && <span> • Filtered by "<strong>{selectedTag}</strong>"</span>}
      </p>

      <div className="blog-container">
        <div className="blog-grid">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <article key={blog.id} className="blog-card">
                {blog.image && (
                  <div className="blog-image-wrapper">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="blog-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.backgroundColor = '#d3d3d3';
                      }}
                    />
                  </div>
                )}
                <div className="blog-header">
                  <h2 className="blog-title">{blog.title}</h2>
                  <p className="blog-meta">
                    <span className="blog-date">{formatDate(blog.publication_date)}</span>
                    <span className="blog-category">{blog.category}</span>
                  </p>
                </div>

                <p className="blog-excerpt">{blog.excerpt}</p>

                <div className="blog-tags">
                  {blog.tags.map((tag) => (
                    <button
                      key={tag}
                      className="blog-tag-clickable"
                      onClick={() => handleTagSelect(tag)}
                      title={`Filter by ${tag}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <Link to={`/blog/${blog.id}`} className="blog-read-more">
                  Read More →
                </Link>

                {index !== filteredBlogs.length - 1 && <div className="blog-divider" />}
              </article>
            ))
          ) : (
            <div className="blog-no-results">
              <p>No articles found matching your search or filter.</p>
              <button
                className="blog-reset-button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTag(null);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
