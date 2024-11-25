const isPaidModel = require("../models/roomPaid.model")
const checkRoomPaid = async (req, res) => {
  try{
    let isRoomPaid = new isPaidModel({
     isPaid:req.body.isPaid
    })
    await isRoomPaid.save()
    res?.status(200)?.json({message:"Room is paid"})
  }catch(error){
    res?.status(400)?.json({message:error?.message})  
 }
}
module.exports = {checkRoomPaid}