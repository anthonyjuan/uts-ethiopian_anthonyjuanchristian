const monggo = require('mongoose');
const Schema = monggo.Schema;

const foodSchema = new Schema({
  name: String,
  price: Number,
  exp_date: Date
})

const Food = monggo.model('Food',foodSchema)
module.exports = Food;