import React from 'react';

interface Project {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 'one',
    title: 'VM PROJECTS',
    url: 'https://vm-projects.vercel.app/',
    imageUrl: 'images/vm-projects.png'
  },
  {
    id: 'two',
    title: 'ONEDRAW',
    url: 'https://one-draw-five.vercel.app/',
    imageUrl: 'images/lotto1.png'
  },
  {
    id: 'pro',
    title: 'Wilmac Insurances',
    url: 'https://wilmac-insurances.vercel.app',
    imageUrl: 'images/wilmac.png'
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="projects-container max-w-[1100px] mx-auto px-8 md:px-16 pt-10 pb-10 scroll-mt-24 border-b border-borderBlue" id="projects">
      <div className="text-center w-full mb-8">
        <h2 className="text-2xl font-bold text-lightBlue inline-block pb-2">PROJECTS</h2>
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card flex-1 min-w-[300px] min-h-[300px] rounded-lg shadow-xl relative overflow-hidden flex flex-col justify-center items-center group bg-cover bg-center"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/65 transition-colors duration-300 group-hover:bg-black/40 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 text-center p-5">
              <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wider">{project.title}</h3>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-lightBlue text-prussian font-bold py-2 px-6 rounded mt-10 hover:bg-darkerBlue hover:text-white transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};