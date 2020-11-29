import * as express from "express";
import * as routes from "./routes/routes";

const app = express();
const apiBase = "/api/v1";

app.use(express.urlencoded({ extended: true }));

app.post(`${apiBase}/post/new`, routes.newPost);

app.get("/", (res, req) => {
    req.send("wtf");
});

app.listen(80);