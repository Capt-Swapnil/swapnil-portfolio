import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Cpu,
  Github,
  Linkedin,
  Menu,
  Microscope,
  Orbit,
  ShieldCheck,
  Terminal,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  ["about", "About"],
  ["skills", "Skills"],
  ["dromos", "Dromos"],
  ["projects", "Projects"],
  ["research", "Research"],
  ["code", "Code"],
  ["contact", "Contact"],
] as const;

const links = {
  github: "https://github.com/Capt-Swapnil",
  linkedin: "https://www.linkedin.com/in/swapnil-jaiswal-1b7735275/",
};

const projects = [
  {
    number: "01",
    title: "FireWatch India",
    description: "Real-time wildfire monitoring built on NASA FIRMS VIIRS data, with geolocation and practical filtering.",
    tags: ["Python", "Streamlit", "Folium", "VIIRS"],
    link: "https://github.com/Capt-Swapnil/FireWatch-India",
  },
  {
    number: "02",
    title: "LLM-QSUC",
    description: "An LLM-assisted workflow for power-system balance optimization and scenario-tree reasoning.",
    tags: ["Pyomo", "SciPy", "Ollama", "AutoGen"],
    link: "https://github.com/Capt-Swapnil/LLM-QSUC",
  },
  {
    number: "03",
    title: "CADFS using FUSE",
    description: "A content-addressable, deduplicating filesystem simulator exploring FUSE-oriented architecture.",
    tags: ["C++", "FUSE", "Linux", "Systems"],
    link: "https://github.com/Capt-Swapnil/CADFS-using-FUSE",
  },
  {
    number: "04",
    title: "LLM-SUC",
    description: "Scenario-tree and optimization experiments connecting Python tooling with MATLAB-origin concepts.",
    tags: ["Python", "MATLAB", "CBC", "Llama 3"],
    link: "https://github.com/Capt-Swapnil/LLM-SUC",
  },
  {
    number: "05",
    title: "Jarvis",
    description: "A personal AI assistant project focused on useful automation and natural-language interaction.",
    tags: ["Python", "AI", "Automation"],
    link: "https://github.com/Capt-Swapnil/Jarvis---my-personal-AI-assistant",
  },
  {
    number: "06",
    title: "Scientific Calculator",
    description: "A focused calculator implementation for dependable scientific and numerical operations.",
    tags: ["Java", "UI", "Logic"],
    link: "https://github.com/Capt-Swapnil/Scientific-Calculator",
  },
  {
    number: "07",
    title: "Banking System",
    description: "A structured banking-system project applying object-oriented design and transaction logic.",
    tags: ["Java", "OOP", "Systems"],
    link: "https://github.com/Capt-Swapnil/Banking-System",
  },
  {
    number: "08",
    title: "NPTEL Quiz App",
    description: "An interactive quiz application for working through NPTEL course questions.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/Capt-Swapnil/NPTEL-QUIZ-APP",
  },
];

const skillGroups = [
  { title: "Languages", icon: Braces, items: ["Python", "Java", "C", "C++", "MATLAB", "Verilog", "8051 Assembly", "SQL"] },
  { title: "Web & UI", icon: Terminal, items: ["HTML", "CSS", "JavaScript", "React", "Vite", "Streamlit", "Flask"] },
  { title: "Data & ML", icon: Orbit, items: ["NumPy", "Pandas", "Matplotlib", "SciPy", "scikit-learn", "Machine Learning"] },
  { title: "Systems", icon: Cpu, items: ["Git", "GitHub", "Git LFS", "VS Code", "Linux / FUSE", "Embedded Systems", "Control Systems"] },
];

function SectionHeading({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <p className="section-label">// {label}</p>
      <div className="section-title-row">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  );
}

function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>;
}

function Header() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-30% 0px -60%", threshold: 0 },
    );
    navItems.forEach(([id]) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Swapnil Jaiswal, back to top"><span>SJ</span><i /></a>
      <nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
        {navItems.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <ExternalLink href={links.github} className="icon-link" aria-label="GitHub"><Github size={18} /></ExternalLink>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

function HeroPortrait() {
  return (
    <div className="portrait-frame reveal" aria-label="Portrait image area for Swapnil Jaiswal">
      <div className="portrait-fallback">
        <span>SJ</span>
        <p>CYBER / PHYSICAL / SYSTEMS</p>
      </div>
      <div className="portrait-index">01 — CHENNAI, IN</div>
      <div className="corner corner-a" /><div className="corner corner-b" />
    </div>
  );
}

function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="portfolio-shell">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Engineering systems that connect code to the physical world.</p>
            <h1 id="hero-title">Swapnil<br /><em>Jaiswal.</em></h1>
            <p className="hero-intro">Cyber Physical Systems student at VIT Chennai, building across intelligent software, optimization and high-performance engineering.</p>
            <div className="hero-actions">
              <a href="#projects" className="primary-action">Explore my work <ArrowDown size={17} /></a>
              <ExternalLink href={links.linkedin} className="text-action">LinkedIn <ArrowUpRight size={16} /></ExternalLink>
            </div>
            <div className="hero-meta"><span>VIT CHENNAI</span><span>CYBER PHYSICAL SYSTEMS</span><span>OPEN TO BUILD</span></div>
          </div>
          <HeroPortrait />
        </section>

        <section id="about" className="section about-section">
          <SectionHeading label="01 / WHO I AM" title="Systems thinker. Curious builder." />
          <div className="about-grid">
            <p className="about-lead reveal">I work at the intersection of <strong>software, physical systems and data</strong>—where good engineering demands both abstraction and attention to the real world.</p>
            <div className="about-copy reveal">
              <p>At VIT Chennai, I study Cyber Physical Systems and explore machine learning, data science, control, embedded systems and quantitative algorithm development.</p>
              <p>As part of Dromos Hyperloop, I contribute to the Thermal, Safety & Pressurised Subsystem—translating constraints into practical thermal architecture.</p>
            </div>
            <div className="about-stat reveal"><span>∞</span><p>Curiosity across<br />disciplines</p></div>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHeading label="02 / TOOLKIT" title="Skills & tech stack" intro="Established tools I use to move from concept to working system." />
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, items }, index) => (
              <article className="skill-card reveal" key={title} style={{ transitionDelay: `${index * 60}ms` }}>
                <div className="skill-card-head"><Icon size={20} /><span>0{index + 1}</span></div>
                <h3>{title}</h3>
                <div className="tag-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="exploring reveal">
            <p><Microscope size={17} /> Currently exploring / working with</p>
            <div className="tag-list research-tags">{["TensorFlow", "Pyomo", "OR-Tools", "Coin-OR / CBC", "Ollama", "Llama 3", "AutoGen", "Quant / trading algorithms"].map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </section>

        <section id="dromos" className="section dromos-section">
          <SectionHeading label="03 / TEAM SPOTLIGHT" title="Dromos Hyperloop" />
          <div className="dromos-layout">
            <div className="dromos-visual reveal" role="img" aria-label="Dromos Hyperloop at the Global Hyperloop Competition 2026, IIT Madras">
              <div className="dromos-fallback"><Orbit size={76} /><strong>DROMOS</strong><span>GLOBAL HYPERLOOP COMPETITION · 2026</span></div>
              <div className="visual-caption">IIT MADRAS / TEAM PRESENTATION</div>
            </div>
            <div className="dromos-copy reveal">
              <p className="role-line">THERMAL, SAFETY & PRESSURISED SUBSYSTEM ENGINEER</p>
              <h3>Engineering for the edge of possibility.</h3>
              <p>I contribute to a thermal liquid coolant and heating architecture, with a focus on efficient heat sinking and dependable subsystem integration.</p>
              <div className="achievement-list">
                <div><Zap size={17} /><span><strong>Best Electrical System</strong><small>Global Hyperloop Competition 2026</small></span></div>
                <div><Cpu size={17} /><span><strong>Best Embedded System</strong><small>Global Hyperloop Competition 2026</small></span></div>
                <div><ShieldCheck size={17} /><span><strong>Runner-up · Vacuum Pump Technology</strong><small>Global Hyperloop Competition 2026</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <SectionHeading label="04 / SELECTED WORK" title="Projects built to learn—and work." intro="A selection spanning geospatial intelligence, optimization, systems and applied software." />
          <div className="project-grid">
            {projects.map((project) => (
              <ExternalLink href={project.link} className="project-card reveal" key={project.title}>
                <div className="project-top"><span>{project.number}</span><ArrowUpRight size={20} /></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </ExternalLink>
            ))}
          </div>
        </section>

        <section id="research" className="section research-section">
          <SectionHeading label="05 / CURRENT FOCUS" title="Research in progress" />
          <div className="research-grid">
            <div className="research-title reveal"><span className="status-dot" /> ONGOING RESEARCH<h3>ECG arrhythmia segmentation with U-Net architectures.</h3></div>
            <div className="research-copy reveal"><p>Exploring biomedical signal processing on the LUDB dataset using WFDB, U-Net and attention concepts—with an emphasis on careful labeling and useful segmentation.</p><div className="tag-list research-tags">{["LUDB", "WFDB", "U-Net", "Attention", "ECG", "Biomedical signals"].map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          </div>
        </section>

        <section id="code" className="section code-section">
          <div className="code-panel reveal">
            <div className="terminal-mark"><span /><span /><span /></div>
            <p>capt-swapnil / repositories</p>
            <h2>Code is where ideas meet constraints.</h2>
            <p className="code-intro">Browse my experiments, working projects and ongoing technical explorations on GitHub.</p>
            <div className="code-actions"><ExternalLink href={links.github} className="primary-action"><Github size={18} /> View GitHub</ExternalLink><ExternalLink href="https://github.com/Capt-Swapnil/ML-Models" className="text-action">ML Models <ArrowUpRight size={16} /></ExternalLink></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="section-label reveal">// 07 / CONTACT</p>
          <div className="contact-grid">
            <h2 className="reveal">Let’s build something<br /><em>that matters.</em></h2>
            <div className="contact-copy reveal"><p>I’m always interested in ambitious engineering problems, thoughtful collaborations and conversations about systems that should exist.</p><div className="contact-links"><ExternalLink href={links.linkedin}><Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} /></ExternalLink><ExternalLink href={links.github}><Github size={18} /> GitHub <ArrowUpRight size={15} /></ExternalLink></div></div>
          </div>
        </section>
      </main>
      <footer><span>SWAPNIL JAISWAL © 2026</span><span>ENGINEERED WITH INTENT</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

export default Portfolio;