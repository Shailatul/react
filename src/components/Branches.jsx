// src/components/Branches.jsx
import React from 'react';

const Branches = ({ branches }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Our Branches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {branches.map((branch, index) => (
          <div key={index} className="p-4 border rounded shadow-md">
            <p className="text-lg font-semibold">{branch.location}</p>
            <a
              className="text-yellow-500 hover:underline"
              href={`https://wa.me/${branch.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {branch.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;