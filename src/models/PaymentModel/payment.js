const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentDetails = new Schema({
  email: {
    type: String,
    // required: true,
  },
  card_number: {
    type: String,
    // required: true,
  },
  cvc_number: {
    type: String,
    // required: false,
  },
  expiration_date: {
    type: String,
    // required: true,
  },
  customer_name: {
    type: String,
    // required: true,
  },
  amount: {
    type: String,
    // required: true,
  },
});

const Payment = mongoose.model("Payment", paymentDetails);

module.exports = Payment;