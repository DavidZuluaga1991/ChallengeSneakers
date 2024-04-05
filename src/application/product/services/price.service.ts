import { Utils } from "../../../common/middlewares/utils.middleware";
import { PriceSpecial } from "../../../domain/models/price.model";
import { PricePersistence } from "../../../ports/persistence/price/price.persistence";

export class PriceService {
    private utils: Utils = new Utils();
    constructor(private _pricePersistence: PricePersistence) {}

    getPriceSpecial(id: string, name: string): Promise<PriceSpecial | null> {
        return this._pricePersistence.getPriceSpecial(id, name);
    }
}