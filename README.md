# Simple Interest
This is a web app that can be used to calculate simple interest on a variable
amount of savings.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Development

### Prerequisites
You will either need to have either [Yarn](https://yarnpkg.com/en/docs/install)
or [npm](https://nodejs.org/en/download/) installed to run/test this web app.

### Setting things up
1. Open your command line
1. Run `git clone https://github.com/tamj0rd2/simple-interest.git` to pull a
   copy of the repository
1. Run `cd simple-interest`
1. Run either `yarn` or `npm i`

### Running the application
- Run `yarn dev` or `npm run dev`.

This will start webpack's development server as well as starting the Express
server in development mode.

### Testing the application
- Run `yarn test` or `npm test`.
- To test with coverage, run `yarn run test:coverage` or `npm run test:coverage`

### Creating a production build
- Run `yarn build`

This will create everything you'll need for a static site in the `build` folder.

## Deployment (with Heroku)

1. Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
1. Run `heroku login` and enter your Heroku login details
1. Run `heroku create`
1. Run `git push heroku master`
1. Your app will now be deployed. Run `heroku open` to see the magic
