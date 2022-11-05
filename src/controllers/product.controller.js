import Product from "../models/product.model.js";

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
export const getAllProduct = async (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  Product.paginate({}, { limit, page })
    .then((data) => res.json(data))
    .catch((error) =>
      res.json({
        message: error,
      })
    );
};
export const getByCategory = async (req, res) => {
  const category = req.query.category;
	const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  Product.paginate({category : category},{ limit, page })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};
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
