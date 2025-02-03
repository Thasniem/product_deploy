const Order = require('../model/order');

// GET all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// GET single order by orderId
exports.getSingleOrder = async (req, res) => {
    try {
        const order = await Order.findOne({ orderId: req.params.orderId });
        if (!order) {
            return res.status(404).json({ msg: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// ADD new order
exports.addNewOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// UPDATE order details
exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findOneAndUpdate(
            { orderId: req.params.orderId },
            req.body,
            { new: true }
        );
        if (!updatedOrder) {
            return res.status(404).json({ msg: 'Order not found' });
        }
        res.json(updatedOrder);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// DELETE order
exports.deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findOneAndDelete({ orderId: req.params.orderId });
        if (!deletedOrder) {
            return res.status(404).json({ msg: 'Order not found' });
        }
        res.json({ msg: 'Order deleted', deletedOrder });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};
