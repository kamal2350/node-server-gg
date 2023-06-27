
import express from 'express';
import {getItemController,addItemController,getItemByCategoryController,editItemController, deleteItemController} from '../controllers/itemController.js'
import { verifyAdmin, verifyToken } from '../utils/verifyToken.js';
const router = express.Router();

// method - get

router.get('/get-items',verifyToken,getItemController);
router.post('/add-item',verifyToken,addItemController);
router.put('/edit-item',verifyToken,editItemController)
router.get('/get-items/:category',verifyToken,getItemByCategoryController);
router.delete('/delete-item/',verifyAdmin,deleteItemController)

export default router;