import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { getProjectBySlug } from '../../data/projects';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="py-20">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <p className="text-gray-300 mb-8">The project you are looking for does not exist.</p>
          <Link to="/" className="btn bg-[#FF3D00] text-white border-none">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="w-11/12 mx-auto max-w-5xl">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-[#FF3D00] hover:underline">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden bg-gray-900/50">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
            <p className="text-gray-300 mb-6">{project.description}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Main Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#FF3D00]/20 text-[#FF3D00] rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-10">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#FF3D00] transition-colors"
              >
                <ExternalLink size={20} /> Live Project
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#FF3D00] transition-colors"
              >
                <Github size={20} /> GitHub (Client)
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Challenges Faced</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Improvements & Future Plans</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.improvements.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;


