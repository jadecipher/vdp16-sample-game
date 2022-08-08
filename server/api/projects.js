const router = require('express').Router();
const {Project} = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    res.json(await Project.findAll());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
