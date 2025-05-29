import React from 'react';
import { NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
function Navbar() {
  /** The Navbar provides minimal top navigation for the Dream Journal Visualizer app. */
  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div className="logo">
          <span className="logo-symbol">*</span> Dreamscape Haven
        </div>
        <div style={{ display: 'flex', gap: '18px', alignItems: 'center', fontWeight: 500 }}>
          <NavLink exact="true" to="/" className="btn" style={({ isActive }) => isActive ? { backgroundColor: "#E87A41" } : {}}>Home</NavLink>
          <NavLink to="/entry" className="btn" style={({ isActive }) => isActive ? { backgroundColor: "#E87A41" } : {}}>New Entry</NavLink>
          <NavLink to="/archive" className="btn" style={({ isActive }) => isActive ? { backgroundColor: "#E87A41" } : {}}>Archive</NavLink>
          <NavLink to="/about" className="btn" style={({ isActive }) => isActive ? { backgroundColor: "#E87A41" } : {}}>About</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
