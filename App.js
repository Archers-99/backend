import express from "express";
import cors from 'cors';
import { userRoutes } from "./routes/user-routes.js";

const app = express(); 
app.use(cors());
app.use(express.static("public"))
app.use(express.json()) 


const PORT=process.env.PORT || 1234
const server = app.listen(PORT, (err) => {
  if (err) {
    console.log("server crashed");
    throw err;
  } else {
    console.log("server is running", PORT);
  }
});