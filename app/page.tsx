import Navbar from "../components/Navbar";

export default function Home() {

  const projects = [
    {
      title: "Synchronus",
      description:
        "Real-time chat application built using MERN stack with Socket.io, JWT authentication and MongoDB.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/KrishnaH007",
    },
    {
      title: "Market Dashboard",
      description:
        "Commodity analytics dashboard with structured market data and insights for traders.",
      tech: ["React", "Chart.js", "Node.js"],
      github: "https://github.com/KrishnaH007",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using Next.js and Tailwind showcasing projects and skills.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      github: "https://github.com/KrishnaH007",
    },
  ];

  return (
    <div className="bg-[#0a0f1c] text-gray-200">

      <Navbar />

      {/* HERO */}
      <section
        id="intro"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      >

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-black"></div>

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT */}
          <div>
            <p className="text-blue-400 mb-3 tracking-wide">
              QUANT TRADER • MARKET ANALYST
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Krishna Heda
            </h1>

            <p className="text-gray-400 mt-5 max-w-lg text-lg">
              Trading futures & derivatives in commodities. Building data-driven strategies 
              and exploring quantitative finance to extract edge from markets.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold transition shadow-lg shadow-blue-500/20"
              >
                View Work
              </a>

              <a
                href="https://github.com/KrishnaH007"
                target="_blank"
                className="px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center relative">
            <div className="absolute w-[120%] h-[120%] bg-blue-500/10 blur-3xl rounded-full"></div>

            <img
              src="/Avatar.png"
              alt="quant trader"
              className="relative w-full max-w-md rounded-lg border border-gray-800 shadow-2xl transition duration-500 hover:scale-[1.02]"
            />
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 fade-in">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#111827] border border-gray-800 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="text-sm text-blue-400 hover:underline"
              >
                GitHub →
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 fade-in">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Skills
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

          {/* FRONTEND */}
          <div className="p-6 bg-[#111827] border border-gray-800 rounded-xl">
            <h3 className="text-blue-400 mb-4 font-semibold">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"].map((s) => (
                <span key={s} className="px-2 py-1 bg-gray-800 rounded text-sm">{s}</span>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="p-6 bg-[#111827] border border-gray-800 rounded-xl">
            <h3 className="text-green-400 mb-4 font-semibold">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "MongoDB", "REST APIs"].map((s) => (
                <span key={s} className="px-2 py-1 bg-gray-800 rounded text-sm">{s}</span>
              ))}
            </div>
          </div>

          {/* QUANT */}
          <div className="p-6 bg-[#111827] border border-gray-800 rounded-xl">
            <h3 className="text-yellow-400 mb-4 font-semibold">Quant & Data</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Pandas",
                "NumPy",
                "Statistics",
                "Derivatives",
                "Futures & Options",
                "Market Analysis"
              ].map((s) => (
                <span key={s} className="px-2 py-1 bg-gray-800 rounded text-sm">{s}</span>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="p-6 bg-[#111827] border border-gray-800 rounded-xl">
            <h3 className="text-purple-400 mb-4 font-semibold">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "Postman", "VS Code"].map((s) => (
                <span key={s} className="px-2 py-1 bg-gray-800 rounded text-sm">{s}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center fade-in">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Open to discussions around trading, quant strategies, and tech collaborations.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="mailto:your-email@example.com"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition"
          >
            Email
          </a>

          <a
            href="https://github.com/KrishnaH007"
            target="_blank"
            className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            GitHub
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Krishna Heda
      </footer>

    </div>
  );
}