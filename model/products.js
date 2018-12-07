const mongoose = require("mongoose")
const Schema = mongoose.SchemaType

const ProductSchema = new Schema({
  name:{
      type:String,
      required:true,
  },
  description: String,
  price:{
      type: Number,
      required: true,
  },
  barcode: String,
  quantity:{
      type: Number,
      default: 0
  }
})

const Product = mongoose.model("product", ProductSchema)

export default Product