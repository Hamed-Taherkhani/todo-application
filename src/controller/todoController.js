const TodoModel = require("../model/todoModel");

const get_todo_list = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const length = await TodoModel.countDocuments();
    const docs = await TodoModel.find()
      .limit(limit)
      .skip((page - 1) * limit);

    return res.status(200).json({
      totalPage: Math.ceil(length / limit),
      page,
      totalTodos: length,
      todosPerPage: limit,
      todos: docs,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("Something went wrong on server! Please try again.");
  }
};

const post_new_todo = async (req, res) => {
  const { title } = req.body;

  if (!title)
    return res.status(400).send("Title must have at least one letter");

  try {
    const todoDoc = await TodoModel.create({ title });
    return res.status(201).json(todoDoc);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("Something went wrong on server! Please try again.");
  }
};

module.exports = {
  get_todo_list,
  post_new_todo,
};
