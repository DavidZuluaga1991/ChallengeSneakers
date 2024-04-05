import { Filter } from "../../../common/models/filter.model";
import { Pagination } from "../../../common/models/pagination.model";
import { Product } from "../../../domain/models/products.model";

export interface ProductPersistence {
  getAllProducts(filter: Filter[], pagination: Pagination): Promise<Product[]>;
  getProductById(id: string): Promise<Product | null>;
  createProduct(Product: Product): Promise<Product>;
  updateProduct(id: string, product: Product): Promise<Product | null>;
  deleteProduct(id: string): Promise<Product | null>;
  countProducts(filter: Filter[], pagination: Pagination): Promise<number>;
}
