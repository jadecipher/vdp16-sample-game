
import React from 'react';

export const About = () => {
  return (
    <div className="body-container">
      <h1>About Me</h1>
      <div id="about-div">
        <div id="about-paragraph">
          <p>
            After earning my bachelor's degree in mathematics, I taught high
            school calculus for two years. I knew I wanted to explore other
            career paths, and then I was given the amazing opportunity to move
            to Melbourne, Australia. I worked there in sales for six months but
            became eager to learn more about programming after I was promoted to
            a role where I used Excel and several automated scheduling apps.
          </p>
          <p>
            I moved back to the U.S. and taught myself Python, thinking I wanted
            to learn more about data science. I moved to New York City and
            decided to pursue a career in software engineering instead. I found
            Fullstack Academy of Code's Grace Hopper Program which stood out to
            me above all other coding bootcamps in the New York area.
          </p>
          <p>
            Over the last six months, I've been able to hone my problem-solving
            skills in a programming environment, and I'm now familiar with the
            many layers of full-stack web development. I graduated from Grace
            Hopper in May and I recently began my current position as a teaching
            fellow at Grace Hopper in their three-month fellowship program.
            After the fellowship, I will be seeking roles in which I can be
            further challenged with interesting projects so I can grow as a
            software engineer.
          </p>
        </div>
        <div id="about-images">
          <img src="australia.jpg" alt="Australia" className="about-img" />
          <img src="gh.jpg" alt="GH" className="about-img" />
          <img src="fellows.jpg" alt="Fellows" className="about-img" />
        </div>
      </div>
    </div>
  );
};

export default About;