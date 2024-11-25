const mongoose = require("mongoose")
const paidRoomModel = mongoose.Schema({
 isPaid:{
  type:Boolean 
 }
},{
 collection:"paidRoom"
})
module.exports = mongoose.model("paidRoomModel", paidRoomModel)