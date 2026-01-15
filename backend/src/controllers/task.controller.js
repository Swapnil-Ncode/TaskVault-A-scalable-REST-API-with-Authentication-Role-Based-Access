import Task from "../models/task.model.js";
import { taskSchema } from "../validators/task.validator.js";

export const createTask = async (req, res) => {
  const { error } = taskSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });

  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      user: req.user.id
    });
    res.status(201).json(task);
  } catch {
    res.status(500).json({ message: "Task create failed" });
  }
};

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Only owner or admin can update
    if (task.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not allowed" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTask);
  } catch {
    res.status(500).json({ message: "Update failed" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Only owner or admin can delete
    if (task.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not allowed" });
    }

    await task.deleteOne();
    res.json({ message: "Task deleted" });
  } catch {
    res.status(500).json({ message: "Delete failed" });
  }
};
