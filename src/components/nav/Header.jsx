// Header.jsx
import React from "react";
import { FaSearch } from "react-icons/fa"; // Tiny search icon
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="dashboard-header d-flex justify-content-end align-items-center px-3 py-2">
      <div className="d-flex align-items-center gap-3 flex-wrap">
        {/* Search Icon */}
        <FaSearch onClick={() => navigate("/search")} className="search-icon" />

        {/* Links */}
        <Link to="#" className="header-link">Login</Link>
        <Link to="#" className="header-link">About</Link>
      </div>
    </header>
  );
};

export default Header;