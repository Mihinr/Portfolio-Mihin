function Projects() {
  const projects = [
    {
      title: "BookingZone",
      description:
        "Developed a responsive badminton court booking system using React, Tailwind CSS, Node.js, and MySQL. Features include seamless availability viewing, court booking, recurring reservations, secure JWT-based authentication, real-time slot updates, and an admin panel for court and user management.",
      tech: ["React", "Node.js", "MySQL", "JWT", "Tailwind CSS"],
      demo: "#",
      image: "/projects/bookingzone.png",
    },
    {
      title: "Gowinsports.lk",
      description:
        "Full-stack e-commerce site for badminton equipment. Built with React.js and Node.js/Express, featuring MySQL database, admin panel for product management, user authentication, responsive design with animations. Containerized with Docker and deployed to production.",
      tech: ["React", "Node.js", "MySQL", "Docker", "Express"],
      demo: "https://gowinsports.lk",
      image: "/projects/gowinsports.png",
    },
    {
      title: "Winners.lk",
      description:
        "Badminton sports equipment & session management website. Delivered a fully functional platform using React.js, Flask, and MySQL, handling the entire process from client discussions and project planning to development and deployment.",
      tech: ["React", "Flask", "MySQL"],
      demo: "https://www.winners.lk",
      image: "/projects/winners.png",
    },
    {
      title: "Giftora.info",
      description:
        "Engineered a front-end e-commerce platform for premium gift hampers using React.js and Tailwind CSS. Designed an engaging product catalog with modal item views, smooth UI transitions using Framer Motion, and a mobile-first responsive layout. Implemented global state handling with Zustand and optimized build performance through Vite's tooling.",
      tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Zustand",
        "Vite",
      ],
      demo: "https://www.giftora.info",
      image: "/projects/giftora.png",
    },
    {
      title: "Studio15Architects.co.uk",
      description:
        "Developed a responsive portfolio website to showcase projects and services using React 19, React Router, Vite, Tailwind CSS, Swiper.js, Netlify, and FormSubmit API. Built a SPA with dynamic routing, individual project detail pages, image carousels, and a contact form. Implemented smooth transitions, image optimization, and lazy loading.",
      tech: [
        "React 19",
        "React Router",
        "Tailwind CSS",
        "Swiper.js",
        "Vite",
      ],
      demo: "https://www.studio15architects.co.uk",
      image: "/projects/studio15architects.png",
    },
    {
      title: "Chat App",
      description:
        "Developed a full-stack real-time chat application enabling secure and seamless user communication. Integrated JWT-based authentication, bcrypt-hashed password storage, and WebSocket-powered messaging via Socket.io. Managed state using Zustand and built a fully responsive frontend.",
      tech: [
        "React",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "JWT",
        "Zustand",
      ],
      demo: "#",
      image: "/projects/chat-app.jpg",
    },
    {
      title: "Movie Recommendation System",
      description:
        "Developed a hybrid ML-powered application that uses image processing and Convolutional Neural Networks (CNN) to detect user emotions and provide personalized movie recommendations using advanced machine learning concepts.",
      tech: [
        "Python",
        "CNN",
        "React",
        "Node.js",
        "Flask",
        "MySQL",
        "ML",
      ],
      demo: "#",
      image: "/projects/movie-recommendation.jpg",
    },
    {
      title: "Ticket Modeling System",
      description:
        "Modelled a ticketing system consisting of a shared ticket machine used by passengers and serviced by two technicians using FSP (Finite State Processes) and implementing it in Java with concurrency features.",
      tech: ["Java", "Concurrency", "FSP", "OOP"],
      demo: "#",
      image: "/projects/ticket-system.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 bg-black/50"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-[#b9ff1c]">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/50 border-2 border-[#b9ff1c]/30 rounded-xl overflow-hidden hover:scale-105 hover:border-[#b9ff1c] transition-all duration-300 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.image && (
                <div className="w-full h-40 sm:h-48 md:h-56 overflow-hidden bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.style.background =
                        "linear-gradient(135deg, #b9ff1c 0%, #8bcf1c 100%)";
                    }}
                  />
                </div>
              )}
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#b9ff1c] hover:text-[#b9ff1c]/80 transition-colors duration-300 text-sm font-semibold flex items-center gap-1"
                    >
                      Live Demo
                      <span>→</span>
                    </a>
                  )}
                </div>
                <p className="text-white mb-4 text-sm leading-relaxed text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#b9ff1c]/20 text-[#b9ff1c] rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

