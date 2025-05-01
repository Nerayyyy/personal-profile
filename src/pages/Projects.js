// src/pages/Projects.js
import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: '📝 Task Management App',
      desc: 'A full-stack web application to manage daily tasks with user authentication and status tracking.',
      tech: ['React', 'Laravel', 'MySQL']
    },
    {
      title: '🛍️ E-Commerce Website',
      desc: 'A static e-commerce website that showcases products, categories, and a cart page using frontend technologies.',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Projects</h2>
      <div className="row">
        {projects.map((p, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.desc}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <small className="text-muted">
                  <strong>Technologies:</strong> {p.tech.join(', ')}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
