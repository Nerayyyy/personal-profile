// src/components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto shadow-sm">
      <div className="container">
        © {new Date().getFullYear()} Nerisa Raven Be Endozo. All rights reserved.
      </div>
    </footer>
  );
}
