import * as express from "express";

const app = express();

app.get("/", (res, req) => {
    req.send("wtf");
});

app.listen(80);