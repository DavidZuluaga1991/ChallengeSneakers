import { Utils } from "../../../common/middlewares/utils.middleware";
import { ClientPersistence } from "../../../ports/persistence/client/client.persistence";

export class ClientService {
    private utils: Utils = new Utils();
    constructor(private _clientPersistence: ClientPersistence) {}
}