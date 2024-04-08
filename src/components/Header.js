import React from 'react';
import '../styles/headerStyles.css'; 

const Header = () => {
  return (
    <nav className="navbar">
      <h1>Tu Aplicación</h1>
      <div className="links">
        <a href="/">Inicio</a>
        <a href="/about">Acerca de</a>
      </div>
    </nav>
  );
}

export default Header;
