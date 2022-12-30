import {Router} from "express";
import { postNewProduct, getAllProduct,getProductId , deleteProductID, getProductName} from "../controllers/product.controller.js";

const router = Router();

/* The above code is creating a router for the API. */
router.post("/products", postNewProduct)
router.get("/get/products", getAllProduct)
router.get("/get/products/:id", getProductId)
router.get("/get/name", getProductName)
router.delete("/delete", deleteProductID)

export default router;