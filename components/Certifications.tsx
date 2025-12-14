import React from 'react';

// Manual list of 9 certification images
const certImages = [
    { id: 1, src: "images/234417 (1).png" },
    { id: 2, src: "images/242294.png" },
    { id: 3, src: "images/242393.png" },
    { id: 4, src: "images/242899.png" },
    { id: 5, src: "images/243094.png" },
    { id: 6, src: "images/IMG-20251207-WA0023.jpg" },
    { id: 7, src: "images/234417 (1).png" },
    { id: 8, src: "images/242294.png" },
    { id: 9, src: "images/242393.png" },
];

export const Certifications: React.FC = () => {
  return (
    <div className="w-full py-5 scroll-mt-24" id="certifications">
        
        {/* 
          Inner container with overflow-hidden creates the masking effect 
          inside the padding of the parent div.
        */}
        <div className="w-full overflow-hidden">
            <div className="certifications-slider inline-flex whitespace-nowrap animate-slide-certs h-[150px] items-center">
                {/* First Set */}
                {certImages.map((cert) => (
                    <img 
                        key={`a-${cert.id}`} 
                        src={cert.src} 
                        alt={`Certification ${cert.id}`}
                        className="h-full w-auto object-contain mx-4 border border-borderBlue rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.35)] bg-white hover:shadow-[0_8px_25px_rgba(52,152,219,0.4)] transition-shadow duration-300"
                    />
                ))}
                {/* Duplicate Set for smooth loop */}
                {certImages.map((cert) => (
                    <img 
                        key={`b-${cert.id}`} 
                        src={cert.src} 
                        alt={`Certification ${cert.id}`}
                        className="h-full w-auto object-contain mx-4 border border-borderBlue rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.35)] bg-white hover:shadow-[0_8px_25px_rgba(52,152,219,0.4)] transition-shadow duration-300"
                    />
                ))}
            </div>
        </div>
    </div>
  );
};