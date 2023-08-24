import express from "express";
import { createOrder, getOrders } from "../controllers/Order.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/orders", verifyUser, getOrders);
router.post("/order", verifyUser, createOrder);

export default router;
