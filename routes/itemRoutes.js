
import express from 'express';
import {getItemController,addItemController,getItemByCategoryController,editItemController, deleteItemController} from '../controllers/itemController.js'
const router = express.Router();

// method - get

router.get('/get-items',getItemController);
router.post('/add-item',addItemController);
router.put('/edit-item',editItemController)
router.get('/get-items/:category',getItemByCategoryController);
router.delete('/delete-item/',deleteItemController)

export default router;