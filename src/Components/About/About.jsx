import React from 'react';
import { Code2, Palette, Gamepad2 } from 'lucide-react';
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
                    
                    {/* Right side: Interests */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Beyond Coding</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#FF3D00] rounded-lg">
                                    <Code2 size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium mb-2">Technical Writing</h4>
                                    <p className="text-gray-300">
                                        I enjoy sharing my knowledge through technical blogs and documentation.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#FF3D00] rounded-lg">
                                    <Palette size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium mb-2">Digital Art</h4>
                                    <p className="text-gray-300">
                                        Creating digital artwork helps me maintain creativity in problem-solving.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#FF3D00] rounded-lg">
                                    <Gamepad2 size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium mb-2">Gaming</h4>
                                    <p className="text-gray-300">
                                        I'm an avid gamer who enjoys strategy and puzzle games in my free time.
                                    </p>
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