import React from 'react';
import { Certifications } from './Certifications';

export const Skills: React.FC = () => {
  return (
    <section className="skills-container max-w-[1200px] mx-auto px-8 md:px-16 py-12" id="skills">
      <div className="text-center w-full mb-10">
        <h2 className="text-3xl font-bold text-lightBlue inline-block uppercase tracking-wide">Skills & Tools</h2>
      </div>

      <div className="flex flex-col gap-8">
        
        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Languages */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center min-h-[280px]">
                <div className="w-full border-b border-lightBlue/30 pb-3 mb-8">
                    <h3 className="text-lightBlue text-xl font-bold text-center">Languages</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-6 items-center flex-grow content-center">
                     <img src="images/java logo.png" alt="Java" className="h-16 w-22 hover:scale-110 transition-transform duration-300" />
                     <img src="images/python-logo.png" alt="Python" className="h-16 w-16 hover:scale-110 transition-transform duration-300" />
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="h-16 w-16 hover:scale-110 transition-transform duration-300" />
                     <div className="h-16 w-16 flex items-center justify-center">
                         <img src="images/js-logo.png" alt="JavaScript" className="h-16 w-16 rounded hover:scale-110 transition-transform duration-300" />
                     </div>
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="h-16 w-16 hover:scale-110 transition-transform duration-300" />
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="h-16 w-16 hover:scale-110 transition-transform duration-300" />
                </div>
            </div>

            {/* Web & Frameworks */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center min-h-[280px]">
                <div className="w-full border-b border-lightBlue/30 pb-3 mb-8">
                    <h3 className="text-lightBlue text-xl font-bold text-center">Web & Frameworks</h3>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-10 flex-grow content-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-20 w-20 hover:scale-110 transition-transform duration-300" />
                    
                    {/* ASP.NET Logo */}
                    <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
                         {/* Using the .NET logo which is the 'N' wave seen in the screenshot */}
                        <img src="images/aspnet-logo.png" alt="ASP.NET" className="h-20 w-auto" />
                        <span className="text-xs font-bold text-black mt-1"></span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm font-medium mt-auto">Full Stack, Responsive Design</p>
            </div>

            {/* Database & Data */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center min-h-[280px]">
                <div className="w-full border-b border-lightBlue/30 pb-3 mb-8">
                    <h3 className="text-lightBlue text-xl font-bold text-center">Database & Data</h3>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 flex-grow content-center mb-4">
                     <img src="images/mysql-logo.jpg" alt="MySQL" className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                     <img src="images/oracle-logo.png" alt="Oracle" className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                </div>
                 <p className="text-gray-400 text-sm font-medium mt-auto">Data Structures & Algorithms</p>
            </div>

        </div>

        {/* Bottom Row: 2 Cards (Cloud & Concepts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Cloud & DevOps */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center min-h-[250px]">
                <div className="w-full border-b border-lightBlue/30 pb-3 mb-8">
                    <h3 className="text-lightBlue text-xl font-bold text-center">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 flex-grow content-center mb-4">
                     {/* DevOps Loop - Approximating the visual from the screenshot */}
                     <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300 relative group">
                        <img src="images/devops-logo.png" alt="DevOps" className="h-20 w-26" />
                     </div>

                     <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-300">
                        <img src="images/git-logo.png" alt="Git" className="h-20 w-20" />
                        <span className="text-2xl font-bold text-gray-700 font-mono"></span>
                     </div>
                     
                     <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-12 w-12" />
                        <span className="text-sm font-bold text-black mt-1">GitHub</span>
                     </div>
                     
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="h-16 w-16 hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-gray-400 text-sm font-medium mt-auto">CI/CD Concepts</p>
            </div>

            {/* Concepts */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center min-h-[250px]">
                <div className="w-full border-b border-lightBlue/30 pb-3 mb-8">
                    <h3 className="text-lightBlue text-xl font-bold text-center">Concepts</h3>
                </div>
                <div className="flex items-center justify-center flex-grow content-center">
                     <p className="text-gray-400 text-center font-medium leading-loose text-lg max-w-[90%]">
                        Software Engineering, Operating Systems, Software Development Life Cycle(SDLC)
                     </p>
                </div>
            </div>

        </div>

      </div>

      {/* Certifications Subsection */}
      <div className="mt-16">
         <Certifications />
      </div>

    </section>
  );
};