const { Router } = require("express");
const todoController = require("../controller/todoController");

const todoRouter = Router();

todoRouter.post("/", todoController.post_new_todo);

module.exports = todoRouter;
