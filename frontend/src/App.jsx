
import { useEffect, useState } from 'react'
import './App.css'

function TechTag({ name, slug, color }) {
  return (
    <span className="tech-tag">
      <img
        src={`https://cdn.simpleicons.org/${slug}/${color}`}
        alt={`${name} logo`}
        loading="lazy"
      />
      {name}
    </span>
  )
}

function App() {
  const [backendStatus, setBackendStatus] = useState('Memeriksa...')
  const [activeSection, setActiveSection] = useState('home')
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        setBackendStatus(data.status === 'success' ? 'Terhubung' : 'Tidak terhubung')
      })
      .catch(() => setBackendStatus('Tidak terhubung'))
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 450)

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    {
      title: 'Web Development',
      description: 'Membangun antarmuka website yang responsif dan interaktif.',
      items: [
        { name: 'HTML5', slug: 'html5', color: 'E34F26' },
        { name: 'CSS3', slug: 'css3', color: '1572B6' },
        { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
        { name: 'React', slug: 'react', color: '61DAFB' },
      ],
    },
    {
      title: 'Backend & Database',
      description: 'Mengembangkan layanan aplikasi dan pengelolaan data.',
      items: [
        { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E' },
        { name: 'Express', slug: 'express', color: 'FFFFFF' },
        { name: 'MySQL', slug: 'mysql', color: '4479A1' },
      ],
    },
    {
      title: 'Data, Tools & Cloud',
      description: 'Mengeksplorasi pengolahan data, version control, dan cloud.',
      items: [
        { name: 'Python', slug: 'python', color: '3776AB' },
        { name: 'Linux', slug: 'linux', color: 'FCC624' },
        { name: 'Git', slug: 'git', color: 'F05032' },
        { name: 'GitHub', slug: 'github', color: 'FFFFFF' },
      ],
    },
  ]

  const projects = [
    {
      category: 'NATURAL LANGUAGE PROCESSING',
      title: 'Sentiment Analysis on X',
      description:
        'Penelitian analisis sentimen terhadap isu pelecehan seksual di Indonesia menggunakan preprocessing teks, TF-IDF, dan Support Vector Machine.',
      tools: [
        { name: 'X Platform', slug: 'x', color: 'FFFFFF' },
        { name: 'Python', slug: 'python', color: '3776AB' },
        { name: 'Scikit-learn', slug: 'scikitlearn', color: 'F7931E' },
      ],
    },
    {
      category: 'INTERNET OF THINGS',
      title: 'Smart Room System',
      description:
        'Pengembangan sistem smart room dengan ESP32, Supabase, dan dashboard untuk mengelola pencahayaan serta status keamanan.',
      tools: [
        { name: 'Espressif', slug: 'espressif', color: 'E7352C' },
        { name: 'Supabase', slug: 'supabase', color: '3FCF8E' },
      ],
    },
    {
      category: 'CLOUD ENGINEERING',
      title: 'Cloud Full-Stack Project',
      description:
        'Eksplorasi pengembangan aplikasi full-stack dengan frontend React, backend Express, REST API, dan persiapan deployment.',
      tools: [
        { name: 'React', slug: 'react', color: '61DAFB' },
        { name: 'Express', slug: 'express', color: 'FFFFFF' },
        { name: 'GitHub', slug: 'github', color: 'FFFFFF' },
      ],
    },
  ]

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home">Kayla Pashya Ependi</a>
        <nav>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content reveal">
            <p className="eyebrow">INFORMATION SYSTEMS STUDENT · 2026</p>
            <h1>
              Turning curiosity into <span>digital possibilities.</span>
            </h1>
            <h2>Hi, I'm Kayla Pashya Ependi.</h2>
            <p>
              Mahasiswa Sistem Informasi Universitas Gunadarma yang memiliki
              ketertarikan pada web development, system analysis, dan cloud
              computing. Saya senang mempelajari teknologi dan mengembangkan
              solusi digital yang bermanfaat.
            </p>
            <div className="hero-buttons">
              <a className="btn-primary" href="#projects">Explore My Work ↗</a>
              <a className="btn-outline" href="#about">More About Me</a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="profile-card">
              <span className="card-label">PERSONAL PORTFOLIO</span>
              <div className="profile-symbol">K</div>
              <h3>Kayla Pashya Ependi</h3>
              <p>Information Systems</p>
              <div className="card-line"></div>
              <span className="card-footer">LEARNING · BUILDING · GROWING</span>
            </div>
            <div className="floating-note">✳ Always Learning</div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="reveal">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>A little introduction<span>.</span></h2>
          </div>
          <div className="about-grid reveal">
            <h3>Curious mind.<br />Continuous growth.</h3>
            <div>
              <p>
                Halo! Saya Kayla, mahasiswa Program Studi Sistem Informasi,
                Fakultas Ilmu Komputer dan Teknologi Informasi, Universitas
                Gunadarma.
              </p>
              <p>
                Saya tertarik pada bagaimana teknologi dapat membantu
                menyelesaikan permasalahan melalui sistem yang efektif.
                Ketertarikan ini mendorong saya untuk terus mengeksplorasi
                pengembangan web, pengolahan data, analisis sistem, dan cloud
                computing.
              </p>
              <p>
                Saat ini saya juga mengikuti Cloud Engineer Bootcamp untuk
                memperluas pemahaman mengenai infrastruktur dan layanan cloud.
              </p>
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="reveal">
            <p className="eyebrow">02 / MY TOOLKIT</p>
            <h2>Skills & Technologies<span>.</span></h2>
            <p className="section-description">
              Teknologi dan tools yang saya pelajari dan gunakan dalam proses
              pengembangan.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article
                className="skill-card reveal"
                key={skill.title}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="skill-number">0{index + 1}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <TechTag key={item.name} {...item} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="reveal">
            <p className="eyebrow">03 / SELECTED WORKS</p>
            <h2>Ideas into projects<span>.</span></h2>
            <p className="section-description">
              Beberapa eksplorasi dan proyek yang menjadi bagian dari perjalanan
              akademik serta pengembangan kemampuan saya.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className="project-card reveal"
                key={project.title}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`project-visual visual-${index + 1}`}>
                  <span>PROJECT / 0{index + 1}</span>
                  <strong>{project.category}</strong>
                  <span className="visual-symbol">✳</span>
                </div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="skill-tags">
                    {project.tools.map((tool) => (
                      <TechTag key={tool.name} {...tool} />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact reveal" id="contact">
          <p className="eyebrow">04 / LET'S CONNECT</p>
          <h2>Let's create something<br />meaningful<span>.</span></h2>
          <p className="contact-intro">
            Terbuka untuk berbagi ide, belajar bersama, dan kesempatan
            kolaborasi di bidang teknologi.
          </p>

          <div className="contact-grid">
            <a
              className="contact-card"
              href="https://wa.me/6281314363847"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">☎</span>
              <span className="contact-label">PHONE / WHATSAPP</span>
              <strong>+62 813-1436-3847</strong>
              <span className="contact-link">Send a message ↗</span>
            </a>

            <a
              className="contact-card"
              href="https://www.linkedin.com/in/kayla-pashya-ependi-586474440/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon linkedin-icon">in</span>
              <span className="contact-label">LINKEDIN</span>
              <strong>Kayla Pashya Ependi</strong>
              <span className="contact-link">Visit my profile ↗</span>
            </a>
          </div>

          <a className="btn-light" href="#home">Back to Top ↑</a>
        </section>
      </main>

      <footer>
        <div>
          <strong>Kayla Pashya Ependi</strong>
          <p>Designed with curiosity and built with purpose.</p>
        </div>
        <span className="backend-status">
          <span className="status-dot"></span>
          Backend: {backendStatus}
        </span>
      </footer>

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Kembali ke atas"
        title="Back to top"
      >
        ↑
      </button>
    </>
  )
}

export default App
