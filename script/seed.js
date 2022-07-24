'use strict';

const db = require('../server/db');
const {Project} = require('../server/db/models');

async function seed() {
  await db.sync({force: true});
  console.log('db synced!');

  const projects = await Promise.all([
    Project.create({
      name: 'name',
      addressUrl: 'addressUrl',
      displayUrl: 'displayUrl',
      description: 'desc',
      githubUrl: 'gi