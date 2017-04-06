const monggo = require('mongoose');
const Schema = monggo.Schema;

const foodSchema = new Schema({
  name: {type: String, unique:true, required:true},
  price: Number,
  exp_date: Date
})

const Food = monggo.model('Food',foodSchema)
module.exports = Food;