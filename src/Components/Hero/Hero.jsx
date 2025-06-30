import React from "react";
import { Github, Linkedin, Twitter, FileUser, Handshake, Copy, Check } from "lucide-react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import toast from 'react-hot-toast';

// Discord Icon Component
const DiscordIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
  </svg>
);

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const Hero = () => {
  const heroRef = useDocumentTitle('Piyal Islam | MERN Stack Developer', {
    enableIntersectionObserver: true,
    threshold: 0.3
  });
  
  // Copy to clipboard function
  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} copied to clipboard!`);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy to clipboard');
    }
  };
  
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
            <h2 className="text-2xl lg:text-3xl mb-6">MERN Stack Developer</h2>
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
                  href="https://wa.me/8801956475904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#FF3D00] transition-colors"
                  onClick={() => {
                    // Try to open WhatsApp app first, fallback to web if app not installed
                    const appUrl = `whatsapp://send?phone=8801956475904`;
                    const webUrl = `https://wa.me/8801956475904`;
                    
                    // Set a timeout to redirect to web if app doesn't open
                    const timeout = setTimeout(() => {
                      window.open(webUrl, '_blank');
                    }, 1000);
                    
                    // Try to open WhatsApp app
                    window.location.href = appUrl;
                    
                    // Clear timeout after 1 second
                    setTimeout(() => {
                      clearTimeout(timeout);
                    }, 1000);
                  }}
                >
                  <WhatsAppIcon size={24} />
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href="discord://discord.com/users/913853601749819462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#FF3D00] transition-colors"
                  onClick={() => {
                    // Try to open Discord app first, fallback to web if app not installed
                    const appUrl = `discord://discord.com/users/913853601749819462`;
                    const webUrl = `https://discord.com/users/913853601749819462`;
                    
                    // Set a timeout to redirect to web if app doesn't open
                    const timeout = setTimeout(() => {
                      window.open(webUrl, '_blank');
                    }, 1000);
                    
                    // Try to open Discord app
                    window.location.href = appUrl;
                    
                    // Clear timeout after 1 second
                    setTimeout(() => {
                      clearTimeout(timeout);
                    }, 1000);
                  }}
                >
                  <DiscordIcon size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-6">
              
              {/* Resume Button */}
              <button className="btn bg-[#FF3D00] hover:bg-[#FF3D00]/80 text-white border-none gap-2">
              <FileUser size={20}/>
                Resume
              </button>
              {/* Hire Me Button */}
              <button 
                className="btn bg-[#FF3D00] hover:bg-[#FF3D00]/80 text-white border-none gap-2"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                    // Update URL hash
                    window.location.hash = 'contact';
                  }
                }}
              >
              <Handshake size={20}/>
                Hire Me
              </button>
            </div>
          </div>

          {/* Right side: Image - Order 1 on mobile, Order 2 on desktop */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#FF3D00] shadow-lg">
              <img
                src="https://i.postimg.cc/bN5T2D7R/image-removebg-preview-Edited.png"
                alt="Young Male Developer"
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
