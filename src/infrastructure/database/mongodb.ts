import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const DB_HOTS = process.env.DB_HOTS;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

export class MongoDB {
    private uri = `${DB_HOTS}://${DB_USER}:${DB_PASS}@ac-aemgtkt-shard-00-02.unqyghm.mongodb.net/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`;
    private client = new MongoClient(this.uri ?? '', {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
    constructor() {}
    async connect() {
      return await this.client.connect();
    }

    getDb() {
        return this.client.db(DB_NAME);
    }
}