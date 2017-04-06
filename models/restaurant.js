const monggo = require('mongoose');
const Schema = monggo.Schema;

const restaurantSchema = new Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean,
  menu: [{type:Schema.Types.ObjectId, ref:'Food'}]
})

const Restaurant = monggo.model('Restaurant', restaurantSchema);
module.exports = Restaurant;