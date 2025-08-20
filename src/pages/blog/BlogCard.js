import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import './BlogCard.css';

const BlogCard = ({ 
  id, 
  title, 
  excerpt, 
  category, 
  date, 
  readTime, 
  image, 
  featured = false 
}) => {
  return (
    <Card className={`blog-card ${featured ? 'featured' : ''} h-100`}>
      <div className="card-image-container">
        <Card.Img variant="top" src={image} alt={title} />
        <div className="category-badge">{category.replace('-', ' ')}</div>
      </div>
      <Card.Body>
        <div className="card-meta mb-3">
          <span className="me-3">
            <FaCalendarAlt className="me-1" />
            {date}
          </span>
          <span>
            <FaClock className="me-1" />
            {readTime}
          </span>
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{excerpt}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0">
        <Link to={`/blog/${id}`} className="read-more-link">
          Read more <FaArrowRight className="ms-1" />
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default BlogCard;