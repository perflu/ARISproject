export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-5 bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg">
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold tracking-wide text-white">📚 Librarain AI</span>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 text-black w-64"
        />
      </div>
      <nav className="space-x-6 text-sm">
        <button className="hover:underline">Genres</button>
        <button className="hover:underline">Authors</button>
        <button className="hover:underline">Blog</button>
        <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full transition duration-300">
          Sign In
        </button>
      </nav>
    </header>
  );
}
