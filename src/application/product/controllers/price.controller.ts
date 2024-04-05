import { Request, Response } from "express";
import { PriceService } from "../services/price.service";

export class PriceController {
    constructor(private _priceService: PriceService) {}

    public async getPriceSpecial(req: Request, res: Response) {
        const { id, name } = req.params;
        try {
          const price = await this._priceService.getPriceSpecial(id, name);
          res.json(price);
        } catch (error) {
          throw new Error("PRODUCT_NOT_FOUND");
        }
    }
}