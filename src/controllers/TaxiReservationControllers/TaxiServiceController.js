let Taxi = require("../../models/TaxiReservationModel/TaxiService");

exports.postTaxiDetails = (req, res, next) => {
    const driver_name = req.body.driver_name;
    const vehicle_type = req.body.vehicle_type;
    const vehicle_name = req.body.vehicle_name;
    const vehicle_no = req.body.vehicle_no;
    const distance = req.body.distance;
    const driver_con_no = req.body.driver_con_no;
    const driver_description = req.body.driver_description;

    const newTaxiDetails = new Taxi({
        driver_name,
        vehicle_type,
        vehicle_name,
        vehicle_no,
        distance,
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
    const {driver_name, vehicle_type, vehicle_name, vehicle_no, distance, driver_con_no, driver_description} = req.body;

    const taxiUpdate = {
        driver_name,
        vehicle_type,
        vehicle_name,
        vehicle_no,
        distance,
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