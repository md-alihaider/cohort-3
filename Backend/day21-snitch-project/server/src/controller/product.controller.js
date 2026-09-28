import productModel from "../models/product.model.js";
import { uploadFile } from "../services/storage.service.js";

export const createProduct = async (req, res) => {
  console.log(req.body);
  console.log(req.files);

  const uploadPromises = req.files.map((file) => {
    return uploadFile({
      buffer: file.buffer,
      fileName: file.originalname,
    });
  });

  const responses = await Promise.all(uploadPromises);
  const filesUrls = responses.map((response) => response.url);

  console.log(filesUrls);
  const { title, description, price, sizes } = req.body;

  const product = await productModel.create({
    title: title,
    description: description,
    price: {
      amount: price.amount,
      currency: price.currency,
    },
    sizes: sizes,
    images: filesUrls,
    seller: req.user.userId,
  });

  res.status(201).json({
    message: "Product created successfully",
    data: {
      product,
    },
  });
};

export const getAllProduct = async (req, res) => {
  const product = await productModel.find({ published: true });

  res.status(200).json({
    message: "Product data fetched successfully",
    data: {
      product,
    },
  });
};

export const getAllProductToSeller = async (req, res) => {
  const product = await productModel.find({}); //find all published and unpublished

  res.status(200).json({
    message: "Product data fetched successfully",
    data: {
      product,
    },
  });
}

export const unlistProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findById(id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // make product unlisted
  await productModel.findByIdAndUpdate(id, {
    published: false,
  });

  res.status(200).json({
    message: "Product unpublished successfully",
  });
};
export const listProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findById(id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // make product unlisted
  await productModel.findByIdAndUpdate(id, {
    published: true,
  });

  res.status(200).json({
    message: "Product published successfully",
  });
};
