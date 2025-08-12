import React from "react";
import { Github, Linkedin, FileUser, Handshake } from "lucide-react";
import { SiDevdotto, SiHashnode } from 'react-icons/si';
import useDocumentTitle from "../../hooks/useDocumentTitle";
// toast reserved for future interactions

const Hero = () => {
  const heroRef = useDocumentTitle('Piyal Islam | Frontend Developer', {
    enableIntersectionObserver: true,
    threshold: 0.3
  });
  
  // (reserved) copy helper if needed in future
  
  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center py-16 lg:py-0"
    >
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left side: Text content - Order 2 on mobile, Order 1 on desktop */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-[#FF3D00]">Piyal Islam</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl mb-6">Frontend Developer</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Passionate about creating elegant solutions and turning ideas into
              reality through code.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/piyal007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#FF3D00] transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/piyal-islam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#FF3D00] transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://dev.to/piyal007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#FF3D00] transition-colors"
                >
                  <SiDevdotto size={24} />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://hashnode.com/@piyal007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#FF3D00] transition-colors"
                >
                  <SiHashnode size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-6">
              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1hcq5WwAoUP4IAqH4kTtfYasWDlQVoJyZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#FF3D00] hover:bg-[#FF3D00]/80 text-white border-none gap-2"
              >
                <FileUser size={20} />
                Resume
              </a>
              {/* Hire Me Button */}
              <button
                className="btn bg-[#FF3D00] hover:bg-[#FF3D00]/80 text-white border-none gap-2"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                    // Update URL hash
                    window.location.hash = "contact";
                  }
                }}
              >
                <Handshake size={20} />
                Hire Me
              </button>
            </div>
          </div>

          {/* Right side: Image - Order 1 on mobile, Order 2 on desktop */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#FF3D00] shadow-lg">
              <div className="w-full h-full flex items-center justify-center relative">
                <img
                  src="https://i.postimg.cc/SRnB69JN/dev-piyal-round-transparent.png"
                  alt="Young Male Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
