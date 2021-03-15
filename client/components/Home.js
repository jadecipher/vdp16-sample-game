import React from 'react';

export const Home = () => {
  return (
    <div className="body-container">
      <div className="my-photo">
        <img src="michaela_linkedIn_photo.jpg" alt="Photo of Me" width="100%" />
      </div>
      <div id="bullets">
        <h4>Saint Michael's College Alumn</h4>
        <h4>Former Calculus Teacher</h4>
        <h4>Grace Hopper Program at Fullstack Academy of Code Alumn</h4>
        <h4>
          Currently a Teaching Fellow at{' '}
          <a
            href="https://www.gracehopper.com/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            The Grace Hopper Program
          </a>{' '}
          at Fullstack Academy of Code
        </h4>
      </div>
    </div>
  );
};

export default Home;
