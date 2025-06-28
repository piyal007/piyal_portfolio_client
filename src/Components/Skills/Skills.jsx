import React from 'react';

const skillsData = {
    Frontend: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
    ],
    Backend: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'RESTful APIs', level: 80 },
    ],
    Tools: [
        { name: 'Git', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'Firebase', level: 75 },
    ]
};

const SkillBar = ({ name, level }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                <span className="font-medium">{name}</span>
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
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
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