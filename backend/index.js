import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBUrl } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for passing request body
app.use(express.json());

//Middleware to handle CORS policy
//Option 1: Allow all origin withs with default cors(*)
app.use(cors());
//Option 2:Allow Custom origins
/*
app.use(cors({
  origin:'https://localhost:3300',
  method: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type'],
})
);
*/
app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to Bookstore");
});

app.use('/books',booksRoute);


app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log("connected to databse");
  })
  .catch((err) => {
    console.log(err);
  });
