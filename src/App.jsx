import "./index.css";
import { Github, Linkedin, Mail } from "lucide-react";
import profile from "./assets/profile.jpg";
import resume from "./assets/Akshara_Gupta_Resume.pdf";
import ach1 from "./assets/achievement1.jpg";
import ach2 from "./assets/achievement2.jpg";
import ach3 from "./assets/achievement3.jpg";



export default function App() {
  return (
    <div className="app-root">
      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="logo">Akshara Portfolio</h1>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
           <a href="#experience" className="nav-pill">Experience</a>
  <a href="#certifications" className="nav-pill">Certifications</a>
  <a href="#achievements" className="nav-pill">Achievements</a>

          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h2>
            Akshara <span>Gupta</span>
          </h2>
          <p>
            B.Tech CSE · AI & Full Stack Developer
            <br />
            Research-Driven Engineer
          </p>

          <div className="hero-actions">
            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn primary">View Resume</a>

            <a
              href="https://github.com/akshara2006-psit"
              target="_blank"
              className="btn icon"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/akshara-gupta-b47231334"
              target="_blank"
              className="btn icon"
            >
              <Linkedin />
            </a>
          </div>
        </div>

        {/* IMAGE RIGHT */}
        <div className="hero-image">
          <img src={profile} alt="Akshara Gupta" />
        </div>

        <div className="purple-blur"></div>
      </section>

      {/* ABOUT */}
  
     <section id="about" className="about-section">
  <div className="about-card">
    <h2 className="section-title">About Me</h2>

    <p className="about-para">
      I am <strong>Akshara Gupta</strong>, a Computer Science Engineering
      undergraduate with a strong inclination toward building impactful,
      user-centric web applications.
    </p>

    <p className="about-para">
      My core interests lie in <strong>React development, AI-driven solutions,
      and modern UI/UX design</strong>. I enjoy transforming complex ideas into
      clean, scalable, and visually appealing products.
    </p>

    <p className="about-para">
      I actively participate in hackathons, research projects, and technical
      leadership roles, focusing on domains such as healthcare, mental health,
      and socially relevant technology.
    </p>

    <div className="about-highlights">
      <div className="about-box">🚀 Frontend & React Developer</div>
      <div className="about-box">💡 Hackathons & Research</div>
      <div className="about-box">🎨 Dark UI & Modern Design</div>
      <div className="about-box">🌱 Continuous Learner</div>
    </div>
  </div>
</section>


      {/* SKILLS */}
      <section id="skills" className="section">
        <h3>Skills</h3>

        <div className="grid">
          {[
            "C",
            "C++",
            "Python",
            "Java",
            "JavaScript",
            "React",
            "HTML",
            "CSS",
            "MySQL",
            "Git",
            "AI / ML",
            "DSA",
          ].map((skill) => (
            <div key={skill} className="card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
     <section id="projects" className="section">
  <h3>Projects</h3>

  <div className="grid two">
    {/* MASKTERS */}
    <div className="card project">
      <h4>Maskters</h4>
      <p>
        AI-based system to detect fake internship portals and
        e-commerce scams using link analysis and scoring algorithms.
      </p>

      <div className="project-footer">
        <span className="badge">🏆 ProTech 2024 Finalist</span>

        <a
          href="https://github.com/akshara2006-psit/MASKTERS"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </div>

    {/* HERCAREPLUS */}
    <div className="card project">
      <h4>HerCarePlus</h4>
      <p>
        AI-powered women’s health platform with nutrition planning,
        mental health support, SOS alerts, and reminders.
      </p>

      <div className="project-footer">
        <a
          href="https://github.com/akshara2006-psit/hercareplusapp"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </div>

    {/* MENTAL HEALTH APP */}
    <div className="card project">
      <h4>Mental Health Management App</h4>
      <p>
        Web application for monitoring mental well-being and
        providing online support resources.
      </p>

      <div className="project-footer">
        <span className="badge">🏆 TechExpo 2024 Winner</span>

        <a
          href="https://github.com/akshara2006-psit/project-mental-health-web-application"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </div>
  </div>
</section>

<section id="experience" className="experience-section">
  <h2 className="section-title">Experience & Leadership</h2>

  <div className="experience-grid">
    <div className="experience-card">
      <h3>Chairperson — IEEE Power & Energy Society</h3>
      <span className="exp-meta">PSIT Student Branch | 2025 – Present</span>
      <p>
        Leading technical initiatives, organizing workshops and seminars,
        mentoring students, and coordinating IEEE chapter-level activities.
      </p>
    </div>

    <div className="experience-card">
      <h3>Technical Lead & Track Coordinator</h3>
      <span className="exp-meta">ICNGTSE 2025 (International Conference)</span>
      <p>
        Managed multiple technical tracks, reviewed research submissions,
        coordinated speaker sessions, and collaborated with academic
        professionals and industry experts.
      </p>
    </div>
  </div>
</section>
<section id="certifications" className="cert-section">
  <h2 className="section-title">Certifications</h2>

  <div className="cert-grid">
    <div className="cert-card">✔ Google Cloud Fundamentals</div>
    <div className="cert-card">✔ AI & Machine Learning Basics</div>
    <div className="cert-card">✔ Full Stack Web Development</div>
    <div className="cert-card">✔ Data Structures & Algorithms</div>
    <div className="cert-card">✔ Hackathon & Innovation Programs</div>
  </div>
</section>

<section id="achievements" className="section-wrap relative overflow-hidden">
  <h3 className="section-title">Achievements & Co-curricular</h3>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-12">

    {/* Card 1 */}
    <div className="achievement-card">
      <img src={ach1} alt="Hackathon Achievement" />
      <div className="achievement-text">
        <h4> Smart PSIT Hackathon Finalist</h4>
        
      </div>
    </div>

    {/* Card 2 */}
    <div className="achievement-card">
      <img src={ach2} alt="IEEE Activity" />
      <div className="achievement-text">
        <h4>Techexpo winner</h4>
       
      </div>
    </div>

    {/* Card 3 */}
    <div className="achievement-card">
      <img src={ach3} alt="Conference" />
      <div className="achievement-text">
        <h4>Protech finalist</h4>
        
      </div>
    </div>

  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h3>Contact</h3>

        <a href="mailto:gakshara21@gmail.com" className="btn primary">
          <Mail /> Email Me
        </a>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Akshara Gupta
      </footer>
    </div>
  );
}
