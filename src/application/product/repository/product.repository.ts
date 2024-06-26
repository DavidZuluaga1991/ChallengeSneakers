import { Collection, Db, ObjectId } from "mongodb";
import { Product } from "../../../domain/models/products.model";
import { ProductPersistence } from "../../../ports/persistence/product/product.persistence";
import { MongoDB } from "../../../infrastructure/database/mongodb";
import { Pagination } from "../../../common/models/pagination.model";
import { Filter } from "../../../common/models/filter.model";

export class ProductRepository implements ProductPersistence {
  private _collection!: Collection<Product>;
  constructor(private _db: MongoDB) {
    this._collection = this._db.getDb().collection<Product>("products");
  }

  public async getAllProducts(
    filter: Filter[],
    pagination: Pagination
  ): Promise<Product[]> {
    return await this._collection
      .find(this.generateFilter(filter))
      .skip(pagination.skip ?? 1)
      .limit(pagination.pageSize)
      .toArray();
  }

  getProductById(id: string): Promise<Product | null> {
    return this._collection.findOne({ _id: new ObjectId(id) });
  }

  public async createProduct(product: Product): Promise<Product> {
    try {
      const insert = await this._collection.insertOne(product);
      return product;
    } catch (error) {
      throw new Error("NOT_INSERT_PRODUCT");
    }
  }

  updateProduct(id: string, product: Product): Promise<Product | null> {
    return this._collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: product },
      { returnDocument: "after" }
    );
  }

  deleteProduct(id: string): Promise<Product | null> {
    return this._collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { hasdeleted: true } },
      { returnDocument: "after" }
    );
  }

  countProducts(filter: Filter[], pagination: Pagination): Promise<number> {
    return this._collection.countDocuments(this.generateFilter(filter));
  }

  private generateFilter(filter: Filter[]) {
    const infoFilters = filter.map((filter: Filter) => {
      // return { [filter.key]: { $regex: filter.value, $options: "i" } };
      return { [filter.key]: filter.value };
    });
    let tempFilter = {};
    if (infoFilters.length > 0) {
      tempFilter = {
        $and: [...infoFilters],
      };
    }

    return tempFilter;
  }
}
