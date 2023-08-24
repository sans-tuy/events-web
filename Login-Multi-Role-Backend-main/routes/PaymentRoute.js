import express from "express";
import {
  getBalancePayment,
  createInvoice,
  getInvoice,
  notifInvoice,
} from "../controllers/Payment.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/balance", verifyUser, getBalancePayment);
router.get("/invoices/:invoiceId", verifyUser, getInvoice);
router.post("/invoice", verifyUser, createInvoice);
router.post("/notifInvoice", notifInvoice);

export default router;
