
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [backendStatus, setBackendStatus] = useState('Memeriksa...')

  useEffect(() => {
  fetch("/api/health")
      .then((response) => response.json())
      .then((data) => setBackendStatus(data.status === 'success' ? 'Terhubung' : 'Tidak terhubung'))
      .catch(() => setBackendStatus('Tidak terhubung'))
  }, [])

  const skills = [
    'HTML & CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Docker',
    'Git & GitHub',
    'Cloud Computing',
  ]

  const projects = [
    {
      number: '01',
      title: 'Website Portfolio',
      category: 'Web Development',
      description: 'Website portfolio pribadi untuk menampilkan profil, keahlian, dan hasil proyek.',
    },
    {
      number: '02',
      title: 'Sistem Informasi',
      category: 'Full-Stack Development',
      description: 'Aplikasi berbasis web dengan integrasi frontend dan backend.',
    },
    {
      number: '03',
      title: 'Cloud Deployment',
      category: 'Cloud Engineering',
      description: 'Implementasi aplikasi menggunakan Docker dan proses CI/CD.',
    },
  ]

  return (
    <>
      <header className="navbar">
        <a href="#beranda" className="brand">PORTOFOLIO<span>.</span></a>

        <nav>
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#keahlian">Keahlian</a>
          <a href="#proyek">Proyek</a>
          <a href="#kontak" className="nav-contact">Hubungi Saya</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="beranda">
          <div className="hero-content">
            <p className="eyebrow">SELAMAT DATANG DI PORTOFOLIO SAYA</p>
            <h1>Membangun Solusi Digital untuk <span>Masa Depan.</span></h1>
            <p className="hero-description">
              Halo! Saya seorang pengembang yang tertarik pada teknologi,
              pengembangan aplikasi, dan cloud computing. Saya senang
              mempelajari hal baru dan mengembangkan solusi digital.
            </p>

            <div className="hero-buttons">
              <a href="#proyek" className="btn-primary">Lihat Proyek</a>
              <a href="#tentang" className="btn-outline">Tentang Saya</a>
            </div>

            <div className="hero-note">
              <span className="status-dot"></span>
              Terus belajar, berkembang, dan berinovasi.
            </div>
          </div>

          <div className="hero-card">
            <div className="profile-symbol">DEV</div>
            <p className="profile-label">FOKUS PENGEMBANGAN</p>
            <h2>Technology & Innovation</h2>
            <div className="profile-tags">
              <span>Web Development</span>
              <span>Cloud Computing</span>
              <span>Information Systems</span>
            </div>
            <div className="card-footer">PORTOFOLIO DIGITAL</div>
          </div>
        </section>

        <section className="about section" id="tentang">
          <div className="section-heading">
            <p className="eyebrow">KENALI SAYA</p>
            <h2>Tentang Saya</h2>
          </div>
          <p className="about-description">
            Saya memiliki ketertarikan pada bidang teknologi informasi,
            khususnya pengembangan sistem informasi, pemrograman web,
            dan teknologi cloud. Melalui setiap proyek, saya berusaha
            mengembangkan kemampuan teknis, kreativitas, dan kemampuan
            dalam menyelesaikan masalah.
          </p>
        </section>

        <section className="skills section" id="keahlian">
          <div className="section-heading">
            <p className="eyebrow">KEMAMPUAN TEKNIS</p>
            <h2>Keahlian & Teknologi</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>
                <span className="skill-icon">✦</span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="projects section" id="proyek">
          <div className="section-heading">
            <p className="eyebrow">HASIL PENGEMBANGAN</p>
            <h2>Proyek Pilihan</h2>
            <p>Beberapa contoh proyek dan pengembangan yang saya kerjakan.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <span className="project-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="kontak">
          <p className="eyebrow">MARI TERHUBUNG</p>
          <h2>Punya ide atau proyek menarik?</h2>
          <p>Saya terbuka untuk berdiskusi, belajar, dan berkolaborasi.</p>
          <a href="mailto:emailanda@example.com" className="btn-light">
            Hubungi Saya ↗
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Portofolio Digital. Dikembangkan dengan React.</p>
        <span>Status Backend: {backendStatus}</span>
      </footer>
    </>
  )
}

export default App
