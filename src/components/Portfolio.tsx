import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  Braces,
  CalendarDays,
  Code2,
  Cpu,
  Database,
  Gauge,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Menu,
  Network,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";

const navItems = [
  ["about", "About"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["research", "Research"],
  ["achievements", "Achievements"],
  ["contact", "Contact"],
] as const;

const links = {
  github: "https://github.com/Capt-Swapnil",
  linkedin: "https://www.linkedin.com/in/swapnil-jaiswal-1b7735275/",
};

const projects = [
  {
    index: "P/01",
    title: "CADFS",
    subtitle: "Content Addressable Deduplication File System",
    description: "A content-addressable deduplicating file system built around FUSE concepts and systems-level storage design.",
    tags: ["C / C++", "FUSE", "File Systems", "Deduplication"],
    link: "https://github.com/Capt-Swapnil/CADFS-using-FUSE",
  },
  {
    index: "P/02",
    title: "FireWatch India",
    subtitle: "Wildfire Monitoring Dashboard",
    description: "A wildfire monitoring dashboard for observing and filtering fire activity through a practical data interface.",
    tags: ["Python", "Streamlit", "Data Visualization", "Dashboard"],
    link: "https://github.com/Capt-Swapnil/FireWatch-India",
  },
];

const skillGroups = [
  { title: "Programming", icon: Braces, items: ["C / C++", "Python", "Java"] },
  { title: "Web & Data", icon: Code2, items: ["HTML", "CSS", "JavaScript", "ReactJs", "NumPy", "Pandas", "PyTorch", "Streamlit", "Flask"] },
  { title: "Engineering Tools", icon: Cpu, items: ["MATLAB", "Git"] },
  { title: "Databases", icon: Database, items: ["MySQL", "SQLite"] },
  { title: "Creative Tools", icon: Gauge, items: ["ClipChamp", "Canva"] },
  { title: "Languages", icon: Languages, items: ["Hindi", "English", "French"] },
];

function ExternalLink({ href, children, className = "", label }: { href: string; children: ReactNode; className?: string; label?: string }) {
  return <a href={href} target="_blank" rel="noreferrer" className={className} aria-label={label}>{children}</a>;
}

function MechanicalFrame() {
  return (
    <div className="mechanical-frame" aria-hidden="true">
      <div className="shutter shutter-left"><i /><i /><i /></div>
      <div className="shutter shutter-right"><i /><i /><i /></div>
      <span className="scan-line" />
    </div>
  );
}

function CinematicSection({ id, className = "", children, labelledby }: { id?: string; className?: string; children: ReactNode; labelledby?: string }) {
  return (
    <section id={id} data-cinematic className={`section cinematic-section ${className}`} aria-labelledby={labelledby}>
      <MechanicalFrame />
      <div className="section-content">{children}</div>
    </section>
  );
}

function SectionHeading({ number, label, title, intro }: { number: string; label: string; title: string; intro?: string }) {
  const titleId = `${label.toLowerCase().replaceAll(" ", "-")}-title`;
  return (
    <div className="section-heading content-reveal">
      <p className="section-label"><span>{number}</span> // {label}</p>
      <div className="section-title-row">
        <h2 id={titleId}>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  );
}

function Header() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-32% 0px -58%", threshold: 0 },
    );
    navItems.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Swapnil Jaiswal, back to top"><span>SJ</span><i /></a>
      <nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
        {navItems.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <ExternalLink href={links.github} className="icon-link" label="Open GitHub profile"><Github size={18} /></ExternalLink>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </header>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="portrait-frame hero-portrait" aria-label="Reserved for Swapnil Jaiswal's mountain portrait">
      <div className="portrait-fallback"><span>SJ</span><p>PORTRAIT INPUT / PENDING</p></div>
      <div className="portrait-index">01 — CHENNAI, IN</div>
      <div className="corner corner-a" /><div className="corner corner-b" />
    </div>
  );
}

function ExperienceItem({ code, period, title, organization, children }: { code: string; period: string; title: string; organization: string; children: ReactNode }) {
  return (
    <article className="experience-item content-reveal">
      <div className="experience-rail"><span>{code}</span><i /></div>
      <div className="experience-meta"><CalendarDays size={16} /><span>{period}</span></div>
      <div className="experience-body"><p>{organization}</p><h3>{title}</h3><ul>{children}</ul></div>
    </article>
  );
}

function Portfolio() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-cinematic]"));
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".content-reveal"));

    if (reducedMotion) {
      document.documentElement.classList.add("motion-reduced", "hero-ready");
      sections.forEach((section) => section.style.setProperty("--aperture", "1"));
      revealItems.forEach((item) => item.classList.add("visible"));
      return;
    }

    let frame = 0;
    const update = () => {
      const viewportHeight = window.innerHeight;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const opening = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight * 0.34)));
        const closing = Math.min(1, Math.max(0, rect.bottom / (viewportHeight * 0.28)));
        const aperture = Math.min(opening, closing);
        const centerOffset = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        section.style.setProperty("--aperture", aperture.toFixed(3));
        section.style.setProperty("--section-shift", Math.max(-1, Math.min(1, centerOffset)).toFixed(3));
      });
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("visible", entry.isIntersecting)),
      { threshold: 0.08, rootMargin: "-4% 0px -4%" },
    );
    revealItems.forEach((item) => revealObserver.observe(item));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    requestAnimationFrame(() => {
      document.documentElement.classList.add("hero-ready");
      update();
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      revealObserver.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div id="top" className="portfolio-shell">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-opening" aria-hidden="true"><span /><span /></div>
          <div className="hero-copy">
            <p className="eyebrow"><span /> Computer Science · Cyber Physical Systems</p>
            <h1 id="hero-title">Swapnil<br /><em>Jaiswal.</em></h1>
            <p className="hero-intro">B.Tech student at VIT Chennai building across systems engineering, software and applied optimization.</p>
            <div className="hero-actions">
              <a href="#experience" className="primary-action">View experience <ArrowDown size={17} /></a>
              <ExternalLink href={links.linkedin} className="text-action">LinkedIn <ArrowUpRight size={16} /></ExternalLink>
            </div>
            <div className="hero-meta"><span>VIT CHENNAI</span><span>2024 — 2028</span><span>CGPA 8.88</span></div>
          </div>
          <PortraitPlaceholder />
          <div className="hero-system-readout" aria-hidden="true"><span>SYS.INIT</span><i /><span>2026</span></div>
        </section>

        <CinematicSection id="about" className="about-section">
          <SectionHeading number="01" label="About" title="Engineering software for real systems." />
          <div className="about-grid">
            <p className="about-lead content-reveal">I’m pursuing a <strong>B.Tech in Computer Science</strong> with a specialization in Cyber Physical Systems at VIT Chennai.</p>
            <div className="about-copy content-reveal"><p>My work spans systems programming, applied optimization, thermal engineering and data-driven interfaces.</p><p>I approach projects by connecting implementation details to the larger system they need to serve.</p></div>
            <div className="education-readout content-reveal"><GraduationCap size={25} /><strong>8.88</strong><span>CGPA</span><small>JUL 2024 — APR 2028</small></div>
          </div>
        </CinematicSection>

        <CinematicSection id="experience" className="experience-section">
          <SectionHeading number="02" label="Experience" title="Research and engineering in motion." intro="Two roles connecting software workflows with complex engineering systems." />
          <div className="experience-list">
            <ExperienceItem code="EXP.01" period="AUG 2025 — AUG 2026" organization="VIT Chennai" title="Research Intern · LLM-Assisted Power System Optimization">
              <li>Designed an LLM-assisted framework for Stochastic Unit Commitment.</li>
              <li>Integrated LLM APIs with Python optimization pipelines.</li>
              <li>Implemented scenario-based energy balancing workflows.</li>
            </ExperienceItem>
            <ExperienceItem code="EXP.02" period="JUL 2025 — PRESENT" organization="Dromos Hyperloop" title="Thermal and Safety Subsystem Engineer">
              <li>Contribute to thermal and safety subsystem engineering.</li>
              <li>Develop thermal simulations in MATLAB.</li>
              <li>Represented the team at GHC’26, IIT Madras, helping secure a winning position.</li>
            </ExperienceItem>
          </div>
          <div className="dromos-stage content-reveal" role="img" aria-label="Reserved for the Dromos IIT Madras stage photograph">
            <div><ShieldCheck size={42} /><span>DROMOS / GHC’26</span><small>STAGE IMAGE INPUT / PENDING</small></div>
          </div>
        </CinematicSection>

        <CinematicSection id="skills" className="skills-section">
          <SectionHeading number="03" label="Skills" title="A focused technical toolkit." intro="Programming, data, engineering and communication tools listed on my current resume." />
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, items }, index) => (
              <article className="skill-card content-reveal" key={title}>
                <div className="skill-card-head"><Icon size={20} /><span>0{index + 1}</span></div>
                <h3>{title}</h3><div className="tag-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </CinematicSection>

        <CinematicSection id="projects" className="projects-section">
          <SectionHeading number="04" label="Projects" title="Selected systems, built end to end." />
          <div className="project-grid">
            {projects.map((project) => (
              <ExternalLink href={project.link} className="project-card content-reveal" key={project.title}>
                <div className="project-top"><span>{project.index}</span><ArrowUpRight size={20} /></div>
                <div className="project-schematic" aria-hidden="true"><i /><i /><i /></div>
                <p className="project-subtitle">{project.subtitle}</p><h3>{project.title}</h3><p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </ExternalLink>
            ))}
          </div>
        </CinematicSection>

        <CinematicSection id="research" className="research-section">
          <SectionHeading number="05" label="Research" title="LLM-assisted power-system optimization." intro="Research work at VIT Chennai connecting language models with scenario-based energy balancing workflows." />
          <article className="research-feature content-reveal">
            <div className="research-mark" aria-hidden="true"><Network size={30} /><span>R/01</span></div>
            <div className="research-body">
              <p>VIT Chennai · Aug 2025 — Aug 2026</p>
              <h3>LLM-Assisted Power System Optimization</h3>
              <ul>
                <li>Designed an LLM-assisted framework for Stochastic Unit Commitment.</li>
                <li>Integrated LLM APIs with Python optimization pipelines.</li>
                <li>Implemented scenario-based energy balancing workflows.</li>
              </ul>
              <div className="tag-list"><span>LLM APIs</span><span>Python</span><span>Stochastic Unit Commitment</span><span>Energy Balancing</span></div>
            </div>
          </article>
        </CinematicSection>

        <CinematicSection id="achievements" className="achievements-section">
          <SectionHeading number="06" label="Achievements" title="Measured progress." />
          <div className="achievement-grid">
            <article className="achievement-card feature-achievement content-reveal"><Award size={25} /><span>GHC’26 · IIT MADRAS</span><strong>First Runner-up</strong><p>Vacuum Pump Technology</p></article>
            <article className="achievement-card content-reveal"><Terminal size={23} /><span>CODECHEF</span><strong>1081</strong><p>Rating</p></article>
            <article className="achievement-card content-reveal"><Code2 size={23} /><span>LEETCODE</span><strong>200+</strong><p>DSA problems solved</p></article>
            <article className="achievement-card content-reveal"><BookOpen size={23} /><span>MICROSOFT</span><strong>Career Essentials</strong><p>Generative AI</p></article>
          </div>
        </CinematicSection>

        <CinematicSection id="contact" className="contact-section">
          <p className="section-label content-reveal"><span>07</span> // CONTACT</p>
          <div className="contact-grid">
            <h2 className="content-reveal">Let’s connect<br /><em>and build.</em></h2>
            <div className="contact-copy content-reveal"><p>Find my code and current work through the profiles below.</p><div className="contact-links"><ExternalLink href={links.linkedin}><Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} /></ExternalLink><ExternalLink href={links.github}><Github size={18} /> GitHub <ArrowUpRight size={15} /></ExternalLink></div></div>
          </div>
        </CinematicSection>
      </main>
      <footer><span>SWAPNIL JAISWAL © 2026</span><span>COMPUTER SCIENCE · CYBER PHYSICAL SYSTEMS</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

export default Portfolio;