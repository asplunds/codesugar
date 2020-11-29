import * as express from "express";
import DB from "../../database";

import * as validation from "./validations";

const route = async (req:express.Request, res:express.Response) => {

    const database = await DB;
    
    /* await database
        .collection("test")
        .insertOne({
            test: true
        }); */

    const checklist = [
        {
            name: "TITLE",
            cb: validation.title
        }
    ]

    res.send(req.query)

}

export default route;