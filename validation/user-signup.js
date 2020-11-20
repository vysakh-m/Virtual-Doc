const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.age = !isEmpty(data.age) ? data.age : "";
  data.district = !isEmpty(data.district) ? data.district : "";
  data.state = !isEmpty(data.state) ? data.state : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.number = !isEmpty(data.number) ? data.number : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password1 = !isEmpty(data.password1) ? data.password1 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }


  if (Validator.isEmpty(data.age)) {
    errors.age = "Age field is required";
  }

  if (Validator.isEmpty(data.district)) {
    errors.district = "District field is required";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "State field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.number)) {
    errors.number = "Number field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.password1)) {
    errors.password1 = "Confirm Password field is required";
  }

  if (!Validator.equals(data.password, data.password1)) {
    errors.password1 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
