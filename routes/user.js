const express = require("express");
const router = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../models/user");
const keys = require("../config/keys");
const validateLoginInput = require("../validation/user-login");
const validateRegisterInput = require("../validation/user-signup");

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        age:req.body.age,
        district:req.body.district,
        state:req.body.state,
        email: req.body.email,
        number:req.body.number,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      errors.email = "User not found ";
      res.status(400).json(errors);
    } else {
      bcrypt.compare(req.body.password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = { id: user.id, name: user.name, email: user.email }; // Create JWT Payload
          // Sign Token
          jwt.sign(
            payload,
            keys.passport_key,
            { expiresIn: 3600 },
            (err, token) => {
              return res.json({
                success: true,
                token: "Bearer " + token,
              });
            }
          );
        } else {
          errors.password = "Password incorrect";
          return res.status(400).json(errors);
        }
      });
    }
  });
});



router.get(
  "/current-user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;
