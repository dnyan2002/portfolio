import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Code, Database, Cloud, Zap, Mail, Linkedin, MapPin, 
  Phone, ChevronRight, ExternalLink, Menu, X, Award,
  TrendingUp, Users, Clock, CheckCircle
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Python', 'SQL', 'JavaScript'],
    frameworks: ['Django', 'Django REST Framework', 'Frappe Framework', 'ERPNext'],
    databases: ['MySQL', 'MariaDB', 'PostgreSQL'],
    devops: ['AWS (EC2, S3, RDS)', 'Git', 'Linux', 'Windows Server'],
    iot: ['PLC Integration', 'Modbus Protocol', 'Real-time Data Pipelines', 'SCADA Systems']
  };

  const projects = [
    {
      title: 'Biogas Plant Real-Time Monitoring & Analytics',
      period: 'Jul 2025 – Nov 2025',
      tech: ['Python', 'Django', 'DRF', 'MySQL', 'IoT'],
      highlights: [
        'Processed real-time data from 15+ PLC devices across 3 biogas facilities',
        'Increased plant efficiency by 28% through predictive analytics',
        'Achieved 99.9% data synchronization reliability',
        'Reduced manual monitoring time by 60%'
      ],
      metrics: [
        { value: '28%', label: 'Efficiency Increase' },
        { value: '99.9%', label: 'Reliability' },
        { value: '60%', label: 'Time Saved' }
      ]
    },
    {
      title: 'Automated Leak Testing & IoT Monitoring System',
      period: 'Mar 2025 – Jun 2025',
      tech: ['Python', 'Django', 'MySQL', 'Modbus'],
      highlights: [
        'Processed 500+ daily test cycles with real-time PLC validation',
        'Reduced product defect rate by 18%',
        'Cut quality assurance cycle time by 45%',
        'Enhanced leak detection accuracy by 32%'
      ],
      metrics: [
        { value: '18%', label: 'Defect Reduction' },
        { value: '45%', label: 'Faster QA' },
        { value: '32%', label: 'Better Accuracy' }
      ]
    }
  ];

  const experience = [
    {
      role: 'Python Developer',
      company: 'AUTOMATION TEKNIX',
      period: 'Feb 2025 – Present',
      location: 'Pune, Maharashtra, India',
      achievements: [
        'Architected IoT monitoring systems for 5+ biogas plants processing 10,000+ PLC data points daily',
        'Engineered Django REST APIs serving 50+ concurrent users with 99.8% uptime',
        'Reduced manual QA workload by 40% through mechanized reporting',
        'Cut decision-making time by 35% with real-time dashboards'
      ]
    },
    {
      role: 'Python Developer Intern',
      company: 'ExcellentMinds',
      period: 'May 2024 – Feb 2025',
      location: 'Pune, Maharashtra, India',
      achievements: [
        'Enhanced ERPNext with 8+ custom modules, boosting efficiency by 25%',
        'Built Django APIs handling 1000+ daily transactions with 99.5% reliability',
        'Reduced deployment time from 2 hours to 15 minutes via CI/CD pipelines',
        'Improved system performance by 30% across enterprise clients'
      ]
    }
  ];

  const achievements = [
    { icon: <Award />, metric: '10+', description: 'Production Systems Deployed' },
    { icon: <TrendingUp />, metric: '99.8%', description: 'Average Uptime' },
    { icon: <Users />, metric: '$50K+', description: 'Annual Cost Savings' },
    { icon: <Clock />, metric: '40%', description: 'Development Acceleration' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">DP</span>
          </div>
          
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'experience', 'projects', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <button 
            className="mobile-menu-icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-badge">
            <div className="badge-line"></div>
            <span>Python Developer & IoT Solutions Architect</span>
          </div>
          
          <h1 className="hero-title">
            Dnyaneshwar Phuke
          </h1>
          
          <p className="hero-subtitle">
            Architecting scalable IoT solutions and industrial automation systems that drive operational excellence
          </p>
          
          <div className="hero-contacts">
            <a href="mailto:dnyaneshwarphuke200@gmail.com" className="contact-item">
              <Mail size={20} />
              <span>dnyaneshwarphuke200@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/dnyaneshwar-phuke" target="_blank" rel="noopener noreferrer" className="contact-item">
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
            <div className="contact-item">
              <Phone size={20} />
              <span>+91-9860331606</span>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <span>Pune, Maharashtra</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
              <ChevronRight size={20} />
            </a>
          </div>
        </div>

        {/* Animated Background */}
        <div className="hero-background">
          <div className="hero-circle hero-circle-1"></div>
          <div className="hero-circle hero-circle-2"></div>
          <div className="hero-circle hero-circle-3"></div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-metric">{achievement.metric}</div>
                <div className="achievement-description">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Building the future of industrial automation</p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                Results-driven Python Developer with 1+ year of experience architecting scalable web applications, 
                REST APIs, and IoT automation systems. Specialized in building industrial monitoring platforms that 
                increased operational efficiency by 40% and reduced downtime by 30%.
              </p>
              <p>
                Expertise in Django/DRF, PLC integration, and production-grade deployments. Proven track record of 
                delivering high-impact solutions for manufacturing and enterprise clients.
              </p>
            </div>

            <div className="skills-grid">
              <SkillCard icon={<Code size={24} />} title="Languages" skills={skills.languages} />
              <SkillCard icon={<Zap size={24} />} title="Frameworks" skills={skills.frameworks} />
              <SkillCard icon={<Database size={24} />} title="Databases" skills={skills.databases} />
              <SkillCard icon={<Cloud size={24} />} title="DevOps & Cloud" skills={skills.devops} />
              <SkillCard icon={<Zap size={24} />} title="Industrial IoT" skills={skills.iot} />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">Delivering impact across industries</p>
          </div>

          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div className="experience-left">
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">{exp.company}</div>
                  </div>
                  <div className="experience-right">
                    <div className="experience-period">{exp.period}</div>
                    <div className="experience-location">{exp.location}</div>
                  </div>
                </div>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>
                      <ChevronRight size={20} className="achievement-icon" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Transforming industries through innovation</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-period">{project.period}</div>
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <ul className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>
                      <CheckCircle size={16} className="highlight-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-metrics">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="metric">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="contact-title">Let's Build Something Amazing</h2>
            <p className="contact-subtitle">
              Looking for a Python developer with expertise in IoT, industrial automation, and scalable web applications?
            </p>
            
            <div className="contact-buttons">
              <a href="mailto:dnyaneshwarphuke200@gmail.com" className="btn-primary">
                <Mail size={20} />
                Send an Email
              </a>
              <a href="https://linkedin.com/in/dnyaneshwar-phuke" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>

            <div className="contact-info-grid">
              <div className="contact-info-item">
                <Mail size={24} />
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">dnyaneshwarphuke200@gmail.com</div>
                </div>
              </div>
              <div className="contact-info-item">
                <Phone size={24} />
                <div>
                  <div className="info-label">Phone</div>
                  <div className="info-value">+91-9860331606</div>
                </div>
              </div>
              <div className="contact-info-item">
                <MapPin size={24} />
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© 2026 Dnyaneshwar Phuke. All rights reserved.</p>
            <p>Crafted with passion for innovation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-icon">{icon}</div>
        <h3 className="skill-title">{title}</h3>
      </div>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-dot"></div>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;