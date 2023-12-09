import express from "express";
import { dbConnect } from "./middlewares/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import {user} from "./controllers/userController.js"

const app = express();
const PORT = 3000;

await dbConnect();

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb", strict: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cors());



app.get("/",async(_,res)=>{
    await user();
    res.send("Hello Welcome to RFREARN")
})

// app.listen(PORT, () => console.log(`----SERVER STARTED ON PORT ${PORT}----`));

export default app;
