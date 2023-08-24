import express from "express";
import multer from "multer";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();
const upload = multer({ dest: "uploads/products" });

router.get("/products", verifyUser, getProducts);
router.get("/products/:id", verifyUser, getProductById);
router.post("/products", verifyUser, createProduct);
router.patch("/products/:id", verifyUser, updateProduct);
router.delete("/products/:id", verifyUser, deleteProduct);

export default router;
