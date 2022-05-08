const router = require("express").Router();
let PaymentDetails = require("../../controllers/PaymentConroller/PaymentController");

router.post("/addpaymentDetails", PaymentDetails.postPaymentDetails);
router.get("/get-paymentdetails", PaymentDetails.getPaymentDetails);
router.put("/update-paymentdetails/:payment_id", PaymentDetails.updatePaymentDetails);
router.delete("/delet-paymentdetails/:payment_id", PaymentDetails.deletePayment);
router.get("/getOnePaymentDetails/:payment_id", PaymentDetails.getOnePaymentDetail);

module.exports = router;