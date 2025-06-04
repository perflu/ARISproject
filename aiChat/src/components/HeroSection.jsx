export default function HeroSection() {
  const tags = [
    "novel with unforgettable characters",
    "coming-of-age novel with deep emotions",
    "historical fiction set in medieval europe",
    "detective story with a female detective",
    "true crime", "dark romance", "impressive founding stories"
  ];

  return (
    <main className="flex flex-col items-center text-center mt-16 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-sm">
        Book Recommendation AI-Assistant
      </h1>

      <div className="mb-8">
        <img
          src="/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNjAzLWVsZW1lbnQtMTg2LnBuZw.png"
          alt="AI Librarian"
          className="w-36 h-36 rounded-full border-4 border-purple-400 shadow-xl hover:scale-105 transition duration-300"
        />
      </div>

      <input
        type="text"
        placeholder="What would you like to read, dear?"
        className="w-full max-w-lg px-6 py-3 rounded-full bg-[#1f1d3a] text-white placeholder-gray-400 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6 transition duration-300"
      />

      <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-4 py-2 text-sm bg-purple-700/30 border border-purple-400 rounded-full hover:bg-purple-600/40 transition duration-200 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </main>
  );
}
