import React from 'react';
import { Code2, Wrench, Gauge, Bug } from 'lucide-react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const About = () => {
    const aboutRef = useDocumentTitle('About Me | Piyal Islam', {
        enableIntersectionObserver: true,
        threshold: 0.3
    });
    
    return (
        <section 
            ref={aboutRef}
            id="about" 
            className="py-20 bg-gray-900/50"
        >
            <div className="w-11/12 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">
                    About <span className="text-[#FF3D00]">Me</span>
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left side: Journey */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                        <p className="text-gray-300 leading-relaxed">
                            My programming journey began with a fascination for creating things from scratch. 
                            What started as curiosity has evolved into a passionate career in web development. 
                            I specialize in building robust and user-friendly applications using modern technologies.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I enjoy tackling complex problems and turning them into simple and beautiful solutions. 
                            My focus is on writing clean, maintainable code that delivers great user experiences.
                        </p>
                    </div>
                    
                    {/* Right side: Programming Focus Areas */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">What I Focus On</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#FF3D00] rounded-lg">
                                    <Code2 size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium mb-2">Frontend Engineering</h4>
                                    <p className="text-gray-300">Building accessible, responsive, and scalable UI with modern React patterns.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#FF3D00] rounded-lg">
                                    <Gauge size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium mb-2">Performance & Accessibility</h4>
                                    <p className="text-gray-300">Optimizing Core Web Vitals and ensuring inclusive, keyboard-friendly experiences.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#FF3D00] rounded-lg">
                                    <Wrench size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium mb-2">Testing & Quality</h4>
                                    <p className="text-gray-300">Focusing on reliability with component testing, type-safety, and robust CI.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;