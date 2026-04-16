const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Task Schema
const TaskSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false }
});

const Task = mongoose.model("Task", TaskSchema);

// ROUTES

// Get all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Create task
app.post("/tasks", async (req, res) => {
  const task = new Task({ title: req.body.title });
  await task.save();
  res.json(task);
});

// Update task
app.put("/tasks/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// Delete task
app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
