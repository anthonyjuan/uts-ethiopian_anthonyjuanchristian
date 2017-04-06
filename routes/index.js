const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('sup')
})

module.exports = routes;