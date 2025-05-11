import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            © {currentYear} Fuzail Khan. All rights reserved.
          </p>
          <p className="footer-text">
            Built with ❤️ using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 