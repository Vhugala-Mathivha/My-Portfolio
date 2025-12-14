import React from 'react';
import { MapPin, Mail, Phone, Download, Send } from 'lucide-react';

export const Hero: React.FC = () => {
  
  const handleDownloadCV = () => {
    // Create a simple text representation of the CV
    const cvContent = `VHUGALA MATHIVHA
Full Stack Developer | Software Developer & DevOps Enthusiast

CONTACT INFO
--------------------
Phone: 079 045 7908
Email: vhugalamathivha@gmail.com
Location: Pretoria, Gauteng

PROFILE
--------------------
Computer Science student specializing in translating complex challenges into clean, executable logic. 
Proficient in Python, Java, C#, and React with a focus on high-quality, production-ready code, 
CI/CD automation, and secure DevOps workflows.

EDUCATION
--------------------
- Diploma in Computer Science | Tshwane University of Technology (Jan 2024 – Present)
- Oracle Cloud DevOps Professional | Oracle University (July 2025 – October 2025)
- Website Development | SheCodes (March 2025 – August 2025)
- National Senior Certificate | Kutama Secondary School (2016 – 2020)

SKILLS
--------------------
Languages: Java, Python, C#, JavaScript, HTML, CSS
Web & Frameworks: React, .NET
Database: MySQL, Oracle
Cloud & DevOps: OCI, Git, GitHub, AWS
Concepts: Software Engineering, Operating Systems, Information Security
`;

    // Create a Blob and trigger download
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Vhugala_Mathivha_CV.txt';
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <header className="profile-container max-w-[1200px] mx-auto px-8 md:px-16 pt-24 pb-10 border-b border-borderBlue/50 flex flex-col md:flex-row items-center gap-10 md:gap-16" id="home">
      
      {/* Image Section */}
      <div className="image-content flex-1 flex justify-center md:justify-center">
        <div className="relative group">
            {/* Decorative background blur for glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-lightBlue to-cyan-400 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            {/* Profile Picture with enhanced styling */}
            <img 
                src="images/Gemini_Generated_Image_ihtg7gihtg7gihtg.png" 
                alt="Vhugala Mathivha" 
                className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] object-cover rounded-full 
                           border-[4px] border-lightBlue 
                           shadow-2xl shadow-lightBlue/20
                           transition-all duration-500 ease-out
                           group-hover:scale-105 group-hover:-rotate-2 
                           group-hover:border-white group-hover:shadow-lightBlue/50"
            />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="info-content flex-[1.5] text-center md:text-left">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-lightBlue uppercase bg-lightBlue/10 rounded-full border border-lightBlue/20">
            Full Stack Developer
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
          VHUGALA <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightBlue to-cyan-300">MATHIVHA</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
          Software Developer <span className="text-lightBlue px-1">&</span> DevOps Enthusiast
        </h2>

        {/* Contact Info Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 mb-8 text-sm text-gray-400">
             <a href="tel:0790457908" className="flex items-center gap-2 hover:text-lightBlue transition-colors cursor-pointer group">
                <Phone size={16} className="text-lightBlue group-hover:scale-110 transition-transform" />
                <span>079 045 7908</span>
             </a>
             <a href="mailto:vhugalamathivha@gmail.com" className="flex items-center gap-2 hover:text-lightBlue transition-colors group">
                <Mail size={16} className="text-lightBlue group-hover:scale-110 transition-transform" />
                <span>vhugalamathivha@gmail.com</span>
             </a>
             <a href="https://www.google.com/maps/search/?api=1&query=Pretoria,Gauteng" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-lightBlue transition-colors cursor-pointer group">
                <MapPin size={16} className="text-lightBlue group-hover:scale-110 transition-transform" />
                <span>Pretoria, Gauteng</span>
             </a>
        </div>

        <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0 text-base md:text-lg">
          Computer Science student specializing in translating complex challenges into clean, executable logic. 
          Proficient in <span className="text-white font-semibold">Python, Java, C#, and React</span> with a focus on high-quality, 
          production-ready code, CI/CD automation, and secure DevOps workflows.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <a href="#contact" className="flex items-center justify-center gap-2 bg-lightBlue text-white px-8 py-3 rounded-lg font-bold hover:bg-darkerBlue transition-all hover:-translate-y-1 shadow-lg shadow-lightBlue/25">
                <Send size={18} />
                Contact Me
            </a>
            <button 
                type="button"
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-bold hover:border-lightBlue hover:text-lightBlue transition-all hover:-translate-y-1 cursor-pointer"
            >
                <Download size={18} />
                Download CV
            </button>
        </div>
      </div>
      
    </header>
  );
};