import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    name: String,
    price: Number,
    description: String,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);

export default model("Product", ProductSchema);
