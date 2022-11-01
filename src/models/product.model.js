import  mongoose  from "mongoose";

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
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true, 
    },
    price: {
        type: Number,
        required: true,
    }
})
const Product = mongoose.model("product", productModel)
export default Product;