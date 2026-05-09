export default function Navbar() {
  return (
    <div className="fixed top-6 w-full flex justify-center z-50">
      <div className="flex gap-6 px-6 py-3 rounded-full bg-[#0a0f1c]/70 backdrop-blur-lg border border-gray-800 shadow-lg">
        
        {["Intro", "Projects", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-400 hover:text-blue-400 transition text-sm font-medium"
          >
            {item}
          </a>
        ))}

      </div>
    </div>
  );
}