const routes = require('express').Router();
const food = require('../controllers/foodControls')

//get
routes.get('/', (req, res) => {
  res.send('sup')
})
routes.get('/api/foods/', food.getData)
routes.get('/api/foods/:id', food.getOneData)


//create
routes.post('/api/foods/',food.createData);


//delete
routes.delete('/api/foods/:id',food.removeData)

//update
routes.put('/api/foods/:id', food.updateData)

module.exports = routes;