import React from 'react';
import './PawLoader.css'; // Move the CSS into this file

const PawLoader = () => {
  return (
    <div className="paw-loader">
      {[...Array(8)].map((_, i) => (
        <div className={`paw-print-${i + 1}`} key={i}>
          <div className="pad large"></div>
          <div className="pad small-1"></div>
          <div className="pad small-2"></div>
          <div className="pad small-3"></div>
          <div className="pad small-4"></div>
        </div>
      ))}
    </div>
  );
};

export default PawLoader;
