// src/pages/Contact.js
import React from 'react';

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4 bg-light">
        <h2 className="mb-4 text-center text-primary">Contact Me</h2>
        
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Email:</strong>{' '}
            <a href="mailto:endozonerisaraven90@gmail.com" className="text-decoration-none">
              endozonerisaraven90@gmail.com
            </a>
          </li>
          <li className="list-group-item">
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/Nerayyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              github.com/Nerayyyy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
