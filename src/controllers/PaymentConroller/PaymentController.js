let Payment = require("../../models/PaymentModel/payment");

exports.postPaymentDetails = (req, res, next) => {
  const email = req.body.email;
  const card_number = req.body.card_number;
  const cvc_number = req.body.cvc_number;
  const expiration_date = req.body.expiration_date;
  const customer_name = req.body.customer_name;
  const amount = req.body.amount;

  const newPaymentDetails = new Payment({
    email,
    card_number,
    cvc_number,
    expiration_date,
    customer_name,
    amount,
  });

  newPaymentDetails
    .save()
    .then(() => {
      res.json("Payment Details Added Successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getPaymentDetails = (req, res, next) => {
  Payment.find()
    .then((payment) => {
      res.json(payment);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updatePaymentDetails = async (req, res) => {
  let payment_id = req.params.payment_id;
  const {
    email,
    card_number,
    cvc_number,
    expiration_date,
    customer_name,
    amount,
  } = req.body;

  const paymentUpdate = {
    email,
    card_number,
    cvc_number,
    expiration_date,
    customer_name,
    amount,
  };

  const update = await Payment.findByIdAndUpdate(payment_id, paymentUpdate)
    .then(() => {
      res.status(200).send({ status: "Payment Details Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.deletePayment = async (req, res) => {
  let payment_id = req.params.payment_id;

  await Payment.findByIdAndDelete(payment_id)
    .then(() => {
      res.status(200).send({ status: "Payment Details Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

exports.getOnePaymentDetail = async (req, res) => {
  let payment_id = req.params.payment_id;

  await Payment.findOne({ payment_id })
    .then((payment) => {
      res.json(payment);
    })
    .catch((err) => {
      console.log(err);
    });
};
