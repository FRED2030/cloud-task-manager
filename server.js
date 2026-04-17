require("dotenv").config();

const express = require("express");
const cors = require("cors");
require("./app"); // just connect DB

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Task API is running" });
});

// Schema
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false }
});

const Task = mongoose.model("Task", TaskSchema);

// ROUTES
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "API is alive" });
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const task = new Task({ title: req.body.title });
  await task.save();
  res.json(task);
});

// START SERVER (NO DB WAIT)
app.listen(3000, "0.0.0.0", () => {
  console.log("🚀 Server running on port 3000");
});
