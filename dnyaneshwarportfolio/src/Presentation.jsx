import React, { useState, useEffect } from 'react';
import './Presentation.css';
import { ChevronLeft, ChevronRight, Award, TrendingUp, Users, Clock } from 'lucide-react';

function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') previousSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="presentation">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>

      <div className="slides-container">
        {/* Slide 1: Title */}
        <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
          <div className="slide-content">
            <h1 className="pres-title">Dnyaneshwar Phuke</h1>
            <p className="pres-subtitle">Python Developer | IoT Solutions Architect</p>
            <p className="pres-tagline">
              Architecting scalable industrial automation systems and IoT solutions<br />
              that drive operational excellence
            </p>
            <div className="contact-info-pres">
              <p>📧 dnyaneshwarphuke200@gmail.com</p>
              <p>💼 linkedin.com/in/dnyaneshwar-phuke</p>
              <p>📱 +91-9860331606 | 📍 Pune, Maharashtra, India</p>
            </div>
          </div>
          <div className="slide-number">1 / 8</div>
        </div>

        {/* Slide 2: Impact Metrics */}
        <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
          <div className="slide-content">
            <h2 className="slide-title">Impact at a Glance</h2>
            <div className="metrics-grid-4">
              <div className="metric-box-pres">
                <Award size={48} className="metric-icon" />
                <div className="metric-value-pres">10+</div>
                <div className="metric-label-pres">Production Systems</div>
              </div>
              <div className="metric-box-pres">
                <TrendingUp size={48} className="metric-icon" />
                <div className="metric-value-pres">99.8%</div>
                <div className="metric-label-pres">Uptime Achieved</div>
              </div>
              <div className="metric-box-pres">
                <Users size={48} className="metric-icon" />
                <div className="metric-value-pres">$50K+</div>
                <div className="metric-label-pres">Annual Savings</div>
              </div>
              <div className="metric-box-pres">
                <Clock size={48} className="metric-icon" />
                <div className="metric-value-pres">40%</div>
                <div className="metric-label-pres">Faster Development</div>
              </div>
            </div>
            <p className="pres-centered-text">
              Delivering high-impact solutions across manufacturing and enterprise sectors
            </p>
          </div>
          <div className="slide-number">2 / 8</div>
        </div>

        {/* Slide 3: Professional Summary */}
        <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
          <div className="slide-content">
            <h2 className="slide-title">Professional Summary</h2>
            <div className="content-card">
              <p className="highlight-text">
                <span className="highlight-blue">1+ year</span> of experience building scalable web applications, REST APIs, and IoT automation systems
              </p>
              <ul className="pres-list">
                <li>Specialized in <span className="highlight-blue">industrial monitoring platforms</span> with 40% efficiency increase</li>
                <li>Expert in <span className="highlight-blue">Django/DRF</span>, PLC integration, and production deployments</li>
                <li>Proven track record with <span className="highlight-blue">5+ biogas plants</span> and manufacturing facilities</li>
                <li>Reduced operational downtime by <span className="highlight-blue">30%</span> through predictive analytics</li>
              </ul>
            </div>
          </div>
          <div className="slide-number">3 / 8</div>
        </div>

        {/* Slide 4: Technical Skills */}
        <div className={`slide ${currentSlide === 3 ? 'active' : ''}`}>
          <div className="slide-content">
            <h2 className="slide-title">Technical Expertise</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>Core Technologies</h3>
                <div className="tech-tags">
                  <span className="tech-tag-pres">Python</span>
                  <span className="tech-tag-pres">Django</span>
                  <span className="tech-tag-pres">Django REST Framework</span>
                  <span className="tech-tag-pres">SQL</span>
                  <span className="tech-tag-pres">JavaScript</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Infrastructure & Data</h3>
                <div className="tech-tags">
                  <span className="tech-tag-pres">AWS (EC2, S3, RDS)</span>
                  <span className="tech-tag-pres">MySQL</span>
                  <span className="tech-tag-pres">PostgreSQL</span>
                  <span className="tech-tag-pres">Linux</span>
                  <span className="tech-tag-pres">Git</span>
                </div>
              </div>
            </div>
            <div className="tech-category" style={{ marginTop: '2rem' }}>
              <h3>Industrial IoT</h3>
              <div className="tech-tags">
                <span className="tech-tag-pres">PLC Integration</span>
                <span className="tech-tag-pres">Modbus Protocol</span>
                <span className="tech-tag-pres">Real-time Data Pipelines</span>
                <span className="tech-tag-pres">SCADA Systems</span>
                <span className="tech-tag-pres">Frappe/ERPNext</span>
              </div>
            </div>
          </div>
          <div className="slide-number">4 / 8</div>
        </div>

        {/* Slide 5: Current Role */}
        <div className={`slide ${currentSlide === 4 ? 'active' : ''}`}>
          <div className="slide-content">
            <h2 className="slide-title">AUTOMATION TEKNIX</h2>
            <h3 className="slide-subtitle-small">Python Developer (Feb 2025 – Present)</h3>
            <div className="content-card">
              <ul className="pres-list">
                <li>Architected IoT monitoring systems for <span className="highlight-blue">5+ biogas plants</span> processing <span className="highlight-blue">10,000+ PLC data points daily</span></li>
                <li>Engineered Django REST APIs serving <span className="highlight-blue">50+ concurrent users</span> with <span className="highlight-blue">99.8% uptime</span></li>
                <li>Reduced manual QA workload by <span className="highlight-blue">40%</span> through mechanized reporting</li>
                <li>Cut decision-making time by <span className="highlight-blue">35%</span> with real-time dashboards and analytics</li>
                <li>Delivered operator-friendly interfaces with Excel/PDF export capabilities</li>
              </ul>
            </div>
          </div>
          <div className="slide-number">5 / 8</div>
        </div>

        {/* Slide 6: Project 1 */}
        <div className={`slide ${currentSlide === 5 ? 'active' : ''}`}>
          <div className="slide-content">
            <h2 className="slide-title">Featured Project</h2>
            <h3 className="slide-subtitle-small">Biogas Plant Real-Time Monitoring & Analytics</h3>
            <p className="project-tech-line">Python • Django • DRF • MySQL • IoT | Jul 2025 – Nov 2025</p>
            <div className="two-column-grid">
              <div className="content-card">
                <h4>Technical Implementation</h4>
                <ul className="pres-list-small">
                  <li>Real-time data from <span className="highlight-blue">15+ PLC devices</span></li>
                  <li>Multi-device configuration with scheduled Windows services</li>
                  <li><span className="highlight-blue">99.9%</span> data synchronization reliability</li>
                  <li>Modbus protocol integration</li>
                </ul>
              </div>
              <div className="content-card">
                <h4>Business Impact</h4>
                <ul className="pres-list-small">
                  <li><span className="highlight-blue">28%</span> increase in plant efficiency</li>
                  <li><span className="highlight-blue">22%</span> optimization in biogas output</li>
                  <li><span className="highlight-blue">60%</span> reduction in manual monitoring</li>
                  <li>Serving <span className="highlight-blue">25+ stakeholders</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slide-number">6 / 8</div>
        </div>

        {/* Slide 7: Project 2 */}
        <div className={`slide ${currentSlide === 6 ? 'active' : ''}`}>
          <div className="slide-content">
            <h2 className="slide-title">Featured Project</h2>
            <h3 className="slide-subtitle-small">Automated Leak Testing & IoT Monitoring</h3>
            <p className="project-tech-line">Python • Django • MySQL • Modbus | Mar 2025 – Jun 2025</p>
            <div className="two-column-grid">
              <div className="content-card">
                <h4>System Capabilities</h4>
                <ul className="pres-list-small">
                  <li>Processing <span className="highlight-blue">500+ daily test cycles</span></li>
                  <li>Real-time PLC data validation via Modbus</li>
                  <li>Configurable test parameters</li>
                  <li>Advanced reporting with Excel/PDF export</li>
                </ul>
              </div>
              <div className="content-card">
                <h4>Quality Improvements</h4>
                <ul className="pres-list-small">
                  <li><span className="highlight-blue">18%</span> reduction in product defect rate</li>
                  <li><span className="highlight-blue">45%</span> faster QA cycle time</li>
                  <li><span className="highlight-blue">32%</span> improved leak detection accuracy</li>
                  <li>Serving <span className="highlight-blue">20+ manufacturing personnel</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slide-number">7 / 8</div>
        </div>

        {/* Slide 8: Closing */}
        <div className={`slide ${currentSlide === 7 ? 'active' : ''}`}>
          <div className="slide-content">
            <h2 className="slide-title">Let's Build Something Amazing</h2>
            <div className="content-card closing-card">
              <p className="closing-message">
                Ready to bring IoT and automation expertise to your next project
              </p>
              <div className="closing-contacts">
                <p className="contact-item-large">📧 dnyaneshwarphuke200@gmail.com</p>
                <p className="contact-item-large">💼 linkedin.com/in/dnyaneshwar-phuke</p>
                <p className="contact-item-large">📱 +91-9860331606</p>
              </div>
            </div>
            <p className="thank-you">Thank you for your time!</p>
          </div>
          <div className="slide-number">8 / 8</div>
        </div>
      </div>

      {/* Navigation */}
      <div className="navigation">
        <button
          className="nav-btn-pres"
          onClick={previousSlide}
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        
        <div className="slide-indicators">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <button
          className="nav-btn-pres"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Presentation;