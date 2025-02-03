const express = require('express');
const orderController = require('../controller/orderController');
const router = express.Router();

// GET all orders
router.get('/orders', orderController.getAllOrders);

// GET single order by ID
router.get('/orders/:orderId', orderController.getSingleOrder);

// ADD new order
router.post('/orders', orderController.addNewOrder);

// UPDATE order details
router.put('/orders/:orderId', orderController.updateOrder);

// DELETE order
router.delete('/orders/:orderId', orderController.deleteOrder);

module.exports = router;
