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
      githubUrl: 'github',
      technology: ['tech'],
      teammates: ['mates'],
      videoSrc: 'vidSrc',
      videoWidth: '100',
      videoHeight: '100',
      imgSrc: 'imgSrc',
      imgAlt: 'imgAlt'
    })
  ]);

  console.log(`seeded ${projects.length} users`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    awai