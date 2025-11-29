function Navbar({ isScrolled, activeSection, scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold text-[#b9ff1c]">
            Mihin
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              "home",
              "about",
              "skills",
              "certifications",
              "experience",
              "projects",
              "education",
              "hobbies",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize text-sm sm:text-base transition-all duration-300 hover:scale-110 ${
                  activeSection === section
                    ? "text-[#b9ff1c] font-semibold"
                    : "text-white hover:text-[#b9ff1c]"
                }`}
              >
                {section}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download="Mihin_Ratnayake_Resume.pdf"
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-[#b9ff1c] text-black rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-1 sm:gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </a>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-[#b9ff1c] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#b9ff1c]/30">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {[
              "home",
              "about",
              "skills",
              "certifications",
              "experience",
              "projects",
              "education",
              "hobbies",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`w-full text-left px-4 py-2 capitalize rounded-lg transition-all duration-300 hover:scale-105 ${
                  activeSection === section
                    ? "text-[#b9ff1c] font-semibold bg-[#b9ff1c]/10"
                    : "text-white hover:text-[#b9ff1c] hover:bg-[#b9ff1c]/5"
                }`}
              >
                {section}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download="Mihin_Ratnayake_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#b9ff1c] text-black rounded-lg font-semibold hover:bg-[#b9ff1c]/90 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

