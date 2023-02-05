const Sequelize = require('sequelize');
const db = require('../db');

const Project = db.define('project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  addressUrl: {
    type: Sequelize.STRING
  },
  displayUrl: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  githubUrl: {
    type: Sequelize.TEXT
  },
  technology: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  teammates: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  videoSrc: {
    type: Sequelize.STRING
  },
  videoWidth: {
    type: Sequelize.STRING
  },
  videoHeight: {
    type: Sequelize.STRING
  },
  imgSrc: {
    type: Sequelize.STRING
  },
  imgAlt: {
    type: Sequelize.STRING
  }
});

module.exports = Project;
