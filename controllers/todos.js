const { response } = require("express");
const Todo = require("../models/Todo");

module.exports = {
  getTodos: async (request, response) => {
    try {
      // because of mongoose we don't need to convert it into array (toArray())
      const todoItems = await Todo.find();
      const itemsLeft = await Todo.countDocuments({ completed: false });
      response.render("todos.ejs", { todos: todoItems, left: itemsLeft });
    } catch (error) {
      console.log(error);
    }
  },
  createTodo: async (request, response) => {
    try {
      // todo and completed are describled in the Schema
      await Todo.create({ todo: request.body.todoItem, completed: false });
      console.log("Todo has been added!");
      response.redirect("/todos");
    } catch (error) {
      console.log(error);
    }
  },
  deleteTodo: async (request, response) => {
    console.log(request.body.todoIdFromJSFile);
    try {
      await Todo.findOneAndDelete({ _id: request.body.todoIdFromJSFile });
      console.log("Todo has been deleted!");
      response.json("Deleted todo");
    } catch (error) {
      console.log(error);
    }
  },
  markComplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
};
