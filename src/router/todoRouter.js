const { Router } = require("express");
const todoController = require("../controller/todoController");

const todoRouter = Router();

todoRouter.get("/", todoController.get_todo_list);
todoRouter.post("/", todoController.post_new_todo);

module.exports = todoRouter;
