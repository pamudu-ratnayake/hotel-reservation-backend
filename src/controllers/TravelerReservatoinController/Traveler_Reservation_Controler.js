const Traveler = require("../../models/TravelerReservatoinModel/traveler");

const addReservation = (req,res,next) => {

    const Traveler_Name = req.body.Traveler_Name;
    const Traveler_ID = req.body.Traveler_ID;
    const Traveler_email = req.body.Traveler_email;
    const Traveler_contact_Number = req.body.Traveler_contact_Number;

    const newTraveler = new Traveler({
        Traveler_Name,
        Traveler_ID,
        Traveler_email,
        Traveler_contact_Number

    });
    newTraveler
    .save()
    .then(() => {
        res.json("Traveler Added");
    })
    .catch((err) => {
        console.log(err);
    });
};

const viewReservation = (req, res, next) => {
    Traveler.find()
      .then((Traveler) => {
        res.json(Traveler);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //--------update-----------
const updateReservation = async (req, res, next) => {
  const reservationid = req.params.id;
  const { Traveler_Name,Traveler_ID, Traveler_email, Traveler_contact_Number} =
    req.body;

  const updateTraveler = {
    Traveler_Name,
    Traveler_ID,
    Traveler_email,
    Traveler_contact_Number
   
  };

  const update = await Traveler.findByIdAndUpdate(
    reservationid,
    updateTraveler
  )
    // .then((update) => {
    //   res.json(update);
    // })
    .then(() => {
      res.status(200).send({ status: "Updated" })
    })
    .catch((err) => {
      console.log(err);
    });
};

//--------delete-----------
const deleteReservation = async(req, res, next) => {
  let reservationid = req.params.id;

  await Traveler.findByIdAndDelete(reservationid)

    .then(() => {
      res.json("Reservation Deleted");
    })
    .catch((err) => {
      console.log(err);
    });
}


const viewEachReservation = async (req, res) => {
  let Traveler_ID = req.params.Traveler_ID;
  console.log("traveler Displayed",Traveler_ID);
  await Traveler.findOne({ _id : Traveler_ID })
    .then((traveler) => {
      res.json(traveler);
    })
    .catch((err) => {
      console.log(err);

    });
};

module.exports = {
    addReservation,
    viewReservation,
    viewEachReservation,
    deleteReservation,
    updateReservation,


};