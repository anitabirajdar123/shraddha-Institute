import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import "./Franchise.css";

// Animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 },
  }),
};

const Franchise = () => {
  const [showPackage, setShowPackage] = useState(false);

  const partnerPoints = [
    {
      title: "Low Investment, High Returns",
      desc: "Start your education business with minimal investment and proven profitability models.",
    },
    {
      title: "Complete Training & Support",
      desc: "Comprehensive training programs, marketing support, and ongoing business guidance.",
    },
    {
      title: "Proven Curriculum",
      desc: "Time-tested teaching materials and methodologies with excellent student outcomes.",
    },
    {
      title: "Brand Recognition",
      desc: "Benefit from our established brand reputation and marketing expertise.",
    },
  ];

  const franchisePackage = [
    { text: "Complete Teacher Training Certification" },
    { text: "Student Learning Materials & Books" },
    { text: "Marketing & Promotional Materials" },
    { text: "Online Learning Management System", isNew: true },
    { text: "Business Setup & Operations Guide" },
    { text: "Ongoing Support & Updates" },
    { text: "Exclusive Access to New Course Launches", isNew: true },
    { text: "Monthly Webinars with Industry Experts", isNew: true },
  ];

  return (
    <section id="franchise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Franchise Opportunity</h2>
          <p className="section-subtitle">
            Join our growing network of successful education entrepreneurs and
            make a difference in your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side */}
          <motion.div
            className="why-partner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInLeft}
          >
            <h3 className="subheading">Why Partner With Us?</h3>
            <div className="partner-points">
              {partnerPoints.map((item, i) => (
                <motion.div
                  key={i}
                  className="point"
                  custom={i + 1}
                  variants={fadeInLeft}
                >
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
  className="franchise-package"
  initial="hidden"
  animate={showPackage ? "visible" : "hidden"}
  variants={fadeInRight}
>
  {showPackage && (
    <>
      <h3 className="subheading text-center">
        Franchise Package Includes
      </h3>
      <div className="package-list">
        {franchisePackage.map((item, i) => (
          <motion.div
            key={i}
            className="package-item"
            custom={i + 1}
            variants={fadeInRight}
          >
            <div className="check-icon">
              <Check size={16} color="white" />
            </div>
            <span>
              {item.text}
              {item.isNew && <span className="badge-new">NEW</span>}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  )}

  {/* Button always rendered, outside the conditional */}
  <button
    className="btn-franchise"
    onClick={() => setShowPackage(!showPackage)}
  >
    {showPackage ? "Hide Package Details" : "Start Your Franchise Journey"}
  </button>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Franchise;
