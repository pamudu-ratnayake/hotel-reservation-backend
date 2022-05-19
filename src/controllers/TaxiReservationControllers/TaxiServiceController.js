let Taxi = require("../../models/TaxiReservationModel/TaxiService");

exports.postTaxiDetails = (req, res, next) => {
    const Pick_up_point = req.body.Pick_up_point;
    const Where_to = req.body.Where_to;
    const Pich_up_time = req.body.Pich_up_time;
    const vehicle_type = req.body.vehicle_type;
    const Delivery_notes = req.body.Delivery_notes;
    const driver_con_no = req.body.driver_con_no;
    const driver_description = req.body.driver_description;

    const newTaxiDetails = new Taxi({
        Pick_up_point,
        Where_to,
        Pich_up_time,
        vehicle_type,
        Delivery_notes,
        driver_con_no,
        driver_description
    });

    newTaxiDetails.save()
    .then(() => {
        res.json("Taxi Details Added Successfully!");
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.getTaxiDetails = (req, res, next) => {
    Taxi.find()
    .then((taxi) => {
        res.json(taxi);
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.updateTaxtDetails = async (req, res) => {
    let taxi_id = req.params.taxi_id;
    const {Pick_up_point, Where_to, Pich_up_time, vehicle_type, Delivery_notes, driver_con_no, driver_description} = req.body;

    const taxiUpdate = {
        Pick_up_point,
        Where_to,
        Pich_up_time,
        vehicle_type,
        Delivery_notes,
        driver_con_no,
        driver_description
    };

    const update = await Taxi.findByIdAndUpdate(taxi_id, taxiUpdate)
    .then(() => {
        res.status(200).send({ status: "Taxi Details Updated!" });
      })
      .catch((err) => {
        res.status(500).send({ status: "Error! Cannot Update!" });
        console.log(err.message);
      });
}

exports.deleteTaxi = async (req, res) => {
    let taxi_id = req.params.taxi_id;
  
    await Taxi.findByIdAndDelete(taxi_id)
      .then(() => {
        res.status(200).send({ status: "Taxi Details Deleted!" });
      })
      .catch((err) => {
        res.status(500).send({ status: "Error! Cannot Delete!" });
        console.log(err.message);
      });
  };

  exports.getOneTaxiDetail = async (req, res) => {
    let taxi_id = req.params.taxi_id;
  
    await Taxi.findOne({ _id: taxi_id })
      .then((taxi) => {
        res.json(taxi);
      })
      .catch((err) => {
        console.log(err);
      });
  };