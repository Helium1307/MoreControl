import { Request, Response } from "express";
import ProductModel from "../Models/Product";

class ProductController {
  async create(req: Request, res: Response): Promise<Response> {
    const product = await ProductModel.create(req.body);

    return res.status(200).json(product);
  }
  public async index(req: Request, res: Response): Promise<Response> {
    const products = await ProductModel.find();

    return res.json(products);
    // try {
    //   const products = await ProductModel.find();

    //   return res.status(200).json({ products });
    // } catch (err) {
    //   return res.status(500).send({
    //     error: "Registration Failed",
    //     message: err,
    //   });
    // }
  }

  async show() {}

  async update() {}

  async destroy() {}
}

export default new ProductController();
