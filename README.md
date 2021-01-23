## Deployment

Ready to go world wide? Here's a guide to deployment! There are two (compatible) ways to deploy:

* automatically, via continuous integration
* manually, from your local machine

Either way, you'll need to set up your deployment server to start:

### Prep

1.  Set up the [Heroku command line tools](https://devcenter.heroku.com/articles/heroku-cli)
2.  `heroku login`
3.  Add a git remote for heroku:

* **If you're creating a new app...**

  1.  `heroku create` or `heroku create your-app-name` if you have a name in mind.
  2.  `heroku addons:create heroku-postgresql:hobby-dev` to add ("provision") a postgres database to your heroku dyno

* **If you already have a Heroku app...**

  1.  `heroku git:remote your-app-name` You'll need to be a collaborator on the app.

### When you're ready to deploy

#### Option A: Automatic Deployment via Continuous Integration

(_**NOTE**: This step assumes that you already have Travis-CI testing your code._)

CI is not about testing per se – it's about _continuously integrating_ your changes into the live application, instead of periodically _releasing_ new versions. CI tools can not only test your code, but then automatically deploy your app. Boilermaker comes with a `.travis.yml` configuration almost ready for deployment; follow these steps to complete the job.

1.  Run `git checkout master && git pull && git checkout -b f/travis-deploy` (or use some other new branch name).
2.  Un-comment the bottom part of `.travis.yml` (the `before_deploy` and `deploy` sections)
3.  Add your Heroku app name to `deploy.app`, where it says "YOUR HEROK