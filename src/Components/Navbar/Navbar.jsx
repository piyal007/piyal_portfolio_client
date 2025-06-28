import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const sectionIds = ["home", "about", "projects", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Handles scroll and hash change to update active section
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) {
            // 80px offset for navbar height
            setActiveSection(sectionIds[i]);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("home");
    };
    window.addEventListener("scroll", handleScroll);
    // Also handle hash change (for direct clicks)
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Unified handler for mobile menu link clicks
  const handleMobileMenuClick = (section) => (e) => {
    e.preventDefault();
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      window.location.hash = section;
    }
    setActiveSection(section);
  };

  return (
    <nav className="text-white backdrop-blur-sm border-b-gray-800 bg-gray-900/80 sticky top-0 z-50">
      <div className="flex justify-between items-center mx-6">
        {/* Left: Logo */}
        <div>
          <h2 className="rancho uppercase font-bold text-xl md:text-3xl text-[#FF3D00]">
            &lt;/ piyal islam &gt;
          </h2>
        </div>

        {/* Right: Desktop Menu or Mobile Menu Icon */}
        <div className="flex items-center">
          {/* Desktop Menu */}
          <ul className="menu menu-horizontal px-1 **:text-xl hidden lg:flex">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  window.history.replaceState(null, "", "/");
                  setActiveSection("home");
                }}
                className={
                  activeSection === "home" ? "text-[#FF3D00] font-bold" : ""
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={
                  activeSection === "about" ? "text-[#FF3D00] font-bold" : ""
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={
                  activeSection === "projects" ? "text-[#FF3D00] font-bold" : ""
                }
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={
                  activeSection === "contact" ? "text-[#FF3D00] font-bold" : ""
                }
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900/80 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* Mobile menu links use the unified handler to avoid code repetition */}
              <li>
                <a
                  href="#"
                  onClick={handleMobileMenuClick("home")}
                  className={
                    activeSection === "home" ? "text-[#FF3D00] font-bold" : ""
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={handleMobileMenuClick("about")}
                  className={
                    activeSection === "about" ? "text-[#FF3D00] font-bold" : ""
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={handleMobileMenuClick("projects")}
                  className={
                    activeSection === "projects"
                      ? "text-[#FF3D00] font-bold"
                      : ""
                  }
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleMobileMenuClick("contact")}
                  className={
                    activeSection === "contact"
                      ? "text-[#FF3D00] font-bold"
                      : ""
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
