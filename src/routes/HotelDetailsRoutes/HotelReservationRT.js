const router = require("express").Router();
let HotelReservation = require("../../controllers/HotelReservationControllers/HotelReservationController");

router.post("/add-hotelReservation", HotelReservation.postHotelReservation);
router.get("/get-hotelReservation", HotelReservation.getHotelReservation);
router.put("/update-hotelReservation/:hotel_id", HotelReservation.updateHotelReservation);
router.delete("/delete-hotelReservation/:hotel_id", HotelReservation.deleteHotelReservation);
router.get("/getOneHotelReservation/:hotel_id", HotelReservation.getOneHotelReservation);

module.exports = router;