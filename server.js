const express = require("express");
const db = require("./middlewares/db");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;


db.connectToDatabase();

app.use(express.json());
app.use(bodyParser.json({limit:"50mb",strict:false}));
app.use(bodyParser.urlencoded({limit:"50mb",extended:true,parameterLimit:50000}));
db.connectToDatabase();
app.use(cors());

app.listen(PORT, () => console.log(`----SERVER STARTED ON PORT ${PORT}----`));











