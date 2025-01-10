import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <header>
        <h1>E-Learn App</h1>
        <nav>
          <a href="#home" onClick={() => handleNavClick('home')}>
            Home
          </a>
          <a href="#courses" onClick={() => handleNavClick('courses')}>
            Courses
          </a>
          <a href="#announcements" onClick={() => handleNavClick('announcements')}>
            Announcements
          </a>
          <a href="#profile" onClick={() => handleNavClick('profile')}>
            Profile
          </a>
        </nav>
      </header>

      <div className="container">
        <section id="home" className={activeSection === 'home' ? 'active' : ''}>
          <h2>Welcome to SDC - E-Learn Platform!</h2>
          <p>
            SDC-E-Note is a simple and efficient note-taking app, designed to
            help users organize and sync their notes effortlessly.
          </p>

          <h3>Featured Courses</h3>
          <div className="card">
            <h3>Introduction to Programming</h3>
            <p>Get started with programming concepts using Python. Perfect for beginners!</p>
            <button onClick={() => window.location.href = 'c_programming.html'}>View Course</button>
          </div>
          <div className="card">
            <h3>Advanced Web Development</h3>
            <p>Learn advanced techniques in web design, including frameworks and modern JS libraries.</p>
            <button onClick={() => window.location.href = 'web-development-details.html'}>View Course</button>
          </div>

          <h3>Upcoming Events</h3>
          <div className="card">
            <h3>Web Development Bootcamp</h3>
            <p>Join us for an intensive 3-day bootcamp to learn modern web development practices.</p>
            <button onClick={() => window.location.href = 'register_process.html'}>Register Now</button>
          </div>
          <div className="card">
            <h3>Python Webinar</h3>
            <p>Join our live webinar where industry experts will discuss trends in Python and AI.</p>
            <button onClick={() => window.location.href = 'register_process.html'}>Register Now</button>
          </div>

          <h3>Get Started with E-Learn Today!</h3>
          <p>Sign up now to start exploring thousands of courses in various fields like technology, business, and more.</p>
          <button onClick={() => window.location.href = 'register_process.html'}>Sign Up Now</button>
        </section>
      </div>
    </div>
  );
}

export default App;
