import express from 'express';
import { addBillController, getAllBills } from '../controllers/billController.js';
import { verifyToken } from '../utils/verifyToken.js';
const router = express.Router();
router.post("/add-bill",verifyToken, addBillController);
router.get("/",verifyToken,getAllBills);

export default router;