const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");

// Here I am at /todos, so I just need to type the next thing, like "/" or "/createTodo"
router.get("/", todosController.getTodos);

router.post("/createTodo", todosController.createTodo);
router.put("/markComplete", todosController.markComplete);
router.put("/markIncomplete", todosController.markIncomplete);
router.delete("/deleteTodo", todosController.deleteTodo);

module.exports = router;
