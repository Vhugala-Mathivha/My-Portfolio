import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav id="main-nav" className="fixed top-0 left-0 right-0 z-50 bg-lightBlue shadow-lg h-[60px] flex items-center justify-between px-8 md:px-16">
      <a href="#home" className="nav-logo flex items-center hover:opacity-80 transition-opacity">
         {/* Logo Image */}
        <img 
            src="images/Gemini_Generated_Image_can3qncan3qncan3 (1).png" 
            alt="Vhugala Mathivha Logo" 
            className="h-16 w-16 object-contain"
        />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-1">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-prussian font-bold px-4 py-2 rounded transition-colors duration-300 hover:bg-darkerBlue hover:text-white"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-prussian" onClick={toggleMenu} type="button" aria-label="Toggle menu">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-lightBlue shadow-xl md:hidden flex flex-col p-4 border-t border-prussian/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-prussian font-bold py-3 px-4 hover:bg-darkerBlue hover:text-white rounded"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};