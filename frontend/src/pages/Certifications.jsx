function Certifications() {
  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      logo: "/certifications/azure.png",
      status: "Completed",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      logo: "/certifications/aws.png",
      status: "Ongoing",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-12 sm:py-16 md:py-20 px-4 bg-black/50"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-[#b9ff1c]">
          Certifications
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-xl p-6 border-l-4 border-[#b9ff1c] hover:shadow-lg hover:shadow-[#b9ff1c]/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-white/5 p-2 border border-[#b9ff1c]/30"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                </div>
              </div>
              <p className="text-[#b9ff1c]">{cert.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
