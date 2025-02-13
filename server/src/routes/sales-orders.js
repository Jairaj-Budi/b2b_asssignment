import express from 'express';
import SalesOrderController from '../controllers/SalesOrderController.js';

const router = express.Router();

router.get('/', SalesOrderController.getAllSalesOrders);
router.post('/', SalesOrderController.createSalesOrder);
router.get('/:id', SalesOrderController.getSalesOrderById);
router.put('/:id', SalesOrderController.updateSalesOrder);
router.delete('/:id', SalesOrderController.deleteSalesOrder);

export default router;