import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch the post data based on the ID
  // This is just a placeholder structure
  return (
    <div className="blog-post-container">
      <article className="blog-post">
        <h1>Blog Post Title {id}</h1>
        <div className="post-meta">
          <span>Published on: June 15, 2023</span>
          <span>Category: Learning Tips</span>
        </div>
        <img 
          src="/path/to/blog/image.jpg" 
          alt="Blog post visual"
          className="post-image"
        />
        <div className="post-content">
          {/* Your blog content would go here */}
          <p>This is the full content of blog post {id}...</p>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;