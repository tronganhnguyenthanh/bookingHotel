const bookingRoomModel = require("../models/bookingRoom.model")
// add new room
const addNewRoom = async (req, res) => {
  try{
   let saveRoom = new bookingRoomModel({
     customers_name:req.body.customers_name,
     phoneNumber:req.body.phoneNumber,
     roomNumber:req.body.roomNumber,
     roomCategory:req.body.roomCategory,
     reservation_startDate:new Date(req.body.reservation_startDate),
     reservation_endDate:new Date(req.body.reservation_endDate),
     stay_date:req.body.stay_date,
    })
    await saveRoom.save()
    res?.status(200)?.json({message:"Room added successfully"})
  }catch(error){
    res?.status(400)?.json({message:error})
  }
}
// Show list room
const getRoomList = async (req, res) => {
 let showRoomList = await bookingRoomModel.find()
 res?.json(showRoomList)
}
// Show detail information
const getRoomDetail = async (req, res) => {
 try{
   let id = req.params.id
   let showRoomDetail = await bookingRoomModel.findById(id)
   res?.status(200).json(showRoomDetail)
 }catch(error){
   res?.status(200).json({message:error})
 }
}
module.exports = {
 addNewRoom,
 getRoomList,
 getRoomDetail
}