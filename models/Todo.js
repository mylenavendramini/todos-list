const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
