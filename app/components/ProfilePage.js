"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Random Project",
    description:
      "A practical IT project exploring how thoughtful network planning can make everyday connectivity more reliable and easier to manage.",
  },
  {
    title: "Campus LAN Design & VLAN Segmentation",
    description:
      "Designed a multi-department campus network in Cisco Packet Tracer, using VLANs and inter-VLAN routing to organize traffic and improve network management.",
  },
  {
    title: "Small Office Network Security & Monitoring Setup",
    description:
      "Planned a small-office network with firewall rules, role-based user access, and a lightweight server-monitoring workflow for safer, more dependable operations.",
  },
];

const noteHeadings =
  "Problem Statement & Purpose\n\nMy Exact Role\n\nKey Features & Functionalities Used";

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "pin") {
    return (
      <svg {...common}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }
  if (name === "github") {
    return (
      <svg {...common}>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.6 1.2 15 3a13.2 13.2 0 0 0-7 0C5.4 1.2 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.7V22" />
      </svg>
    );
  }
  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M7 3h10v18H7z" />
      <path d="M10 7h4m-4 4h4m-4 4h4" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, detail }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {detail && <p>{detail}</p>}
    </div>
  );
}

export default function ProfilePage() {
  const [notes, setNotes] = useState(
    () => projects.map(() => noteHeadings),
  );
  const [savedProjects, setSavedProjects] = useState({});

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  function updateNote(index, value) {
    setNotes((current) =>
      current.map((note, noteIndex) => (noteIndex === index ? value : note)),
    );
    setSavedProjects((current) => ({ ...current, [index]: false }));
  }

  return (
    <>
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-glow ambient-glow-one" />
        <div className="ambient-glow ambient-glow-two" />
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Zennie Mae Culhi home">
          <span className="brand-mark">Z</span>
          <span>ZENNIE<span className="brand-dot">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s talk <Icon name="arrow" size={15} /></a>
      </header>

      <main>
        <section className="hero page-shell" id="home">
          <div className="hero-copy reveal">
            <span className="hero-kicker"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</span>
            <p className="hero-greeting">Hello, I&apos;m</p>
            <h1><span className="animated-name">Zennie Mae Culhi</span></h1>
            <p className="hero-tagline">
              Network Design <span>•</span> Routing &amp; Switching <span>•</span> System Administration
            </p>
            <p className="hero-intro">
              Building secure, dependable systems and designing networks that
              keep people connected.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View Projects <Icon name="arrow" /></a>
              <a className="button button-secondary" href="#contact">Contact Me</a>
            </div>
            <div className="hero-socials">
              <a href="mailto:zennieculhi@gmail.com"><Icon name="mail" /> Email me</a>
              <a href="https://github.com/zennieculhi-source" target="_blank" rel="noreferrer">
                <Icon name="github" /> GitHub
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-frame">
              <Image
                src="/Zennie.jpg"
                alt="Portrait of Zennie Mae Culhi"
                width={440}
                height={440}
                priority
                className="portrait-image"
              />
            </div>
            <div className="floating-label"><span className="label-icon"><Icon name="network" /></span><span><strong>IT Student</strong><small>Network Design &amp; Management</small></span></div>
            <span className="visual-spark spark-one" />
            <span className="visual-spark spark-two" />
          </div>
        </section>

        <section className="contact-strip page-shell reveal" id="contact">
          <a className="contact-item" href="https://maps.google.com/?q=Wangal%2C+Kasibu%2C+Nueva+Vizcaya" target="_blank" rel="noreferrer">
            <span className="contact-icon"><Icon name="pin" /></span>
            <span><small>BASED IN</small><strong>Wangal, Kasibu, Nueva Vizcaya</strong></span>
          </a>
          <a className="contact-item" href="mailto:zennieculhi@gmail.com">
            <span className="contact-icon"><Icon name="mail" /></span>
            <span><small>EMAIL</small><strong>zennieculhi@gmail.com</strong></span>
          </a>
          <a className="contact-item" href="https://github.com/zennieculhi-source" target="_blank" rel="noreferrer">
            <span className="contact-icon"><Icon name="github" /></span>
            <span><small>GITHUB</small><strong>zennieculhi-source</strong></span>
          </a>
        </section>

        <section className="content-section page-shell reveal" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Connected by design." />
          <div className="about-grid">
            <div className="about-name-card">
              <span className="about-number">01 / PROFILE</span>
              <div className="about-monogram">Z<span>.</span></div>
              <h3>Zennie Mae Culhi</h3>
              <p>Information Technology Student</p>
              <div className="focus-chip"><span /> NETWORK DESIGN &amp; MANAGEMENT</div>
            </div>
            <div className="about-copy">
              <span className="eyebrow">CORE FOCUS</span>
              <h3>Network Design, Routing &amp; Switching, and System Administration</h3>
              <p>
                A dedicated 3rd-year Information Technology student majoring in
                Network Design &amp; Management (NDM). Hands-on experience in
                configuring network hardware and IT infrastructure support.
                Passionate about designing resilient network architectures,
                optimizing system performance, and applying cybersecurity best
                practices.
              </p>
              <div className="skill-list">
                <span>Network Design</span><span>Routing &amp; Switching</span><span>System Administration</span><span>Cybersecurity Basics</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section page-shell reveal" id="education">
          <SectionHeading eyebrow="MY FOUNDATION" title="Education" detail="Learning the systems behind a connected world." />
          <article className="education-card">
            <div className="school-logo-wrap">
              <Image src="/CITE.webp" alt="College of Information Technology logo" width={120} height={120} className="school-logo" />
            </div>
            <div className="education-details">
              <span className="eyebrow">CURRENT STUDIES</span>
              <h3>Nueva Vizcaya State University <span>(NVSU)</span></h3>
              <p>College of Information Technology (CITE)</p>
              <div className="degree-line">Bachelor of Science in Information Technology (BSIT) <span>Section 3B</span></div>
            </div>
            <div className="education-stamp"><span>BSIT</span><small>3B</small></div>
          </article>
        </section>

        <section className="content-section page-shell reveal" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects &amp; practice"
            detail="Hands-on work in network design, connectivity, and infrastructure."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-icon"><Icon name="network" size={21} /></span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {index === 1 ? <><span>LAN</span><span>VLAN</span><span>Packet Tracer</span></> : index === 2 ? <><span>Security</span><span>Monitoring</span><span>Systems</span></> : <><span>Networking</span><span>IT</span></>}
                </div>
                <label className="notes-label" htmlFor={`project-notes-${index}`}>PROJECT NOTES</label>
                <textarea
                  id={`project-notes-${index}`}
                  value={notes[index]}
                  onChange={(event) => updateNote(index, event.target.value)}
                  aria-label={`${project.title} details`}
                  spellCheck="false"
                />
                <button
                  className={`save-button${savedProjects[index] ? " is-saved" : ""}`}
                  type="button"
                  onClick={() => setSavedProjects((current) => ({ ...current, [index]: true }))}
                >
                  {savedProjects[index] ? "Saved in this session" : "Save details"}
                  <span>{savedProjects[index] ? "✓" : "↗"}</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-cta page-shell reveal">
          <div>
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>Let&apos;s build something <span>reliable.</span></h2>
          </div>
          <a className="button button-primary" href="mailto:zennieculhi@gmail.com">Get in touch <Icon name="arrow" /></a>
        </section>
      </main>

      <footer className="site-footer page-shell">
        <a className="brand" href="#home"><span className="brand-mark">Z</span><span>ZENNIE<span className="brand-dot">.</span></span></a>
        <p>Designed with purpose. Built for connection.</p>
        <span>© {new Date().getFullYear()} Zennie Mae Culhi</span>
      </footer>
    </>
  );
}
