import React from 'react';

interface ModalProps {
  message: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-[450px] p-8 text-center relative animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-prussian hover:text-gray-800 text-3xl font-bold leading-none"
        >
          &times;
        </button>
        
        <div className="mt-4 mb-8 text-xl font-bold text-gray-800">
          {message}
        </div>
        
        <button 
          onClick={onClose}
          className="bg-prussian text-white px-6 py-2 rounded hover:bg-lightBlue transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};