const monggo = require('mongoose');
const Schema = monggo.Schema;

const menuSchema = new Schema({
  restaurant: {type:Schema.Types.ObjectId, ref:'Restaurant'},
  menu:[{type:Schema.Types.ObjectId, ref:'Food'}]
})

const Menu = monggo.model('Menu',menuSchema);
module.exports = Menu;