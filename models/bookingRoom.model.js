const mongoose = require("mongoose")
const bookingRoomModel = mongoose.Schema({
 customers_name:{
  type:String
 },
 phoneNumber:{
  type:String
 },
 roomNumber:{
  type:String
 },
 roomCategory:{
  type:String
 },
 reservation_startDate:{
  type:Date
 },
 reservation_endDate:{
  type:Date
 },
 stay_date:{
  type:Number
 }
},{
 collection:"booking_room"
})
module.exports = mongoose.model("bookingRoomModel", bookingRoomModel)