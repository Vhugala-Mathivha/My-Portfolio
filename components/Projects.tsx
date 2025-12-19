import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  url: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 'wilmac',
    title: 'Wilmac Insurances',
    category: 'BUSINESS',
    url: 'https://wilmac-insurances.vercel.app',
    imageUrl: 'images/wilmac.png',
  },
  {
    id: 'portfolio',
    title: 'Vhugala Portfolio',
    category: 'PORTFOLIO',
    url: '#home',
    imageUrl: 'images/Gemini_Generated_Image_ihtg7gihtg7gihtg.png',
  },
  {
    id: 'vose',
    title: 'Vose Motors',
    category: 'AUTOMOTIVE',
    url: 'https://vose-motors.vercel.app/',
    imageUrl: 'images/vose.png',
  },
  {
    id: 'agri',
    title: 'VM PROJECTS',
    category: 'BUSINESS',
    url: 'https://vm-projects.vercel.app/',
    imageUrl: 'images/vm.png',
  },
  {
    id: 'predict',
    title: 'ONE DRAW',
    category: 'LOTTERY PREDICTOR',
    url: 'https://one-draw-five.vercel.app/',
    imageUrl: 'images/lotto1.png',
  },
  {
    id: 'lure',
    title: 'LURE Weddings',
    category: 'BUSINESS',
    url: 'https://lure-weddings-w8jl.vercel.app/',
    imageUrl: 'images/lure.png',
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      className="projects-container max-w-[1200px] mx-auto px-8 md:px-16 pt-10 pb-14 scroll-mt-24 border-b border-borderBlue"
      id="projects"
    >
      <div className="text-center w-full mb-8">
        <h2 className="text-3xl font-bold text-lightBlue inline-block pb-2 tracking-wide uppercase">Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target={project.url.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group relative w-full aspect-[16/10] overflow-hidden rounded-[18px] shadow-2xl transform transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-lightBlue focus:ring-offset-2 focus:ring-offset-prussian"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: 'cover', // match the full-bleed look from the reference image
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/35 group-hover:from-black/15 group-hover:to-black/65 transition-colors duration-300" />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <span className="text-[11px] font-extrabold tracking-[0.2em] text-red-400 uppercase mb-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {project.category}
              </span>
              <h3 className="text-white text-xl font-extrabold drop-shadow-sm leading-tight mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                {project.title}
              </h3>

              <div className="flex items-center gap-2 text-white font-semibold text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150">
                <span>View Project</span>
                <ExternalLink size={16} />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/Vhugala-Mathivha"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-lightBlue text-prussian font-bold shadow-lg shadow-lightBlue/30 hover:bg-darkerBlue hover:text-white transition-colors duration-300"
        >
          View More Projects
        </a>
      </div>
    </section>
  );
};