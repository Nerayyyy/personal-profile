import React from 'react';

export default function About() {
  return (
    <div className="container mt-5">
      <div className="p-4 bg-light rounded shadow-sm">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="/profile-pic.jpg"
              alt="profile"
              className="img-fluid rounded-circle shadow"
            />
          </div>
          <div className="col-md-8">
            <h2 className="mb-3">About Me</h2>
            <p className="lead" style={{ textAlign: 'justify' }}>
              Fast‑learning IT student with a proven ability to rapidly master new technologies and methodologies.
              Exhibits disciplined time management and strategic planning to consistently meet project deadlines
              and deliver high‑quality solutions. Strong communication skills enable clear, constructive collaboration
              with peers and stakeholders, while unwavering confidence and adaptability ensure peak performance under pressure.
            </p>
            <h5 className="mt-4">Hobbies & Interests</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">🎬 Watching movies</li>
              <li className="list-group-item">🎵 Listening to music</li>
              <li className="list-group-item">🎸 Playing guitar & piano</li>
              <li className="list-group-item">📚 Reading novels</li>
              <li className="list-group-item">✈️ Exploring new places</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
