import React, { useState } from 'react';
import { ExternalLink, Github, Copy } from 'lucide-react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import toast from 'react-hot-toast';
import { projects } from '../../data/projects';
import Modal from '../Modal/Modal';

// projects imported from data file

const Projects = () => {
    const projectsRef = useDocumentTitle('Projects | Piyal Islam', {
        enableIntersectionObserver: true,
        threshold: 0.3
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

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
    
    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
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
                    {projects.map((project, index) => (
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
                                <div className="flex flex-wrap gap-4 items-center">
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

                                    <button
                                        onClick={() => openModal(project)}
                                        className="ml-auto px-4 py-2 bg-[#FF3D00] text-white rounded-full text-sm hover:bg-[#d63400] transition-colors"
                                        aria-label={`View details for ${project.name}`}
                                    >
                                        View Details
                                    </button>
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
            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                title={selectedProject?.name || 'Project Details'}
                onClose={closeModal}
            >
                {selectedProject && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="rounded-xl overflow-hidden bg-gray-900/50">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                            <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {selectedProject.technologies.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-[#FF3D00]/20 text-[#FF3D00] rounded-full text-sm">{tech}</span>
                                ))}
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white hover:text-[#FF3D00] transition-colors"
                                >
                                    <ExternalLink size={20} /> Live Project
                                </a>
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white hover:text-[#FF3D00] transition-colors"
                                >
                                    <Github size={20} /> GitHub (Client)
                                </a>
                            </div>
                        </div>
                        {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                            <div className="lg:col-span-1 bg-gray-900/50 p-4 rounded-xl">
                                <h4 className="text-lg font-semibold mb-2">Challenges</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-300">
                                    {selectedProject.challenges.map((c) => (
                                        <li key={c}>{c}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {selectedProject.improvements && selectedProject.improvements.length > 0 && (
                            <div className="lg:col-span-1 bg-gray-900/50 p-4 rounded-xl">
                                <h4 className="text-lg font-semibold mb-2">Improvements</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-300">
                                    {selectedProject.improvements.map((i) => (
                                        <li key={i}>{i}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Projects;