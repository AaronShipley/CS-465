
const mongoose = require("mongoose");
const Trip = mongoose.model("trips");
const User = mongoose.model("users");

const tripsList = async (req, res) => {
  Trip.find({}).exec((err, trips) => {
    if (!trips) {
      return res.status(404).json({ message: "trips not found" });
    } else if (err) {
      return res.status(404).json(err);
    } else {
      return res.status(200).json(trips);
    }
  });
};

const tripsFindCode = async (req, res) => {
  Trip.find({ code: req.params.tripCode }).exec((err, trip) => {
    if (!trip) {
      return res.status(404).json({ message: "trip not found" });
    } else if (err) {
      return res.status(404).json(err);
    } else {
      return res.status(200).json(trip);
    }
  });
};

const tripsUpdateTrip = async (req, res) => {
  console.log(req.body);
  getUser(req, res,
    (req, res) => {
  Trip
    .findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      { new: true }
    )
      .then((trip) => {
        if (!trip) {
         return res.status(404).send({
           message: "Trip not found with code " + req.params.tripCode,
         });
        }
        res.send(trip);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
          message: "Trip not found with code " + req.params.tripCode,
          });
        }
        return res
          .status(500) // server error
          .json(err);
      });
    }
  )
}

const tripsAddTrip = async (req, res) => {
  getUser(req, res,
      (req, res) => {
  Trip
    .create(
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      (err, trip) => {
        if (err) {
          return res
            .status(400) //bad request
            .json(err);
        } else {
          return res
            .status(201) //creates
            .json(trip);
        }
      });
    }
  )
}

const tripsDeleteTrip = async (req, res) => {
  getUser(req, res,
      (req, res) => {
          console.log("inside trips.js on server #tripsDeleteTrip");
          Trip.findOneAndDelete({'code': req.params.tripCode})
          
      
          .then(trip => {
              if (!trip) {
                  return res
                      .status(404)
                      .send({
                          message: "Trip not found with code " + req.params.tripCode
                      });
      
              }
              return res
                  

          }).catch(err => {
              if (err.kind === 'ObjectId') {
                  return res
                      .status(404)
                      .send({
                          message: "Trip not found with code " + req.params.tripCode
                      });
              }
              return res
                  .status(500) // server error
                  .json(err);
          })
          console.log("return from delete trip");

      });


}


const getUser = (req, res, callback) => {
  console.log(req.auth.email);
  if (req.auth && req.auth.email) {
    User
        .findOne({ email: req.auth.email})
        .exec((err, user) => {
          if(!user) {
            return res
                .status(404)
                .json({"message": "User not found"});
          } else if (err) {
              console.log(err);
              return res
                  .status(404)
                  .json(err);
          }
          callback(req, res, user.name);
        });
  } else {
      return res
          .status(404)
          .json({"message": "User not found"})
  }
};

module.exports = {
  tripsList,
  tripsFindCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip,
  getUser
};