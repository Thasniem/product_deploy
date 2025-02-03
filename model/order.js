const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    bookId: [{ type: String, required: true }],
    userId: { type: String, required: true }
});

module.exports = mongoose.model("Order", orderSchema);
