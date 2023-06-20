import express from 'express';
import { addBillController, getAllBills } from '../controllers/billController.js';
const router = express.Router();
router.post("/add-bill",addBillController);
router.get("/",getAllBills);

export default router;