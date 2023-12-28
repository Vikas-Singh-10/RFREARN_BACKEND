import express from "express";
import { dbConnect } from "./middlewares/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/userRoutes.js";

const app = express();

app.use(dbConnect);
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb", strict: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cors());

app.use("/",router);

export default app;
