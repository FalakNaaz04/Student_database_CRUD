const express = require("express");
const router = express.Router();
const StudentSchema = require("../schema/StudentSchema");

router.post("/create-student", (req, res, next) => {
  StudentSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

router.get("/", (req, res, next) => {
  StudentSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.post("/login", (req, res) => {
  const { name, email, password } = req.body;
  StudentSchema.findOne({ email: email }).then((student) => {
    if (student) {
      // databasepassword === given password
      if (student.password === password) {
        res.json("login successful");
      } else {
        res.json("Password incorrect");
      }
    } else {
      console.log("No record exits");
    }
  });
});

router.delete("/delete-student/:id", (req, res, next) => {
  StudentSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

//go to a particular id
router
  .route("/update-student/:id")
  .get((req, res, next) => {
    StudentSchema.findById(req.params.id, (err, data) => {
      if (err) {
        return next(err);
      } else {
        return res.json(data);
      }
    });
  })
  .put((req, res, next) => {
    StudentSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, data) => {
        if (err) {
          return next(err);
        } else {
          return res.json(data);
        }
      }
    );
  });

module.exports = router;
