require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Task Schema
const TaskSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false }
});

const Task = mongoose.model("Task", TaskSchema);

// ROUTES

// Get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error("GET /tasks error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Create task
app.post("/tasks", async (req, res) => {
  try {
    const task = new Task({ title: req.body.title });
    await task.save();
    res.json(task);
  } catch (err) {
    console.error("POST /tasks error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Update task
app.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (err) {
    console.error("PUT /tasks error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete task
app.delete("/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error("DELETE /tasks error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Global error handlers
process.on("uncaughtException", err => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", err => {
  console.error("Unhandled Rejection:", err);
});

// ✅ Start ONLY after DB connects
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas connected");

    app.listen(3000, "0.0.0.0", () => {
      console.log("🚀 Server running on port 3000");
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
  });
