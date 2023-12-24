const Joi = require("joi");
const { isValidObjectId } = require("mongoose");

const mongoIdListSchema = Joi.array()
  .min(1)
  .items(
    Joi.string().custom((id, helpers) => {
      const isValidId = isValidObjectId(id);

      if (!isValidId) return helpers.error("any.invalid");
      return id;
    })
  );

module.exports = { mongoIdListSchema };
