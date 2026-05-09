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

            <div className="flex gap-4 mt-8 flex-wrap">

  {/* View Work */}
  <a
  href="/resume.pdf"
  target="_blank"
  className="px-6 py-3 rounded-lg border border-blue-400/40 text-blue-300 hover:bg-blue-500 hover:text-white transition duration-300"
>
  Resume
</a>

  {/* GitHub */}
  <a
    href="https://github.com/KrishnaH007"
    target="_blank"
    className="px-6 py-3 rounded-lg border border-blue-400/40 text-blue-300 hover:bg-blue-500 hover:text-white transition duration-300"
  >
    GitHub
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/krishna-heda-791663244/"
    target="_blank"
    className="px-6 py-3 rounded-lg border border-blue-400/40 text-blue-300 hover:bg-blue-500 hover:text-white transition duration-300"
  >
    LinkedIn
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

{/* CERTIFICATIONS */}
<section
  id="certifications"
  className="py-28 md:py-32 px-6"
>
  <div className="max-w-6xl mx-auto">

    {/* Divider */}
    <div className="h-px w-full bg-gray-800 mb-12"></div>

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 tracking-tight text-white">
      Certifications
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Certification 1 */}
      <div className="p-6 rounded-xl bg-[#111827] border border-gray-800 shadow-sm hover:shadow-md hover:shadow-blue-500/10 transition duration-300">

        <h3 className="text-lg font-semibold text-white mb-2">
          <a
            href="https://www.coursera.org/account/accomplishments/verify/9503VSS1FHWD"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Neural Networks and Deep Learning
          </a>
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          DeepLearning.AI • Coursera
        </p>

        <a
          href="https://www.coursera.org/account/accomplishments/verify/9503VSS1FHWD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-md border border-blue-400/40 text-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 text-sm"
        >
          View Certificate ↗
        </a>

      </div>

      {/* Certification 2 */}
      <div className="p-6 rounded-xl bg-[#111827] border border-gray-800 shadow-sm hover:shadow-md hover:shadow-blue-500/10 transition duration-300">

        <h3 className="text-lg font-semibold text-white mb-2">
          <a
            href="https://www.coursera.org/account/accomplishments/verify/W4L6O5HJCHZB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Python and Statistics for Financial Analysis
          </a>
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          Hong Kong University • Coursera
        </p>

        <a
          href="https://www.coursera.org/account/accomplishments/verify/W4L6O5HJCHZB"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-md border border-blue-400/40 text-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 text-sm"
        >
          View Certificate ↗
        </a>

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

        <div className="flex justify-center gap-4 flex-wrap">

  {/* Email */}
  <a
    href="mailto:hedakrishna07@gmail.com"
    className="px-6 py-3 rounded-lg border border-blue-400/40 text-blue-300 hover:bg-blue-500 hover:text-white transition duration-300"
  >
    Email
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/KrishnaH007"
    target="_blank"
    className="px-6 py-3 rounded-lg border border-blue-400/40 text-blue-300 hover:bg-blue-500 hover:text-white transition duration-300"
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
