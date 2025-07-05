import express from 'express';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import Product from './models/product.models.js'; // Import the Product model


const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello My World!');
// });

app.use(express.json()); // Middleware to parse JSON bodies

app.post("/products", async (req, res) => {
    const product = req.body;

    if (!product.name || !product.description || !product.price || !product.imageUrl || !product.category) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({success: true,data: newProduct});

    } catch (error) {
        console.error("Error creating product:", error.messaage);
        res.status(500).json({ message: error.message });
    }
});

app.listen(5000, () =>{
    connectDB();
    console.log("Server started at http://localhost:5000");
});
