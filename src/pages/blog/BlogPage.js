import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BlogCard from './BlogCard';
import './BlogPage.css';
import blogImage1 from '../../assets/blog/vedicmaths.png';
import blogImage2 from '../../assets/blog/blog2.jpg';
import blogImage3 from '../../assets/blog/vedicmaths.png';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    { id: 1, title: "5 Fun Ways to Make Math Enjoyable for Kids", excerpt: "Discover creative techniques...", category: 'learning-tips', date: 'May 15, 2023', readTime: '4 min read', image: blogImage1, featured: true },
    { id: 2, title: "The Amazing Benefits of Abacus Training", excerpt: "How abacus training enhances...", category: 'abacus', date: 'April 28, 2023', readTime: '6 min read', image: blogImage2 },
    { id: 3, title: "How Abacus Boosts Memory and Concentration", excerpt: "Abacus learning is not just about numbers...", category: 'abacus', date: 'June 5, 2023', readTime: '5 min read', image: blogImage1 },
    { id: 4, title: "Top 7 Abacus Games to Play at Home", excerpt: "Engaging games parents can try...", category: 'abacus', date: 'July 20, 2023', readTime: '7 min read', image: blogImage3 },
    { id: 5, title: "Vedic Math Tricks Every Parent Should Know", excerpt: "Ancient calculation techniques...", category: 'vedic-math', date: 'April 10, 2023', readTime: '5 min read', image: blogImage3 },
    { id: 6, title: "10 Fast Calculation Tricks from Vedic Maths", excerpt: "From multiplication shortcuts...", category: 'vedic-math', date: 'June 18, 2023', readTime: '6 min read', image: blogImage2 },
    { id: 7, title: "Why Vedic Math is the Future of Learning", excerpt: "A modern approach to teaching mathematics...", category: 'vedic-math', date: 'August 1, 2023', readTime: '5 min read', image: blogImage1 },
  ];

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'learning-tips', name: 'Learning Tips' },
    { id: 'abacus', name: 'Abacus' },
    { id: 'vedic-math', name: 'Vedic Math' },
    
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="blog-page">
      {/* Hero Section */}
      <div className="blog-hero text-center text-white py-5" style={{background: 'linear-gradient(135deg, rgba(255,107,29,0.85), rgba(255,107,29,0.95))'}}>
        <Container>
          <h1 className="display-4 fw-bold mb-3">Shraddha Institute Blog</h1>
          <p className="lead mb-0">Expert insights on Abacus, Vedic Math, and child cognitive development</p>
        </Container>
      </div>

      {/* Categories Filter */}
      <Container className="py-5">
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map(cat => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? 'warning' : 'outline-warning'}
              className="rounded-pill px-4 py-2 fw-semibold"
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.some(p => p.featured) && (
          <div className="featured-post mb-5">
            <h2 className="section-title text-center mb-4">Featured Article</h2>
            <BlogCard {...filteredPosts.find(p => p.featured)} featured={true} />
          </div>
        )}

        {/* All Posts */}
        <div className="all-posts">
          <h2 className="section-title mb-4 text-center">
            {activeCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === activeCategory).name} Articles`}
          </h2>
          <Row className="g-4">
            {filteredPosts.filter(p => !p.featured).map(post => (
              <Col key={post.id} lg={4} md={6}>
                <BlogCard {...post} />
              </Col>
            ))}
          </Row>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section mt-5 p-4 p-lg-5 rounded-3 text-white" style={{background: 'linear-gradient(135deg, rgba(255,107,29,0.85), rgba(255,107,29,0.95))'}}>
          <Row className="align-items-center">
            <Col lg={6} className="mb-3 mb-lg-0">
              <h3 className="fw-bold">Stay Updated with Our Latest Posts</h3>
              <p className="mb-0">Subscribe to receive educational tips and updates directly in your inbox</p>
            </Col>
            <Col lg={6}>
              <div className="d-flex gap-2">
                <input type="email" className="form-control rounded-pill" placeholder="Your email address" />
                <Button variant="light" className="px-4 rounded-pill fw-bold text-orange">Subscribe</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default BlogPage;
