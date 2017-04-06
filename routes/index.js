const routes = require('express').Router();
const food = require('../controllers/foodControls')
const restaurant = require('../controllers/restaurantControls')

//get
routes.get('/', (req, res) => {
  res.send('sup')
})
routes.get('/api/foods/', food.getData)
routes.get('/api/foods/:id', food.getOneData)
routes.get('/api/restaurants/', restaurant.getData)
routes.get('/api/restaurants/:id', restaurant.getOneData)


//create
routes.post('/api/foods/',food.createData);
routes.post('/api/restaurants/',restaurant.createData);


//delete
routes.delete('/api/foods/:id',food.removeData)
routes.delete('/api/restaurants/:id',restaurant.removeData)

//update
routes.put('/api/foods/:id', food.updateData)
routes.put('/api/restaurants/:id', restaurant.updateData)

module.exports = routes;