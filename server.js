import express from "express";
import { dbConnect } from "./middlewares/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/userRoutes.js";
import session from "express-session";
import connectRedis from "connect-redis";
import redisClient from "./middlewares/redis-config.js";
import passport from "./middlewares/passport-config.js";

const app = express();

app.use(dbConnect);
// app.use(redisConfig.connectToRedis);

const redisStore = new connectRedis({client: redisClient});

app.use(
    session({
      store: redisStore,
      saveUninitialized: false,
      secret: "Vikas@01",
      resave: false,
      cookie: {
        maxAge: 604800000,
        secure: true,
        httpOnly: true,
        sameSite: 'strict'
      },
    })
);

router.use(passport.initialize());
router.use(passport.session());

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb", strict: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cors({
    origin: "http://localhost:3001",
    credentials: true,
}));

router.get('/', (req, res) => {
    res.send('Hello');
  });

// app.use("/",router);

export default app;
