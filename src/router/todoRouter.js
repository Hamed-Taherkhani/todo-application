const { Router } = require("express");
const todoController = require("../controller/todoController");
const { validateInputsMW } = require("../middleware/validateInputsMW");
const { mongoIdListSchema } = require("../lib/joi/mongoIdListSchema");

const todoRouter = Router();

todoRouter.get("/", todoController.get_todo_list);
todoRouter.post("/", todoController.post_new_todo);
todoRouter.delete(
  "/",
  validateInputsMW(mongoIdListSchema),
  todoController.delete_todo
);

module.exports = todoRouter;
