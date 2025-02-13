import express from 'express';
import ProductController from '../controllers/ProductController.js';

const router = express.Router();

// Get all products
router.get('', ProductController.getAllProducts);

// Get single product
router.get('/:id', ProductController.getProductById);

// Create product
router.post('', ProductController.createProduct);

// Update product
router.put('/:id', ProductController.updateProduct);

// Delete product
router.delete('/:id', ProductController.deleteProduct);

export default router;