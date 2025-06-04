export default function Footer() {
  return (
    <footer className="mt-20 text-center text-sm text-gray-400 space-y-2 py-6 border-t border-gray-600/30">
      <div className="space-x-6">
        <a href="#" className="hover:text-purple-300">About</a>
        <a href="#" className="hover:text-purple-300">Privacy Policy</a>
        <a href="#" className="hover:text-purple-300">Terms of Service</a>
        <a href="#" className="hover:text-purple-300">Impressum</a>
      </div>
      <p className="text-xs">&copy; librarian.ai 2022 - 2025</p>
    </footer>
  );
}
