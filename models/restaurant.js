const monggo = require('mongoose');
const Schema = monggo.Schema;

const restaurantSchema = new Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
})

const Restaurant = monggo.model('Restaurant', restaurantSchema);
module.exports = Restaurant;