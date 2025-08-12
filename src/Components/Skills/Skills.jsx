import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiGit,
    SiFigma,
    SiFirebase
} from 'react-icons/si';

const skillsData = {
    Frontend: [
        { name: 'HTML5', level: 90, icon: SiHtml5 },
        { name: 'CSS3', level: 85, icon: SiCss3 },
        { name: 'JavaScript', level: 85, icon: SiJavascript },
        { name: 'React.js', level: 80, icon: SiReact },
        { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss },
    ],
    Backend: [
        { name: 'Node.js', level: 75, icon: SiNodedotjs },
        { name: 'Express.js', level: 75, icon: SiExpress },
        { name: 'MongoDB', level: 70, icon: SiMongodb },
    ],
    Tools: [
        { name: 'Git', level: 80, icon: SiGit },
        { name: 'Figma', level: 70, icon: SiFigma },
        { name: 'Firebase', level: 75, icon: SiFirebase },
    ]
};

const SkillBar = ({ name, level, Icon }) => {
    return (
        <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    {Icon && <Icon className="text-[#FF3D00]" size={18} />}
                    <span className="font-medium">{name}</span>
                </div>
                <span className="text-[#FF3D00]">{level}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-[#FF3D00] rounded-full transition-all duration-500"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
};

const Skills = () => {
    const skillsRef = useDocumentTitle('Skills & Expertise | Piyal Islam', {
        enableIntersectionObserver: true,
        threshold: 0.3
    });
    
    return (
        <section 
            ref={skillsRef}
            id="skills" 
            className="py-20"
        >
            <div className="w-11/12 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">
                    My <span className="text-[#FF3D00]">Skills</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className="p-6 bg-gray-900/50 rounded-xl">
                            <h3 className="text-2xl font-semibold mb-6">{category}</h3>
                            <div>
                                {skills.map((skill) => (
                                    <SkillBar
                                        key={skill.name}
                                        name={skill.name}
                                        level={skill.level}
                                        Icon={skill.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;