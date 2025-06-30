import React from 'react';
import { Github, Linkedin, Facebook, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900/80 py-8">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col items-center space-y-6">
                    {/* Logo */}
                    <h2 className="rancho uppercase font-bold text-2xl text-[#FF3D00]">
                        &lt; piyal islam /&gt;
                    </h2>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a href="https://github.com/piyal007" target="_blank" rel="noopener noreferrer"
                           className="p-2 hover:text-[#FF3D00] transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/piyal-islam" target="_blank" rel="noopener noreferrer"
                           className="p-2 hover:text-[#FF3D00] transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://facebook.com/piyal.islam.666" target="_blank" rel="noopener noreferrer"
                           className="p-2 hover:text-[#FF3D00] transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="https://x.com/piyal_sha" target="_blank" rel="noopener noreferrer"
                           className="p-2 hover:text-[#FF3D00] transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                        <span>Made with</span>
                        <Heart size={16} className="text-[#FF3D00] fill-[#FF3D00]" />
                        <span>by Piyal Islam © {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;