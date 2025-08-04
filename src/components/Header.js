// File: src/components/Header.js
import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Header = () => {
  return (
    <header style={styles.header}>
         {/* Topbar */}
            <div className="bg-blue-600 text-white text-sm py-2 px-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="flex items-center gap-1"><FaPhoneAlt /> +91- 98 995 11 178</span>
                <span className="flex items-center gap-1"><FaMapMarkerAlt /> D-2/22, LGF, ARDEE CITY, SECTOR-52, GURGAON-122011</span>
              </div>
              <div className="flex items-center gap-1">
                <FaClock />
                <span className="italic font-medium">Opening Time : 9:30am–5:30pm</span>
              </div>
            </div>
      
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#f7f7f7ff",
    padding: "10px 0",
    fontSize: 14,
    color: "#333",
  },
  container: {
    maxWidth: 1200,
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
};

export default Header;
