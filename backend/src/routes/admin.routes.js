import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/stats", protect, isAdmin, (req, res) => {
  res.json({ message: "Admin dashboard data" });
});


export default router;

