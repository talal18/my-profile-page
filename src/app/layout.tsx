import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-blue-600 text-white py-4">
            <nav className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">My Portfolio</h1>
              <ul className="flex space-x-4">
                <li>
                  <a href="#home" className="hover:text-gray-200 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-200 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-gray-200 transition">
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="hover:text-gray-200 transition"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-200 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-grow container mx-auto py-8">{children}</main>

          {/* Footer */}
          <footer className="bg-blue-800 text-white py-4 text-center">
            © {new Date().getFullYear()} Talal Qasem. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
