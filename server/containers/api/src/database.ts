import { MongoClient, Db } from "mongodb";

const uri = "mongodb://mongo:27017";
const db = "codesugar";

const client = new MongoClient(uri);

const DB:Promise<Db> = (async (db:string) => {
    
    await client.connect();

    const database = client.db(db);

    return database;

})(db);

export default DB;