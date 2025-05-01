// src/pages/Education.js
import React from 'react';

export default function Education() {
  const schools = [
    { name: 'Pamantasan ng Cabuyao (BSIT)', years: '2022–Present' },
    { name: 'Beaconhouse Angels in Heaven School, Inc.', years: '2020–2022' },
    { name: 'Bigaa Integrated National High School', years: '2016–2019' },
    { name: 'Bigaa Elementary School', years: '2010–2016' },
  ];

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4 bg-light">
        <h2 className="text-center text-primary mb-4">Education</h2>
        <div className="list-group">
          {schools.map(s => (
            <div className="list-group-item d-flex justify-content-between align-items-center" key={s.name}>
              <div>
                <h5 className="mb-1">{s.name}</h5>
              </div>
              <small className="text-muted">{s.years}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
