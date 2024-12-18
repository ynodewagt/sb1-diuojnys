import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 text-sm">
      &copy; {new Date().getFullYear()} GTranslate Integration Example. All rights reserved.
    </footer>
  );
}