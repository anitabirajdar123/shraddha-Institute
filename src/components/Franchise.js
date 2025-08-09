import React, { useState } from "react";
import { Check, ChevronRight, Star, Award, Shield, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Franchise.css";

const Franchise = () => {
  const [showPackage, setShowPackage] = useState(false);

  const partnerPoints = [
    {
      title: "Low Investment, High Returns",
      desc: "Start your education business with minimal investment and proven profitability models.",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Complete Training & Support",
      desc: "Comprehensive training programs, marketing support, and ongoing business guidance.",
      icon: <Award size={24} />
    },
    {
      title: "Proven Curriculum",
      desc: "Time-tested teaching materials and methodologies with excellent student outcomes.",
      icon: <Shield size={24} />
    },
    {
      title: "Brand Recognition",
      desc: "Benefit from our established brand reputation and marketing expertise.",
      icon: <Star size={24} />
    },
  ];

  const franchisePackage = [
    { text: "Complete Teacher Training Certification", isNew: false },
    { text: "Student Learning Materials & Books", isNew: false },
    { text: "Marketing & Promotional Materials", isNew: false },
    { text: "Online Learning Management System", isNew: true },
    { text: "Business Setup & Operations Guide", isNew: false },
    { text: "Ongoing Support & Updates", isNew: false },
    { text: "Exclusive Access to New Course Launches", isNew: true },
    { text: "Monthly Webinars with Industry Experts", isNew: true },
  ];

  return (
    <section id="franchise" className="franchise-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="title-highlight">Franchise</span> Opportunity
          </h2>
          <p className="section-subtitle">
            Join our growing network of successful education entrepreneurs and
            make a difference in your community.
          </p>
          <div className="divider"></div>
        </motion.div>

        <div className="content-grid">
          {/* Left side - Why Partner */}
          <motion.div 
            className="partner-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-header">
              <h3 className="subheading">
                Why Partner <span className="highlight">With Us?</span>
              </h3>
              <div className="icon-wrapper">
                <HandshakeIcon />
              </div>
            </div>
            
            <div className="benefits-list">
              {partnerPoints.map((item, i) => (
                <motion.div
                  key={i}
                  className="benefit-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="benefit-icon">
                    {item.icon}
                  </div>
                  <div className="benefit-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Package */}
          <motion.div 
            className="package-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {showPackage ? (
                <motion.div
                  className="package-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  key="package-details"
                >
                  <h3 className="subheading">
                    Franchise <span className="highlight">Package</span>
                  </h3>
                  
                  <div className="package-list">
                    {franchisePackage.map((item, i) => (
                      <motion.div
                        key={i}
                        className="package-item"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <div className="check-wrapper">
                          <Check size={18} />
                        </div>
                        <span>
                          {item.text}
                          {item.isNew && <span className="new-badge">NEW</span>}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="package-preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  key="package-preview"
                >
                  <h3>Ready to Start Your Journey?</h3>
                  <p>Discover everything included in our comprehensive franchise package</p>
                  <div className="preview-highlights">
                    <span>Complete Training</span>
                    <span>Marketing Support</span>
                    <span>Ongoing Guidance</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              className="cta-button"
              onClick={() => setShowPackage(!showPackage)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {showPackage ? (
                <>
                  <span>Hide Details</span>
                  <ChevronRight className="rotate-90" />
                </>
              ) : (
                <>
                  <span>View Package Details</span>
                  <ChevronRight />
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Custom handshake icon component
const HandshakeIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 17l2 2a1 1 0 102 0l-3-3h1a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v9a2 2 0 002 2h1l-3 3a1 1 0 002 0l2-2" />
    <path d="M16 12h.01" />
    <path d="M13 12h.01" />
    <path d="M10 12h.01" />
  </svg>
);

export default Franchise;