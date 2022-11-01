import express from "express"
import productsRoutesDB from "./routes/product.routes.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv"

const app = express();
app.use(express.json())
app.use(productsRoutesDB);
const port = process.env.PORT || 9000;
dotenv.config()

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{console.log("conectado a la base de datos ,HAPPY HACKING!")})
    .catch((error)=> console.log(error, "error mongoDB"))

app.listen(port, ()=> {
    console.log(`servidor levantado en el puerto ${port}`)
})