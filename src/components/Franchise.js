import React, { useState } from "react";
import { Check, Star, Award, Shield, TrendingUp } from "lucide-react";
import "./Franchise.css";

const Franchise = () => {
  const [showPackage, setShowPackage] = useState(false);

  const partnerPoints = [
    {
      icon: <TrendingUp className="icon" />,
      title: "Low Investment, High Returns",
      desc: "Start your own education business with minimal investment and earn great profits.",
    },
    {
      icon: <Shield className="icon" />,
      title: "Trusted Brand",
      desc: "Work with Shraddha Institute, trusted by 450+ teachers nationwide.",
    },
    {
      icon: <Award className="icon" />,
      title: "Training & Support",
      desc: "Get complete training, materials, and continuous support to grow.",
    },
    {
      icon: <Star className="icon" />,
      title: "Recognition & Awards",
      desc: "Earn rewards, recognition, and awards for your performance.",
    },
  ];

  return (
    <section className="franchise">
      <div className="container">
        <h2 className="heading">Start Your Franchise Journey</h2>
        <p className="subheading">
          Join Shraddha Institute and become a successful entrepreneur in the field of Abacus & Vedic Maths.
        </p>

        <div className="grid">
          {partnerPoints.map((point, index) => (
            <div className="card" key={index}>
              <div className="card-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>

        <div className="cta">
          <button className="btn" onClick={() => setShowPackage(!showPackage)}>
            {showPackage ? "Hide Package" : "View Franchise Package"}
          </button>
        </div>

        {showPackage && (
          <div className="package">
            <h3 className="package-title">Franchise Package</h3>
            <ul>
              <li>
                <Check className="check-icon" /> Complete Teacher Training
              </li>
              <li>
                <Check className="check-icon" /> Marketing Support
              </li>
              <li>
                <Check className="check-icon" /> Books & Materials
              </li>
              <li>
                <Check className="check-icon" /> Recognition & Awards
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Franchise;
