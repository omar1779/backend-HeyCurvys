import {Router} from "express";
import { postNewProduct, getAllProduct , getByCategory, deleteProductID} from "../controllers/product.controller.js";

const router = Router();

router.post("/products", postNewProduct)
router.get("/get/products", getAllProduct)
router.get("/bycategory", getByCategory)
router.delete("/delete", deleteProductID)

export default router;