import { useState } from "react";
import { toast } from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending message...");

    try {
      const formAction = "https://formsubmit.co/mihinratnayake19@gmail.com";

      // Create a form data object
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("_captcha", "false");
      formDataToSend.append(
        "_subject",
        `Portfolio Contact: Message from ${formData.name}`
      );
      formDataToSend.append("_template", "box");
      formDataToSend.append(
        "_autoresponse",
        "Thank you for contacting me! I'll get back to you soon."
      );

      const response = await fetch(formAction, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(
        "Failed to send message. Please try again or contact me directly."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-[#b9ff1c]">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Left Side - Contact Form */}
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-black/50 border border-[#b9ff1c]/30 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl animate-fade-in"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#b9ff1c] mb-4 sm:mb-6">
                Send a Message
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-black border border-[#b9ff1c]/30 rounded-lg focus:outline-none focus:border-[#b9ff1c] text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-black border border-[#b9ff1c]/30 rounded-lg focus:outline-none focus:border-[#b9ff1c] text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-black border border-[#b9ff1c]/30 rounded-lg focus:outline-none focus:border-[#b9ff1c] text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-[#b9ff1c] text-black rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#b9ff1c]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Other Ways to Contact */}
          <div className="w-full">
            <div className="bg-black/50 border border-[#b9ff1c]/30 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl animate-fade-in h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#b9ff1c] mb-4 sm:mb-6">
                Other Ways to Contact
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    name: "WhatsApp",
                    icon: "/social/whatsapp.png",
                    url: "https://wa.me/94778004904",
                    description: "+94 778004904",
                  },
                  {
                    name: "LinkedIn",
                    icon: "/social/linkedin.png",
                    url: "https://www.linkedin.com/in/mihinratnayake/",
                    description: "Connect on LinkedIn",
                  },
                  {
                    name: "Gmail",
                    icon: "/social/gmail.png",
                    url: "mailto:mihinratnayake19@gmail.com",
                    description: "mihinratnayake19@gmail.com",
                  },
                  {
                    name: "Phone",
                    icon: "/social/telephone.png",
                    url: "tel:+94778004904",
                    description: "+94 778004904",
                  },
                ].map((contact, index) => (
                  <a
                    key={contact.name}
                    href={contact.url}
                    target={
                      contact.url.startsWith("http") ? "_blank" : "_self"
                    }
                    rel={
                      contact.url.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-black/50 border border-[#b9ff1c]/30 rounded-lg hover:border-[#b9ff1c] hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#b9ff1c]/10 rounded-lg group-hover:bg-[#b9ff1c]/20 transition-colors duration-300">
                      <img
                        src={contact.icon}
                        alt={contact.name}
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<span class="text-2xl">${contact.name.charAt(
                            0
                          )}</span>`;
                        }}
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white font-semibold text-base sm:text-lg group-hover:text-[#b9ff1c] transition-colors duration-300">
                        {contact.name}
                      </h4>
                      <p className="text-white/70 text-xs sm:text-sm">
                        {contact.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-[#b9ff1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

