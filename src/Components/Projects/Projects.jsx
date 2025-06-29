import React from 'react';
import { ExternalLink, Github, Copy } from 'lucide-react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import toast from 'react-hot-toast';

const projectsData = [
    {
        name: 'Restaurant Management System',
        image: 'https://placehold.co/600x400/FF3D00/ffffff?text=Restaurant+App',
        description: 'A full-stack restaurant management application with order processing, menu management, and reservation system.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
        liveLink: 'https://restaurant-app.demo',
        githubLink: 'https://github.com/yourusername/restaurant-app'
    },
    {
        name: 'E-Learning Platform',
        image: 'https://placehold.co/600x400/FF3D00/ffffff?text=E-Learning+Platform',
        description: 'An interactive e-learning platform with course management, video lectures, and progress tracking.',
        technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
        liveLink: 'https://e-learning.demo',
        githubLink: 'https://github.com/yourusername/e-learning'
    },
    {
        name: 'Task Management App',
        image: 'https://placehold.co/600x400/FF3D00/ffffff?text=Task+Management',
        description: 'A collaborative task management application with real-time updates and team collaboration features.',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        liveLink: 'https://task-app.demo',
        githubLink: 'https://github.com/yourusername/task-app'
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
            </div>
        </section>
    );
};

export default Projects;