const router = require("express").Router();

let Traveler = require("../../controllers/TravelerReservatoinController/Traveler_Reservation_Controler");


router.post("/addTravelerDetails", Traveler.addReservation);

router.get("/getTravelerDetails", Traveler.viewReservation);

router.put("/updateTravelerDetails/:Traveler_ID", Traveler.updateReservation);

router.delete("/deleteTravelerDetails/:Traveler_ID", Traveler.deleteReservation);

router.get("/getOneTravelerDetails/:Traveler_ID", Traveler.viewEachReservation);



module.exports = router;