import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
/* Creating a schema for the product model. */
const productModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
productModel.plugin(mongoosePaginate);
const Product = mongoose.model("product", productModel);
export default Product;
