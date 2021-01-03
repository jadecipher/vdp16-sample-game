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

CI is not about testing