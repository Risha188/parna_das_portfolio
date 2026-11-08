import { useEffect, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MonitorSmartphone,
  Moon,
  Server,
  Sparkles,
  X,
  Download,
} from "lucide-react";

const profile = {
  name: "Parna Das",
  role: "Full Stack Developer",
  company: "OBS Digital Services",
  startDate: "September 2026",
  email: "dparna28@gmail.com",
  github: "https://github.com/Risha188",
  linkedin: "https://www.linkedin.com/in/parna-das-862b80307/",
  resume: "../public/ParnaDas-CV.pdf",
};

const skills = {
  Frontend: [
    "React.js",
    "JavaScript / ES6+",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "React Router",
    "Axios",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Mongoose",
    "API Integration",
  ],
  Database: ["MongoDB", "MongoDB Atlas", "SQL", "Firebase"],
  Tools: ["Git", "GitHub", "Postman", "Vite", "npm", "Vercel"],
};


const projects = [
  {
    title: "Netflix Clone",
    type: "Streaming Platform | Frontend Web Application",
    description:
      "A Netflix-inspired streaming platform that recreates the look and feel of a modern entertainment website. Features a dark-themed interface, responsive layouts, movie and TV-show browsing sections, and an engaging user experience across devices.",
    tech: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
      "Responsive Design",
    ],
    github: "https://github.com/Risha188/NetflixClone",
    live: "https://netflix-clone-risha188.vercel.app/",
  },
  {
    title: "Collector's Hub",
    type: "Frontend Web Application",
    description:
      "Responsive collection-focused web interface built with TypeScript, Vite and Tailwind CSS, with a clean modern user experience.",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "Lucide"],
    github: "https://github.com/Risha188",
    live: "https://collectors-hub-psi.vercel.app/",
  },
  {
    title: "Yuktitech",
    type: "Learning Platform",
    description:
      "Modern educational website concept focused on presenting courses and learning content through a responsive interface.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Risha188/Yuktitech",
    live: "https://yuktitech.vercel.app/",
  },
];


const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.3, 0.6] }
    );

    navItems.forEach(([, id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070b14] text-gray-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070b14]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#home" className="flex items-center gap-2 font-bold" onClick={closeMenu}>
            <span>Parna<span className="text-blue-400"> Das</span></span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-sm transition ${
                  active === id ? "text-blue-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <a href="#contact" className="button-primary hidden py-2.5 md:inline-flex">
            Let's Talk
          </a>

          <button
            className="rounded-lg border border-white/10 p-2 text-gray-300 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/5 bg-[#070b14] px-5 py-4 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {navItems.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={closeMenu}
                  className={`rounded-lg px-3 py-3 text-sm ${
                    active === id ? "bg-blue-500/10 text-blue-400" : "text-gray-300"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="section flex min-h-screen items-center pt-28">
          <div className="grid w-full gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for opportunities
              </div>

              <p className="eyebrow">Hello, I'm</p>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Parna <span className="text-blue-500">Das.</span>
              </h1>

              <h2 className="mt-5 text-2xl font-semibold text-gray-200 sm:text-3xl">
                Full Stack Developer
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                I build responsive, user-focused web applications with React,
                Node.js, Express and modern JavaScript technologies.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="button-primary">
                  View My Work <ArrowUpRight size={17} />
                </a>
                <a href="#contact" className="button-secondary">
                  Contact Me <Mail size={17} />
                </a>
                <a href={profile.resume} className="button-secondary" download>
                  Resume <Download size={17} />
                </a>
              </div>

              <div className="mt-9 flex items-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 transition hover:text-white"
                  aria-label="GitHub"
                >
                  <Github size={21} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 transition hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={21} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-gray-400 transition hover:text-white"
                  aria-label="Email"
                >
                  <Mail size={21} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-8 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="glass relative overflow-hidden rounded-3xl p-7 shadow-2xl shadow-black/20">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>
                  <Code2 className="text-blue-400" size={21} />
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <p><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = {"{"}</p>
                  <p className="pl-5 text-gray-400">name: <span className="text-emerald-300">"Parna Das"</span>,</p>
                  <p className="pl-5 text-gray-400">role: <span className="text-emerald-300">"Full Stack Developer"</span>,</p>
                  <p className="pl-5 text-gray-400">frontend: <span className="text-emerald-300">"React"</span>,</p>
                  <p className="pl-5 text-gray-400">backend: <span className="text-emerald-300">"Node.js"</span>,</p>
                  <p className="pl-5 text-gray-400">database: <span className="text-emerald-300">"MongoDB"</span>,</p>
                  <p className="pl-5 text-gray-400">learning: <span className="text-emerald-300">true</span></p>
                  <p>{"}"}</p>
                  <p className="pt-3 text-gray-500">// Always learning. Always building.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section border-t border-white/5">
          <p className="eyebrow">About Me</p>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Turning ideas into <span className="text-blue-400">web experiences.</span>
              </h2>
              <p className="mt-6 leading-8 text-gray-400">
                I'm a Full Stack Developer focused on creating clean, responsive
                and practical web applications. I enjoy working across the
                frontend and backend, from building reusable React interfaces to
                designing REST APIs and connecting applications with databases.
              </p>
              <p className="mt-4 leading-8 text-gray-400">
                My current role is at <strong className="text-gray-200">OBS Digital Services</strong>,
                where I am growing my professional experience while continuing to
                strengthen my full-stack development skills.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                [Code2, "Clean Frontend", "Reusable components and responsive interfaces."],
                [Server, "Backend Development", "REST APIs, authentication and server-side logic."],
                [Database, "Data & APIs", "Practical database integration and API workflows."],
                [Sparkles, "Continuous Learning", "Improving skills through real-world projects."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="glass rounded-2xl p-5">
                  <Icon className="mb-3 text-blue-400" size={22} />
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section border-t border-white/5">
          <p className="eyebrow">Experience</p>
          <h2 className="text-3xl font-bold sm:text-4xl">My professional journey</h2>

          <div className="mt-10 max-w-4xl">
            <div className="relative pl-8">
              <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-500/10" />
              <span className="absolute left-[5px] top-5 h-[calc(100%-10px)] w-px bg-white/10" />

              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <p className="text-sm font-medium text-blue-400">{profile.startDate} – Present</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{profile.role}</h3>
                    <p className="mt-1 text-gray-400">{profile.company}</p>
                  </div>
                  <BriefcaseBusiness className="text-gray-600" size={24} />
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-400">
                  {[
                    "Develop and maintain responsive web interfaces using modern frontend technologies.",
                    "Work across frontend and backend workflows, including API integration and application logic.",
                    "Collaborate with the development team using Git-based workflows.",
                    "Continue improving code quality, debugging skills and full-stack development practices.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 shrink-0 text-blue-400" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section border-t border-white/5">
          <p className="eyebrow">Skills</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Technologies I work with</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="glass rounded-2xl p-6">
                <h3 className="mb-5 font-semibold text-white">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section border-t border-white/5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Projects</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Selected work</h2>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="button-secondary self-start sm:self-auto"
            >
              View GitHub <Github size={17} />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="glass group flex flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                    <MonitorSmartphone size={21} />
                  </div>
                  <span className="text-xs text-gray-500">{project.type}</span>
                </div>

                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="text-xs text-gray-500">
                      #{item.replaceAll(" ", "")}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex gap-3 border-t border-white/5 pt-5">
                  <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary flex-1 py-2.5">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="button-primary flex-1 py-2.5">
                    Live <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section border-t border-white/5">
          <p className="eyebrow">Education</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Academic background</h2>

          <div className="mt-10 glass max-w-3xl rounded-2xl p-6 sm:p-8">
            <div className="flex gap-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                <GraduationCap size={23} />
              </div>
              <div>
                <h3 className="text-lg font-bold">B.Tech in Computer Science & Engineering</h3>
                <p className="mt-1 text-gray-400">MAKAUT • 2021 – 2025</p>
                <p className="mt-3 text-sm text-gray-500">GPA: 8.48</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section border-t border-white/5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Contact</p>
            <h2 className="text-3xl font-bold sm:text-5xl">
              Let's build something <span className="text-blue-400">great.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
              Interested in working together or discussing a development opportunity?
              Feel free to reach out.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="button-primary">
                <Mail size={17} /> Email Me
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button-secondary">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="button-secondary">
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} Parna Das. Built with React & Tailwind CSS.</p>
          <a href="#home" className="inline-flex items-center gap-2 hover:text-white">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;