import { Schema, model, Document } from "mongoose";

interface ProductInterface extends Document {
  name: String;
  price: Number;
  description: String;
  quantity: Number;
}

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);

export default model<ProductInterface>("Product", ProductSchema);
