import {Router} from "express";
import { postNewProduct, getAllProduct , deleteProductID} from "../controllers/product.controller.js";

const router = Router();

/* The above code is creating a router for the API. */
router.post("/products", postNewProduct)
router.get("/get/products", getAllProduct)
router.delete("/delete", deleteProductID)

export default router;