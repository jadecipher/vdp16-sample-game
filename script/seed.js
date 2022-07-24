'use strict';

const db = require('../server/db');
const {Project} = require('../server/db/models');

async function seed() {
  await db.sync({force: true});
  console.log('db synced!');

  const projects