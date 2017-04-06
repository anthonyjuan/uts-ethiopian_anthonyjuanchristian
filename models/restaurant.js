const monggo = require('mongoose');
const Schema = monggo.Schema;

const restaurantSchema = new Schema({
  name: {type: String, unique:true, required:true},
  owner: {type: String, required:true},
  address: {type: String, required:true},
  open_status: Boolean,
  menu: [{type:Schema.Types.ObjectId, ref:'Food'}]
})

const Restaurant = monggo.model('Restaurant', restaurantSchema);
module.exports = Restaurant;