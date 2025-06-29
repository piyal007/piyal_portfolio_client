import React from "react";
import { Github, Linkedin, Facebook, Twitter, FileUser, Handshake } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-16 lg:py-0"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left side: Text content - Order 2 on mobile, Order 1 on desktop */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-[#FF3D00]">Piyal Islam</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl mb-6">MERN Stack Developer</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Passionate about creating elegant solutions and turning ideas into
              reality through code.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <a
                href="https://github.com/piyal007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-[#FF3D00] transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/piyal-islam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-[#FF3D00] transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://facebook.com/piyal.islam.666"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-[#FF3D00] transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://x.com/piyal_sha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-[#FF3D00] transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>

            <div className="flex gap-6">
              
              {/* Resume Button */}
              <button className="btn bg-[#FF3D00] hover:bg-[#FF3D00]/80 text-white border-none gap-2">
              <FileUser size={20}/>
                Download Resume
              </button>
              {/* Hire Me Button */}
              <button className="btn bg-[#FF3D00] hover:bg-[#FF3D00]/80 text-white border-none gap-2">
              <Handshake size={20}/>
                Hire Me
              </button>
            </div>
          </div>

          {/* Right side: Image - Order 1 on mobile, Order 2 on desktop */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#FF3D00] shadow-lg">
              <img
                src="https://placehold.co/400x400/FF3D00/ffffff?text=Your+Photo"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
