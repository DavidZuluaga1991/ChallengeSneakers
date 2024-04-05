import { Filter } from "../../../common/models/filter.model";
import { Pagination } from "../../../common/models/pagination.model";
import { Client } from "../../../domain/models/client.model";

export interface ClientPersistence {
  getAllProducts(filter: Filter[], pagination: Pagination): Promise<Client[]>;
  getProductById(id: string): Promise<Client | null>;
  createProduct(Product: Client): Promise<Client>;
  updateProduct(id: string, product: Client): Promise<Client | null>;
  deleteProduct(id: string): Promise<Client | null>;
  countProducts(filter: Filter[], pagination: Pagination): Promise<number>;
}