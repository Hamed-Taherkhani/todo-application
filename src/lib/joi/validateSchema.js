const validateSchema = (schema, data) => {
  return schema.validateAsync(data);
};

module.exports = { validateSchema };
