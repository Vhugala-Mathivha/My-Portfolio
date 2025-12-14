import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  children: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, children }) => (
  <div className="timeline-item mb-8 relative pl-0">
    {/* Dot centered on the border line
        Calculation: 
        Parent padding-left: 55px
        Border width: 2px (center is at approx -1px relative to inner edge)
        Dot width: 15px (radius 7.5px)
        Target left offset: -(55px + 1px) - 7.5px = -63.5px
    */}
    <div className="absolute top-[5px] left-[-63.5px] w-[15px] h-[15px] rounded-full bg-lightBlue border-[3px] border-prussian z-10"></div>
    
    <div className="timeline-date text-sm font-bold text-gray-400 mb-1">{date}</div>
    <div className="timeline-content bg-contentBox p-5 rounded-lg shadow-md">
      <h3 className="mt-0 text-white text-lg font-bold mb-2">{title}</h3>
      <div className="text-gray-300 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

export const Education: React.FC = () => {
  return (
    <section className="education-container max-w-[1100px] mx-auto px-8 md:px-16 py-10 border-t-2 border-borderBlue scroll-mt-24" id="education">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-lightBlue">EDUCATION TIMELINE</h2>
      </div>

      <div className="timeline relative pl-[55px] border-l-2 border-borderBlue ml-5 md:ml-10">
        
        <TimelineItem date="Jan 2024 – Present" title="Diploma in Computer Science | Tshwane University of Technology (TUT)">
          <p className="mb-2"><strong className="text-lightBlue">Key Achievements:</strong> Recipient of Academic Merit Award for outstanding academic performance.</p>
          <p><strong>Relevant Coursework:</strong> Data Structures and Algorithms, Advanced Object Oriented Programming, Full Stack Web Development, Database Management, Information Security, Operating Systems, Software Engineering Fundamentals and more.</p>
        </TimelineItem>

        <TimelineItem date="July 2025 – October 2025" title="Oracle Cloud DevOps Professional | Oracle University">
           <p>This program provided in-depth expertise in leveraging Oracle Cloud Infrastructure (OCI) services to enable Infrastructure-as-Code (IaC) and drive operational efficiency. I gained practical experience in automated provisioning using Terraform, implementing CI/CD pipelines for containerized applications, and establishing centralized security policies.</p>
        </TimelineItem>

        <TimelineItem date="March 2025 – August 2025" title="Website Development | SheCodes">
          <p>This comprehensive program focused on building sophisticated, responsive web applications using advanced HTML, CSS, and JavaScript techniques. The coursework included mastering modern front-end frameworks like React, integrating APIs for dynamic data retrieval, and ensuring cross-browser compatibility.</p>
        </TimelineItem>

        <TimelineItem date="Jan 2016 – Dec 2020" title="National Senior Certificate | Kutama Secondary School">
          <p>Key Subjects: Mathematics, Physical Sciences, Life Sciences, Geography, English, Tshivenda, Life Orientation.</p>
        </TimelineItem>

      </div>
    </section>
  );
};