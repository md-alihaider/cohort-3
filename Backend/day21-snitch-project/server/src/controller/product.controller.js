import productModel from "../models/product.model.js";
import { uploadFile } from "../services/storage.service.js";

export const createProduct = async (req, res) => {
  console.log(req.body);
  console.log(req.files);

  const filesUrls = [];

  for (let i = 0; i < req.files.length; i++) {
    const response = await uploadFile({
      buffer: req.files[i].buffer,
      fileName: req.files[i].originalname,
    });
    filesUrls.push(response.url);
  }

  console.log(filesUrls);
  const {title,description,price,sizes} = req.body

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
      product
    }
  });
};


export const getAllProduct = async (req, res) => {
  const product = await productModel.find()

  res.status(200).json({
    message: "Product data fetched successfully",
    data: {
      product
    }
  })
}