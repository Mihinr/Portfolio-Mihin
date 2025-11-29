function Experience() {
  const experiences = [
    {
      title: "Software Engineer - Internship",
      company: "Commercial Bank PLC",
      logo: "/experience/commercialbank.png",
      period: "April 2025 - July 2025",
      description:
        "Worked as a Software Engineer focusing on database administration. Developed a monitoring dashboard to track key metrics such as uptime, database size, log usage, active connections, CPU/memory usage, running and top queries, blocking sessions, waits, and index health. Technologies: Python, Streamlit, Pandas, Sqlalchemy, SQL Server.",
    },
    {
      title: "IFS Software Engineer - Internship",
      company: "Enterprise Analytics (IFS)",
      logo: "/experience/enterpriseanalytics.png",
      period: "2022 - 2023",
      description:
        "Worked primarily within the IFS Enterprise Resource Planning (ERP) application to configure solutions based on customer requirements. Utilized Oracle PL/SQL for business logic programming. Applied the IFS Development Framework for both frontend and backend development. Provided technical support during go-live activities. Technologies: SQL, PL/SQL, Aurena, Azure, Bitbucket, GitHub, Jira, Power BI.",
    },
    {
      title: "Freelance Software Engineer",
      company: "Codeyard Labs",
      logo: "/experience/codeyardlabs.png",
      period: "December 2024 - Present",
      description:
        "Delivered fully functional web applications including Winners.lk (badminton equipment & session management), Giftora.info (online gifting platform), Studio15Architects.co.uk (architectural portfolio), and Gowinsports.lk (e-commerce platform). Handled entire process from client discussions and project planning to development and deployment using React.js, Flask, Node.js, MySQL, and MongoDB.",
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-[#b9ff1c]">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-xl p-4 sm:p-6 md:p-8 border-l-4 border-[#b9ff1c] hover:shadow-lg hover:shadow-[#b9ff1c]/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-white/5 p-2 border border-[#b9ff1c]/30"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.title}
                  </h3>
                </div>
              </div>
              <p className="text-[#b9ff1c] font-semibold mb-2">
                {exp.company} • {exp.period}
              </p>
              <p className="text-sm sm:text-base text-white text-justify">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

