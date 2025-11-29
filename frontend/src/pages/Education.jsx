function Education() {
  const education = [
    {
      degree: "BEng (Hons) Software Engineering",
      school: "University of Westminster affiliated with IIT",
      logo: "/education/uow.png",
      period: "2021 - 2024",
      description:
        "Upper Second Class. Key Modules: Concurrent Programming, Object Oriented Programming, Web Development, Data Structures & Algorithms, Database Systems, Cybersecurity, Machine Learning.",
    },
    {
      degree: "Advanced Level",
      school: "S. Thomas's College",
      logo: "/education/stc.png",
      period: "2017 - 2019",
      description: "Stream: Mathematics",
    },
  ];

  return (
    <section
      id="education"
      className="py-12 sm:py-16 md:py-20 px-4 bg-black/50"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-[#b9ff1c]">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-xl p-4 sm:p-6 md:p-8 border-l-4 border-[#b9ff1c] hover:shadow-lg hover:shadow-[#b9ff1c]/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-white/5 p-2 border border-[#b9ff1c]/30"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                </div>
              </div>
              <p className="text-[#b9ff1c] font-semibold mb-2">
                {edu.school} • {edu.period}
              </p>
              <p className="text-sm sm:text-base text-white text-justify">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
