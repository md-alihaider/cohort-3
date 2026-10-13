import express from "express";
import productModel from "../models/product.model.js";
import razorpayInstance from "../config/razorpay.js";
import paymentModel from "../models/payment.model.js";

const router = express.Router();

/**
 * @method POST
 * @route /api/payment/:productId/order
 * @description Create an order for the specified product wth razorpay
 * @access Public
 */

router.post("/:productId/order", async (req, res) => {
  const { productId } = req.params;

  const product = await productModel.findById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const order = await razorpayInstance.orders.create({
    amount: product.price.amount * 100,
    currency: product.price.currency,
    receipt: `order_receipt_${productId}`,
    notes: {
      productId: productId,
      productTitle: product.title,
    },
  });

  const payment = new paymentModel({
    orderId: order.id,
    productId: productId,
    amount: product.price.amount,
    currency: product.price.currency,
    status: "pending",
  });

  return res.status(201).json(payment);

});

export default router;
