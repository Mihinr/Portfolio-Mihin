function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 bg-black/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-[#b9ff1c]">
          About Me
        </h2>
        <div className="bg-black/50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl animate-fade-in">
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-4 sm:mb-6 text-justify">
            I'm a Web Application Developer and Software Engineer with a
            passion for creating innovative solutions and beautiful user
            experiences. With expertise in modern web technologies including
            React, Node.js, Python, and Java, I bring ideas to life through
            clean, efficient code and thoughtful design.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed text-justify">
            My journey in software development includes internships at
            Commercial Bank PLC and IFS Enterprise Analytics, where I've
            worked on database administration, ERP systems, and full-stack
            development. I'm currently working as a Freelance Software
            Engineer, delivering complete solutions from planning to
            deployment. I hold certifications in Microsoft Azure AI
            Fundamentals and am pursuing AWS Cloud Practitioner certification.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

