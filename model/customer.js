const mongoose = require("mongoose")
const Schema = mongoose.SchemaType

const CustomerSchema  = new Schema({
   name:{
       type: String,
       required: true,
   },
   address:{
       type: String,
       required: true,
   },
   purchases:{
       type: Array,
   },
   password: String
})

const Customer = mongoose.model("customer", CustomerSchema)

export default Customer