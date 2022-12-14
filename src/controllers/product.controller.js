import { parse } from "dotenv";
import Product from "../models/product.model.js";

function changeStringUpperCase(word) {
  return word[0].toUpperCase() + word.slice(1);
}
/**
 * It creates a new product and saves it to the database. */
export const postNewProduct = async (req, res) => {
  const product = new Product(req.body);
  await product
    .save()
    .then((data) => res.json(data))
    .catch((error) =>
      res.json({
        message: error,
      })
    );
};
/**
 * If the filter is "allProduct" then return all products, otherwise return all products with the
  filter category.
 */
export const getAllProduct = async (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const filter = req.query.filter;
  if (filter === "allProducts") {
    try {
      const allInfo = await Product.paginate({}, { limit, page });
      res.status(200).json(allInfo);
    } catch (error) {
      res.send(error);
    }
  } else {
    try {
      const allInfoWithCategory = await Product.paginate(
        { category: filter },
        { limit, page }
      );
      await res.status(200).json(allInfoWithCategory);
    } catch (error) {
      res.send(error);
    }
  }
};

export const getProductId = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
    const productId = await Product.findById(id);
    res.status(200).json(productId);
  } catch (error) {
    res.send(error);
  }
};

export const getProductName = async (req, res) => {
  const product = req.query.name.toString();
  const parseName = changeStringUpperCase(product)
  console.log(product)
  try {
    const productName = await Product.findOne({
      name : parseName
    });
    res.status(200).json(productName);
  } catch (error) {
    res.send(error);
  }
};

/**
 * It deletes a product from the database based on the product name. */
export const deleteProductID = async (req, res) => {
  const removeProduct = req.query.product;
  console.log(removeProduct);
  Product.deleteOne({
    name: removeProduct,
  })
    .then((data) => res.send(data))
    .catch((error) =>
      res.json({
        message: error,
      })
    );
};
