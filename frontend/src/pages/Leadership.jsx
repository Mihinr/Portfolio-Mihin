import Carousel from "../components/Carousel";

function Leadership() {
  return (
    <section id="hobbies" className="py-12 sm:py-16 md:py-20 px-4 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-[#b9ff1c]">
          Leadership & Extracurriculars
        </h2>

        {/* Carousel for Leadership Images */}
        <div className="mb-8 sm:mb-12">
          <Carousel
            items={[
              {
                image: "/extracurriculars/1.jpg",
                title:
                  "Badminton - All island championships, IIT captain (2024)",
              },
              {
                image: "/extracurriculars/2.jpg",
                title: "69th Colombo Scout Troop Leader",
              },
              {
                image: "/extracurriculars/3.jpg",
                title: "Athletics",
              },
              {
                image: "/extracurriculars/4.jpg",
                title: "Rotaract Club of Colombo West (Active)",
              },
              {
                image: "/extracurriculars/5.jpg",
                title: "Leadership Activities",
              },
              {
                image: "/extracurriculars/6.jpg",
                title: "Leadership Activities",
              },
              {
                image: "/extracurriculars/7.jpg",
                title: "Leadership Activities",
              },
              {
                image: "/extracurriculars/8.jpg",
                title: "Leadership Activities",
              },
              {
                image: "/extracurriculars/9.jpg",
                title: "Leadership Activities",
              },
              {
                image: "/extracurriculars/10.jpg",
                title: "Leadership Activities",
              },
              {
                image: "/extracurriculars/11.jpg",
                title: "Leadership Activities",
              },
            ]}
          />
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {[
            {
              name: "Badminton",
              logo: "/extracurriculars/badminton.png",
              desc: "All island championships, IIT captain (2024)",
            },
            {
              name: "Scouting",
              logo: "/extracurriculars/scout.png",
              desc: "69th Colombo Scout Troop Leader",
            },
            {
              name: "Athletics",
              logo: "/extracurriculars/athletics.png",
              desc: "Athletics",
            },
            {
              name: "Rotaract",
              logo: "/extracurriculars/west.png",
              desc: "Rotaract Club of Colombo West (Active)",
            },
          ].map((hobby, index) => (
            <div
              key={hobby.name}
              className="bg-black/50 rounded-xl p-4 sm:p-6 text-center hover:scale-110 transition-transform duration-300 cursor-pointer animate-slide-up border border-[#b9ff1c]/30 hover:border-[#b9ff1c]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-3">
                <img
                  src={hobby.logo}
                  alt={hobby.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="text-5xl mb-3">${hobby.name.charAt(
                      0
                    )}</div>`;
                  }}
                />
              </div>
              <div className="text-white font-semibold">{hobby.name}</div>
              <div className="text-sm text-white/70 mt-2">{hobby.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
