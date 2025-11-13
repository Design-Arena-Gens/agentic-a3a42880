'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">AM</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Alex Morgan</h1>
          <p className="title">Full Stack Developer & Creative Problem Solver</p>
          <p>I craft elegant solutions to complex problems, building modern web applications that make a difference.</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p>Passionate developer with a love for clean code and great UX</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hi! I'm Alex, a full stack developer with 5+ years of experience building scalable web applications.
                I specialize in React, Node.js, and modern JavaScript frameworks, but I'm always eager to learn new technologies.
              </p>
              <p>
                My approach combines technical expertise with a deep understanding of user needs. I believe that great
                software is not just about writing code—it's about solving real problems and creating experiences that
                people love to use.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, writing technical articles,
                or exploring the latest trends in web development. Let's build something amazing together!
              </p>
            </div>
            <div className="about-image">
              👨‍💻
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>A selection of my recent work</p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">🚀</div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>A full-featured online marketplace with real-time inventory, payment processing, and admin dashboard.</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">Stripe</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">📱</div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>Collaborative project management tool with real-time updates, team chat, and analytics.</p>
                <div className="project-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">WebSocket</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">🎨</div>
              <div className="project-content">
                <h3>Design System Library</h3>
                <p>Comprehensive component library with documentation, theming, and accessibility features.</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Storybook</span>
                  <span className="tag">CSS-in-JS</span>
                  <span className="tag">a11y</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">📊</div>
              <div className="project-content">
                <h3>Analytics Dashboard</h3>
                <p>Real-time data visualization platform with customizable widgets and interactive charts.</p>
                <div className="project-tags">
                  <span className="tag">Vue.js</span>
                  <span className="tag">D3.js</span>
                  <span className="tag">Express</span>
                  <span className="tag">Redis</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">🔐</div>
              <div className="project-content">
                <h3>Authentication Service</h3>
                <p>Secure OAuth 2.0 authentication system with SSO, MFA, and user management.</p>
                <div className="project-tags">
                  <span className="tag">Node.js</span>
                  <span className="tag">JWT</span>
                  <span className="tag">Docker</span>
                  <span className="tag">AWS</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">🌐</div>
              <div className="project-content">
                <h3>Social Media Platform</h3>
                <p>Community-driven platform with posts, comments, likes, and user profiles.</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">GraphQL</span>
                  <span className="tag">Prisma</span>
                  <span className="tag">AWS S3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="section-header">
            <h2>Skills & Expertise</h2>
            <p>Technologies I work with</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>🎯 Frontend</h3>
              <ul>
                <li>React & Next.js</li>
                <li>Vue.js & Nuxt.js</li>
                <li>TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                <li>Redux & Context API</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>⚙️ Backend</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>PostgreSQL & MongoDB</li>
                <li>Redis</li>
                <li>Microservices</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>🛠️ Tools & DevOps</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker & Kubernetes</li>
                <li>AWS & Vercel</li>
                <li>CI/CD Pipelines</li>
                <li>Jest & Testing Library</li>
                <li>Webpack & Vite</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>💡 Soft Skills</h3>
              <ul>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Agile Methodology</li>
                <li>Code Review</li>
                <li>Technical Writing</li>
                <li>Mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Let's work together on your next project</p>
          </div>
          <div className="contact-content">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button type="submit" className="btn submit-btn">Send Message</button>
            </form>

            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <span>G</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span>L</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <span>T</span>
              </a>
              <a href="mailto:alex@example.com" aria-label="Email">
                <span>@</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Alex Morgan. Built with passion and Next.js.</p>
        </div>
      </footer>
    </>
  );
}
