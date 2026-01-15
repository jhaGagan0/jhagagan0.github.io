import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar custom-navbar navbar-expand-lg ${
          darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
        } ${scrolled ? 'shadow-lg' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <div className="container-fluid px-4 px-md-5 d-flex justify-content-between align-items-center">
          {/* Logo2 */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src="https://i.postimg.cc/3xNT9TcL/logo-png.webp" alt="Logo" style={{ height: '30px' }} />
            <span>Gagan Jha</span>
          </a>

          <div className="d-lg-none">
            <button
              className="btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>

          <ul className="navbar-nav d-none d-lg-flex flex-row gap-3 align-items-center mb-0">
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
            <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            <li className="nav-item">
              <span
                onClick={() => setDarkMode(!darkMode)}
                style={{ cursor: 'pointer', fontSize: '1.2rem' }}
                title="Toggle light/dark mode"
              >
                {darkMode ? <FaSun color="white" /> : <FaMoon color="black" />}
              </span>
            </li>
          </ul>
        </div>
      </nav>

      {menuOpen && (
        <div
          className={`d-lg-none w-100 pt-2 ${
            darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
          }`}
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            zIndex: 999,
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <ul className="navbar-nav text-center d-flex flex-column gap-3 px-4 py-3">
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a href="#education" className="nav-link" onClick={() => setMenuOpen(false)}>Education</a> 
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
            <li className="nav-item">
              <span
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMenuOpen(false);
                }}
                className="nav-link d-flex justify-content-center align-items-center gap-2"
                style={{ cursor: 'pointer' }}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </span>
            </li>
          </ul>
        </div>
      )}

      <div style={{ height: '60px' }}></div>
    </>
  );
}
