import { PriceSpecial } from "../../../domain/models/price.model";

export interface PricePersistence {
    getPriceSpecial(id: string, name: string): Promise<PriceSpecial | null>;
}