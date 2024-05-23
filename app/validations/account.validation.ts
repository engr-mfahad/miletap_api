import { body, checkSchema, oneOf } from "express-validator";

export const create = checkSchema(
  {
    first_name: {
      notEmpty: {
        bail: true,
        errorMessage: "Required! Please specify some valid value.",
      },
      isLength: {
        options: {
          max: 100,
        },
        errorMessage: "Must not contain more than 100 characters.",
      },
    },
    last_name: {
      notEmpty: {
        bail: true,
        errorMessage: "Required! Please specify some valid value.",
      },
      isLength: {
        options: {
          max: 100,
        },
        errorMessage: "Must not contain more than 100 characters.",
      },
    },
    email: {
      notEmpty: {
        bail: true,
        errorMessage: "Required! Please specify some valid value.",
      },
      isEmail: {
        bail: true,
        errorMessage: "Should be a valid email address.",
      },
      isLength: {
        options: {
          max: 100,
        },
        errorMessage: "Must not contain more than 100 characters.",
      },
    },
    phone: {
      notEmpty: {
        bail: true,
        errorMessage: "Required! Please specify some valid value.",
      },
      isMobilePhone: {
        options: ["any"],
        bail: true,
        errorMessage: "Should be a valid mobile number.",
      },
      isLength: {
        options: {
          max: 16,
        },
        errorMessage: "Must not contain more than 16 characters.",
      },
    },
    password: {
      notEmpty: {
        bail: true,
        errorMessage: "Required! Please specify some valid value.",
      },
      isLength: {
        options: {
          max: 50,
        },
        errorMessage: "Must not contain more than 50 characters.",
      },
    },
    birthday: {
      notEmpty: {
        bail: true,
        errorMessage: "Required! Please specify some valid value.",
      },
      isDate: {
        options: {
          format: "yyyy-mm-dd",
        },
        errorMessage: "Must be a valid date with this format: yyyy-mm-dd.",
      },
    },
  },
  ["body"]
);

export const update = oneOf([
  body("first_name")
    .notEmpty()
    .bail()
    .withMessage("Please specify some valid value.")
    .isLength({ max: 100 })
    .bail()
    .withMessage("Must not contain more than 100 characters."),
  body("last_name")
    .notEmpty()
    .bail()
    .withMessage("Please specify some valid value.")
    .isLength({ max: 100 })
    .bail()
    .withMessage("Must not contain more than 100 characters."),
  body("email")
    .notEmpty()
    .bail()
    .withMessage("Please specify some valid value.")
    .isEmail()
    .bail()
    .withMessage("Should be a valid email address.")
    .isLength({ max: 100 })
    .bail()
    .withMessage("Must not contain more than 100 characters."),
  body("phone")
    .notEmpty()
    .bail()
    .withMessage("Please specify some valid value.")
    .isMobilePhone(["any"])
    .bail()
    .withMessage("Should be a valid mobile number.")
    .isLength({ max: 16 })
    .bail()
    .withMessage("Must not contain more than 16 characters."),
  body("password")
    .notEmpty()
    .bail()
    .withMessage("Please specify some valid value.")
    .isLength({ max: 50 })
    .bail()
    .withMessage("Must not contain more than 50 characters."),
  body("birthday")
    .notEmpty()
    .bail()
    .withMessage("Please specify some valid value.")
    .isDate({
      format: "yyyy-mm-dd",
    })
    .bail()
    .withMessage("Must be a valid date with this format: yyyy-mm-dd."),
]);
