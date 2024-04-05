import { Collection, ObjectId } from "mongodb";
import { PriceSpecial, ReturnDataPrice } from "../../../domain/models/price.model";
import { PricePersistence } from "../../../ports/persistence/price/price.persistence";
import { MongoDB } from "../../../infrastructure/database/mongodb";
import { Product } from "../../../domain/models/products.model";

export class PriceRepository implements PricePersistence {
  private _collection!: Collection<ReturnDataPrice>;
  private _collectionProduct!: Collection<Product>;
  constructor(private _db: MongoDB) {
    this._collection = this._db.getDb().collection<ReturnDataPrice>("discount");
    this._collectionProduct = this._db.getDb().collection<Product>("products");
  }
  async getPriceSpecial(id: string, name: string): Promise<PriceSpecial> {
    try {
      const searchProduct = await this._collectionProduct.findOne({ name, stock: true });
      const product = searchProduct ?? { _id: new ObjectId(''), brand: '', price: 0 };
      const discount = await this._collection.findOne({ clientid: new ObjectId(id), productid: product._id });
      let newDiscount: PriceSpecial = {
        brand: product.brand,
        price: product.price - ((product.price * (discount ? discount.discount : 0)) / 100)
      }
      return newDiscount;
    } catch (error) {
      throw new Error("NOT_INSERT_PRODUCT");
    }
  }
}
