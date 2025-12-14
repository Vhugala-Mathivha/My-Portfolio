import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

const App: React.FC = () => {
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const handleShowModal = (message: string) => {
    setModalMessage(message);
  };

  const handleCloseModal = () => {
    setModalMessage(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact onShowModal={handleShowModal} />
      </main>

      <Footer />
      
      {modalMessage && (
        <Modal message={modalMessage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;