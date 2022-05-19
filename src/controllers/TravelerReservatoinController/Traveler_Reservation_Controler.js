const Traveler = require("../../models/TravelerReservatoinModel/traveler");

const addReservation = (req,res,next) => {

    const Traveler_Name = req.body.Traveler_Name;
    const Traveler_ID = req.body.Traveler_ID;
    const NIC = req.body.NIC;
    const Address = req.body.Address;
    const Email = req.body.Email;
    const Contact_Number = req.body.Contact_Number;
    const checkInDate = req.body.checkInDate;
    const numberOfNights = req.body.numberOfNights;
    const Room_Type = req.body.Room_Type;
    const numberOfRooms = req.body.numberOfRooms;

    const newTraveler = new Traveler({
        Traveler_Name,
        Traveler_ID,
        NIC,
        Address,
        Email,
        checkInDate ,
        Contact_Number,
        numberOfNights,
        Room_Type,
        numberOfRooms

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
  const { Traveler_Name,Traveler_ID, NIC, Address,Email,Contact_Number,CheckInDate,numberOfNights,Room_Type,numberOfRooms} =
    req.body;

  const updateTraveler = {
    Traveler_Name,
    Traveler_ID,
    NIC,
    Address,
    Email,
    Contact_Number,
    CheckInDate,
    numberOfNights,
    Room_Type,
    numberOfRooms
    
  
  };

  const update = await Traveler.findByIdAndUpdate(
    { _id : reservationid},
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