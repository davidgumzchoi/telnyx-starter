# Telnyx - Coding Challenge

## For Telnyx Review
* See [Quick Start](#quick-start) instructions to deploy code locally
* Business and Technical Requirements have been fulfilled
* Modifications
  * Upgraded Bootstrap to latest beta version
* Strategy
  * Use of individual components for each page
  * Service for each component
  * Shared service for reusable services
  * OrderByDatePipe takes parameter due to varying API
  * Test using Mock by using a real instance with Spy

## Requirements
* [x] Blog feed should list all posts and associated title, author, date and description, sorted by publish date from newest first
* [x] Users can view individual blog posts in a separate page
* [x] Users can view comments for a blog post
* [x] Users can add a comments to a blog post
* [x] Two or more distinct components demonstrating component hieracrchy
* [x] At least one service that interfaces with the included REST API
* [x] At least one unit test

---

### Quick start

#### 1. Run `npm install`

This will install all dependencies (listed in `package.json`) necessary to get you up and running.  Feel free to add additional npm packages as you progress.

#### 2. Run `npm start`

This will run two scripts concurrently:
1. `npm run api` will start [json-server](https://github.com/typicode/json-server) to provide a stubbed out REST API through `localhost:9001`.
2. `npm run serve` will start [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to serve up your application.  You should see your default browser open up a window pointing to `localhost:9000`.

#### 3. Navigate to `http://localhost:9000/`

You should see "Welcome!", and a barebones web application with navigational links to "Home" and "About".
