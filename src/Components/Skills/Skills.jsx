import React, { useMemo, useState } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiReactrouter,
    SiFramer,
    SiVite,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiJsonwebtokens,
    SiSocketdotio,
    SiGit,
    SiGithub,
    SiFigma,
    SiFirebase,
    SiPostman,
    SiVercel,
    SiNetlify,
    SiNpm,
    SiEslint,
    SiMui,
    SiAntdesign,
    SiBootstrap,
    SiShadcnui
} from 'react-icons/si';

const skillsData = {
    Frontend: [
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'React.js', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'React Router', icon: SiReactrouter },
        { name: 'Framer Motion', icon: SiFramer },
        { name: 'Vite', icon: SiVite },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
    'UI Libraries': [
        { name: 'MUI', icon: SiMui },
        { name: 'Ant Design', icon: SiAntdesign },
        { name: 'Bootstrap', icon: SiBootstrap },
        {name: 'Shadcn UI', icon: SiShadcnui},
    ],
    Backend: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Mongoose', icon: SiMongoose },
        { name: 'JWT', icon: SiJsonwebtokens },
        { name: 'Socket.io', icon: SiSocketdotio },
    ],
    Tools: [
        { name: 'Git', icon: SiGit },
        { name: 'GitHub', icon: SiGithub },
        { name: 'Figma', icon: SiFigma },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Postman', icon: SiPostman },
        { name: 'Vercel', icon: SiVercel },
        { name: 'Netlify', icon: SiNetlify },
        { name: 'NPM', icon: SiNpm },
        { name: 'ESLint', icon: SiEslint }
    ]
};

const brandColors = {
    'HTML5': '#E34F26',
    'CSS3': '#1572B6',
    'JavaScript': '#F7DF1E',
    'TypeScript': '#3178C6',
    'React.js': '#61DAFB',
    'Next.js': '#FFFFFF',
    'React Router': '#CA4245',
    'Framer Motion': '#0055FF',
    'Vite': '#646CFF',
    'Tailwind CSS': '#38BDF8',
    'MUI': '#007FFF',
    'Ant Design': '#1890FF',
    'Bootstrap': '#7952B3',
    'Shadcn UI': '#000000',
    'Node.js': '#339933',
    'Express.js': '#FFFFFF',
    'MongoDB': '#47A248',
    'Mongoose': '#880000',
    'JWT': '#000000',
    'Socket.io': '#010101',
    'Git': '#F05032',
    'GitHub': '#FFFFFF',
    'Figma': '#F24E1E',
    'Firebase': '#FFCA28',
    'Postman': '#FF6C37',
    'Vercel': '#FFFFFF',
    'Netlify': '#00C7B7',
    'NPM': '#CB3837',
    'ESLint': '#4B32C3'
};

const SkillItem = ({ name, Icon }) => (
    <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-[#FF3D00]/40 transition-colors">
        <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gray-800/60 flex items-center justify-center shadow-inner">
                {Icon && <Icon size={32} style={{ color: brandColors[name] || '#FF3D00' }} />}
            </div>
            <span className="font-medium">{name}</span>
        </div>
    </div>
);

const Skills = () => {
    const skillsRef = useDocumentTitle('Skills & Expertise | Piyal Islam', {
        enableIntersectionObserver: true,
        threshold: 0.3
    });
    const categories = useMemo(() => Object.keys(skillsData), []);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    
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
                {/* Tabs */}
                <div role="tablist" aria-label="Skills categories" className="flex flex-wrap gap-3 justify-center mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            role="tab"
                            aria-selected={activeCategory === cat}
                            className={`px-5 py-2 rounded-full border transition-colors ${
                                activeCategory === cat
                                    ? 'bg-[#FF3D00] border-[#FF3D00] text-white'
                                    : 'border-white/10 hover:border-[#FF3D00]/50'
                            }`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skillsData[activeCategory].map((skill) => (
                        <SkillItem key={skill.name} name={skill.name} Icon={skill.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;