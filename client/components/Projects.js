
import React from 'react';

const CodeCapstone = () => {
  return (
    <div className="individual-project">
      <h2>Code Aloud</h2>
      <div className="project-content">
        <h4>
          Code Aloud is a technical interview preparation application focusing
          on the approach to a coding challenge, and how to communicate that
          approach before coding begins. We offer speech-to-text functionality
          to simulate aspects of interviewing, as well as a code sandbox with
          tests built in so users can check their work.
        </h4>
        <h4>
          My Responsibilities: Created and imported interactive line graph
          feature using Recharts. Developed front-end components using
          JavaScript and React. Deployed website via Heroku and enabled
          continuous integration with GitHub via Travis CI.
        </h4>
        <h4>
          View the deployed site at{' '}
          <a
            color="inherit"
            href="https://codealoud.herokuapp.com/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            www.codealoud.gq
          </a>
        </h4>
        <h4>
          View the GitHub repo{' '}
          <a
            color="inherit"
            href="https://github.com/codecapstone/codealoud"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            HERE
          </a>
        </h4>
        <h4>
          Technology Used: Node, Express, PostgreSQL, Sequelize, React, Redux,
          Annyang, Recharts, CodeSandbox, Jest, Mocha, Chai, Heroku, Travis CI
        </h4>
        <h4>Teammates: Allison French, Jennifer Grange, Rashmi Prakash</h4>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nZpv5FfNUeI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const GraceShopper = () => {
  return (
    <div className="individual-project">
      <h2>Cloud Nine</h2>
      <div className="project-content">
        <h4>
          Cloud Nine is an e-commerce website, designed to sell nine different
          types of air. Some features of the site include sign-up and Google
          O-Auth, shopping carts unique to each user, and checkout.
        </h4>
        <h4>
          My Responsibilities: Developed front-end components and back-end
          routes to display the store’s inventory, shopping cart, and checkout
          feature using JavaScript, Sequelize, Express, React, and Redux;
          Created tests for component, models, and API functionality using Mocha
          and Chai
        </h4>
        <h4>
          View the deployed site at{' '}
          <a
            color="inherit"
            href="https://cl0udnine.herokuapp.com/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            cl0udnine.com
          </a>
        </h4>
        <h4>
          View the GitHub repo{' '}
          <a
            color="inherit"
            href="https://github.com/team-myrel/cl0udnine"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            HERE
          </a>
        </h4>
        <h4>
          Technology Used: Node, Express, PostgreSQL, Sequelize, React, Redux,
          Mocha, Chai, Heroku, Travis CI
        </h4>
        <h4>Teammates: Rashmi Prakash, Lerena Holloway, Lisa Jakubczyk</h4>
        <img src="cloudnine.png" alt="Cloud Nine" width="100%" />
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div id="projects-container" className="body-container">
      <h1>Projects</h1>
      <div id="projects">
        <CodeCapstone />
        <GraceShopper />
      </div>
    </div>
  );
};

export default Projects;