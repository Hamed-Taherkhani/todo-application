const TodoModel = require("../model/todoModel");

const post_new_todo = async (req, res) => {
  const { title } = req.body;

  if (!title)
    return res.status(400).send("Title must have at least one letter");

  try {
    const todoDoc = await TodoModel.create({ title });
    return res.status(200).json(todoDoc);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("Something went wrong on server! Please try again.");
  }
};

module.exports = {
  post_new_todo,
};
