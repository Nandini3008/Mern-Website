import Product from "../models/product.models.js";
import mongoose from "mongoose";

export const createProduct = async (req, res) => {
  const product = req.body;

  if (
    !product.name ||
    !product.description ||
    !product.price ||
    !product.imageUrl ||
    !product.category
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error creating product:", error.messaage);
    res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Error fetching products" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid product ID" });
  }
  try {
    const product = await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).json({ message: "Error deleting product" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid product ID" });
  }

  if (
    !updatedProduct.name ||
    !updatedProduct.description ||
    !updatedProduct.price ||
    !updatedProduct.imageUrl ||
    !updatedProduct.category
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const product = await Product.findByIdAndUpdate(id, updatedProduct, {
      new: true,
    });
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ message: "Error updating product" });
  }
};
