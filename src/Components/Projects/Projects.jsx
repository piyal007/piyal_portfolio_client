import React from 'react';
import { ExternalLink, Github, Copy } from 'lucide-react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import toast from 'react-hot-toast';

const projectsData = [
    {
        name: 'Quicklance',
        image: 'https://i.postimg.cc/NMNGjcK5/Screenshot-2025-06-30-120253.png',
        description: 'A freelance marketplace website.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
        liveLink: 'https://assignment-10-2e230.web.app/',
        githubLink: 'https://github.com/piyal007/quicklancer'
    },
    {
        name: 'Tradenest',
        image: 'https://i.postimg.cc/cCpvdSzf/Screenshot-2025-06-30-122806.png',
        description: 'A bulk trade related website.',
        technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
        liveLink: 'https://assignment-11-ec3c7.web.app/',
        githubLink: 'https://github.com/piyal007/trade_nest'
    },
    {
        name: 'DocTalk',
        image: 'https://i.postimg.cc/Mpv6KTRR/Screenshot-2025-06-30-123937.png',
        description: 'An online doctor related website.',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        liveLink: 'https://p-assignment8.netlify.app/',
        githubLink: 'https://github.com/piyal007/DocTalk'
    }
];

const Projects = () => {
    const projectsRef = useDocumentTitle('Projects | Piyal Islam', {
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
            ref={projectsRef}
            id="projects" 
            className="py-20"
        >
            <div className="w-11/12 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">
                    My <span className="text-[#FF3D00]">Projects</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div key={index} className="bg-gray-900/50 rounded-xl overflow-hidden group">
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.name}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            
                            {/* Project Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                
                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, i) => (
                                        <span 
                                            key={i}
                                            className="px-3 py-1 bg-[#FF3D00]/20 text-[#FF3D00] rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Links */}
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2">
                                        <a 
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white hover:text-[#FF3D00] transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                            Live Demo
                                        </a>
                                        <button
                                            onClick={() => copyToClipboard(project.liveLink, 'Live demo link')}
                                            className="p-1 hover:bg-gray-700 rounded transition-colors"
                                            title="Copy live demo link"
                                        >
                                            <Copy size={14} className="text-gray-400 hover:text-[#FF3D00]" />
                                        </button>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <a 
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white hover:text-[#FF3D00] transition-colors"
                                        >
                                            <Github size={20} />
                                            Source Code
                                        </a>
                                        <button
                                            onClick={() => copyToClipboard(project.githubLink, 'Source code link')}
                                            className="p-1 hover:bg-gray-700 rounded transition-colors"
                                            title="Copy source code link"
                                        >
                                            <Copy size={14} className="text-gray-400 hover:text-[#FF3D00]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* See All Projects Button */}
                <div className="flex justify-center mt-12">
                    <a
                        href="#" // Replace with your all-projects page or external portfolio link
                        className="px-8 py-3 bg-[#FF3D00] text-white rounded-full font-semibold shadow-lg hover:bg-[#d63400] transition-colors duration-200"
                        target='_blank'
                    >
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;