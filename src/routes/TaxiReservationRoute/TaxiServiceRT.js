const router = require("express").Router();
let TaxiDetails = require("../../controllers/TaxiReservationControllers/TaxiServiceController");

router.post("/addtaxiDetails", TaxiDetails.postTaxiDetails);
router.get("/get-taxidetails", TaxiDetails.getTaxiDetails);
router.put("/update-taxidetails/:taxi_id", TaxiDetails.updateTaxtDetails);
router.delete("/delet-taxidetails/:taxi_id", TaxiDetails.deleteTaxi);
router.get("/getOneTaxiDetails/:taxi_id", TaxiDetails.getOneTaxiDetail);

module.exports = router;