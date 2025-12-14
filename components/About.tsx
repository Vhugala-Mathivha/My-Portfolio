import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="about-container max-w-[1200px] mx-auto px-8 md:px-16 py-10 border-b border-borderBlue" id="about">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-lightBlue inline-block border-b-2 border-lightBlue pb-2">ABOUT ME</h2>
      </div>
      <p className="max-w-[900px] mx-auto text-center md:text-left text-gray-200 leading-relaxed">
        I am a highly motivated Computer Science Diploma student at Tshwane University of Technology (TUT), recognized with an Academic Merit Award, currently building a robust technical foundation across the full stack. I specialize in core programming languages including Java, Python, C#, and JavaScript/React, complemented by expertise in data management (MySQL, Oracle) and modern DevOps practices (OCI DevOps, CI/CD, Git, AWS services). My hands-on experience includes developing the ApexCare Scheduler, a full-stack project demonstrating proficiency in complex optimization logic and automated deployment pipelines. I am actively seeking a Software Development internship or Work Integrated Learning (WIL) opportunity where I can apply my skills to deliver high-quality, production-ready code and contribute innovative solutions to the South African tech industry.
      </p>
    </section>
  );
};