import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-center p-4 text-sm text-textGray border-t border-borderBlue bg-prussian">
        <p>&copy; {new Date().getFullYear()} Vhugala Mathivha. All rights reserved.</p>
    </footer>
  );
};