import TypingText from "../components/TypingText";

function Home({ scrollToSection }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left animate-slide-in-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <TypingText
              text={["Mihin", "a Developer", "a Software Engineer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              className="text-[#b9ff1c]"
              cursorClassName="h-8 sm:h-12"
              textColors={["#b9ff1c", "#b9ff1c", "#b9ff1c"]}
              variableSpeed={{ min: 50, max: 120 }}
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 sm:mb-6 animate-fade-in">
            Web Application Developer / Software Engineer
          </p>
          <div className="text-sm sm:text-base text-white/70 mb-6 space-y-1">
            <p className="block">Nawala, Rajagiriya</p>
            <p className="block">
              <a
                href="mailto:mihinratnayake19@gmail.com"
                className="hover:text-[#b9ff1c] transition-colors"
              >
                mihinratnayake19@gmail.com
              </a>
            </p>
            <p className="block">
              <a
                href="tel:+94778004904"
                className="hover:text-[#b9ff1c] transition-colors"
              >
                +94 778004904
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent rounded-lg border-2 border-[#b9ff1c] text-[#b9ff1c] font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#b9ff1c]/50"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-black bg-[#b9ff1c] text-black rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              View Projects
            </button>
            <a
              href="/resume.pdf"
              download="Mihin_Ratnayake_Resume.pdf"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent rounded-lg border-2 border-white text-white font-semibold hover:scale-105 transition-transform duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5"
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
        <div className="flex justify-center animate-slide-in-right">
          <div className="relative">
            <div className="absolute inset-0 bg-[#b9ff1c] rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
            <img
              src="/Mihin.jpg"
              alt="Profile"
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-[#b9ff1c] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
