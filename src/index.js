import express from "express";
import cors from "cors";
import productsRoutesDB from "./routes/product.routes.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

const app = express();
/* This is a CORS configuration. */
const corsOptions = {
  origin: /* "https://heycurvys.com"  */"http://localhost:5173",
  optionsSuccessStatus: 200,
};
/*Middlewares*/
app.use(express.json());
app.use(cors(corsOptions));
app.use(productsRoutesDB);
const port = process.env.PORT || 9000;
dotenv.config();

/* Connecting to the database. */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("conectado a la base de datos ,HAPPY HACKING!");
  })
  .catch((error) => console.log(error, "error mongoDB"));

/* Listening to the port 9000. */
app.listen(port, () => {
  console.log(`servidor levantado en el puerto ${port}`);
});
