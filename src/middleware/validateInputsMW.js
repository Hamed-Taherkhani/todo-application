const { validateSchema } = require("../lib/joi/validateSchema");

const validateInputsMW = (schema) => async (req, res, next) => {
  const data = req.body;

  try {
    await validateSchema(schema, data);
    next();
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
};

module.exports = { validateInputsMW };
