function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-[#b9ff1c]">
          Skills
        </h2>

        <div className="space-y-12">
          {/* Programming Languages */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#b9ff1c] mb-4 sm:mb-6 border-b-2 border-[#b9ff1c]/30 pb-2">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: "Java", image: "/skills/java.png" },
                { name: "Python", image: "/skills/python.png" },
                { name: "JavaScript", image: "/skills/javascript.png" },
                { name: "Tailwind CSS", image: "/skills/tailwind.png" },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-black/50 rounded-xl p-4 sm:p-6 text-center hover:scale-110 transition-transform duration-300 cursor-pointer animate-slide-up border border-[#b9ff1c]/30 hover:border-[#b9ff1c]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-3">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<div class="text-4xl mb-3">${skill.name.charAt(
                          0
                        )}</div>`;
                      }}
                    />
                  </div>
                  <div className="text-white font-semibold text-xs sm:text-sm">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#b9ff1c] mb-4 sm:mb-6 border-b-2 border-[#b9ff1c]/30 pb-2">
              Frameworks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: "React", image: "/skills/react.png", note: null },
                { name: "Node", image: "/skills/node.png", note: null },
                { name: "Flask", image: "/skills/flask.png", note: null },
                {
                  name: "Spring Boot",
                  image: "/skills/springboot.png",
                  note: "(Learning)",
                },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-black/50 rounded-xl p-4 sm:p-6 text-center hover:scale-110 transition-transform duration-300 cursor-pointer animate-slide-up border border-[#b9ff1c]/30 hover:border-[#b9ff1c]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-3">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<div class="text-4xl mb-3">${skill.name.charAt(
                          0
                        )}</div>`;
                      }}
                    />
                  </div>
                  <div className="text-white font-semibold text-xs sm:text-sm">
                    {skill.name}
                  </div>
                  {skill.note && (
                    <div className="text-xs text-[#b9ff1c]/70 mt-1">
                      {skill.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & Databases */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#b9ff1c] mb-4 sm:mb-6 border-b-2 border-[#b9ff1c]/30 pb-2">
              Cloud & Databases
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: "Firebase", image: "/skills/firebase.png" },
                { name: "MySQL", image: "/skills/mysql.png" },
                { name: "MongoDB", image: "/skills/mongodb.png" },
                { name: "Cloudinary", image: "/skills/cloudinary.png" },
                { name: "AWS", image: "/skills/aws.png" },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-black/50 rounded-xl p-4 sm:p-6 text-center hover:scale-110 transition-transform duration-300 cursor-pointer animate-slide-up border border-[#b9ff1c]/30 hover:border-[#b9ff1c]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-3">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<div class="text-4xl mb-3">${skill.name.charAt(
                          0
                        )}</div>`;
                      }}
                    />
                  </div>
                  <div className="text-white font-semibold text-xs sm:text-sm">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Technical Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#b9ff1c] mb-4 sm:mb-6 border-b-2 border-[#b9ff1c]/30 pb-2">
              Other Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                {
                  name: "WebSockets",
                  image: "/skills/websockets.png",
                  note: null,
                },
                {
                  name: "JWT Authentication",
                  image: "/skills/jwt.png",
                  note: null,
                },
                {
                  name: "Password Hashing",
                  image: "/skills/bcrypt.png",
                  note: "(bcrypt)",
                },
                {
                  name: "UI/UX Design",
                  image: "/skills/uiux.png",
                  note: null,
                },
                { name: "REST", image: "/skills/rest.png", note: null },
                { name: "GitHub", image: "/skills/github.png", note: null },
                { name: "Docker", image: "/skills/docker.png", note: null },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-black/50 rounded-xl p-4 sm:p-6 text-center hover:scale-110 transition-transform duration-300 cursor-pointer animate-slide-up border border-[#b9ff1c]/30 hover:border-[#b9ff1c]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-3">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<div class="text-4xl mb-3">${skill.name.charAt(
                          0
                        )}</div>`;
                      }}
                    />
                  </div>
                  <div className="text-white font-semibold text-sm">
                    {skill.name}
                  </div>
                  {skill.note && (
                    <div className="text-xs text-[#b9ff1c]/70 mt-1">
                      {skill.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

