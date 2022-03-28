const express = require('express');
const { initializeConfigMiddlewares, initializeErrorMiddlwares } = require('./middlewares');
const userRoutes = require('../controllers/user-routes')
const loginRoutes = require('../controllers/login-routes')

class WebServer {
  app = undefined;
  port = 80;

  constructor() {
    this.app = express();

    initializeConfigMiddlewares(this.app);
    this._initializeRoutes();
    initializeErrorMiddlwares(this.app);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }

  _initializeRoutes() {
    this.app.use('/users', userRoutes.initializeRoutes())
    this.app.use('/login', loginRoutes.initializeRoutes())
  }
}

module.exports = WebServer;