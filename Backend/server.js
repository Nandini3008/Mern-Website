import express from 'express';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';


const app = express();

app.get('/', (req, res) => {
    res.send('Hello My World!');
});

app.listen(5000, () =>{
    connectDB();
    console.log("Server started at http://localhost:5000");
});
