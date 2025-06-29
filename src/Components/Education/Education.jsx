import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const educationData = [
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Technology',
        duration: '2019 - 2023',
        description: 'Specialized in Software Engineering with focus on web technologies and database management.'
    },
    {
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'City College',
        duration: '2017 - 2019',
        description: 'Completed HSC with major in Science, achieving excellent academic results.'
    }
];

const Education = () => {
    const educationRef = useDocumentTitle('Education & Background | Piyal Islam', {
        enableIntersectionObserver: true,
        threshold: 0.3
    });
    
    return (
        <section 
            ref={educationRef}
            className="py-20 bg-gray-900/50"
        >
            <div className="w-11/12 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">
                    My <span className="text-[#FF3D00]">Education</span>
                </h2>
                
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        {educationData.map((edu, index) => (
                            <div 
                                key={index} 
                                className="relative pl-8 border-l-2 border-[#FF3D00] pb-8 last:pb-0"
                            >
                                {/* Dot on timeline */}
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#FF3D00] rounded-full"></div>
                                
                                <div className="bg-gray-800/50 p-6 rounded-lg">
                                    <div className="flex items-center gap-2 text-[#FF3D00] mb-2">
                                        <GraduationCap size={20} />
                                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                                        <Calendar size={16} />
                                        <span>{edu.duration}</span>
                                    </div>
                                    
                                    <h4 className="text-lg font-medium mb-3">{edu.institution}</h4>
                                    
                                    <p className="text-gray-300">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;