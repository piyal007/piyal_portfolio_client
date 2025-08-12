import React from 'react';
import { ExternalLink } from 'lucide-react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const premiumCourses = [
    {
        title: 'MERN Stack Development',
        platform: 'Programming Hero',
        badge: 'In-depth',
        description:
            'Learn to build powerful, full-stack applications using MongoDB, Express.js, React, and Node.js. Gain hands-on experience with real-world projects, database design, API development, and responsive UI creation — all guided by expert mentors to prepare you for industry-ready MERN stack development.',
        link: 'https://web.programming-hero.com/',
    },    

];

const CourseCard = ({ course }) => (
  <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-[#FF3D00]/40 transition-colors flex flex-col">
    <div className="flex items-center justify-between mb-2">
      <h4 className="text-xl font-semibold">{course.title}</h4>
      {course.badge && (
        <span className="px-2 py-1 rounded-full text-xs bg-[#FF3D00]/20 text-[#FF3D00]">{course.badge}</span>
      )}
    </div>
    <p className="text-sm text-gray-400 mb-4">{course.platform}</p>
    <p className="text-gray-300 flex-1">{course.description}</p>
    <div className="mt-5">
      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white hover:text-[#FF3D00] transition-colors"
      >
        <ExternalLink size={18} /> View Credentials
      </a>
    </div>
  </div>
);

export default function Courses() {
  const coursesRef = useDocumentTitle('Premium Courses | Piyal Islam', {
    enableIntersectionObserver: true,
    threshold: 0.2,
  });

  return (
    <section ref={coursesRef} id="courses" className="py-20 bg-gray-900/50">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-center mb-10">
          <h2 className="text-4xl font-bold">
            Premium <span className="text-[#FF3D00]">Courses</span>
          </h2>
          {/* <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#FF3D00]/50 transition-colors"
          >
            Explore More
          </a> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumCourses.map((c) => (
            <CourseCard key={c.title} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
