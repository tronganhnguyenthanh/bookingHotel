const bookingRoomController = require("../controllers/bookingRoom.controller")
const isRoomPaidController = require("../controllers/roomPaid.controller")
const express = require("express")
const router = express.Router()
router.post("/booking/hotel/new/room", bookingRoomController.addNewRoom)
router.get("/booking/hotel/room/list", bookingRoomController.getRoomList)
router.get("/booking/hotel/room/detail/:id", bookingRoomController.getRoomDetail)
router.post("/booking/hotel/room/isPaid", isRoomPaidController.checkRoomPaid)
module.exports = router