import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import cors from "cors";
import routes from "../src/routes/documents";
import { Data } from "./Data";

const API_PORT = 5000;
const app = express();

// const router = express.Router();

const dbRoute =
  "mongodb://lnfernandobr:password1234@ds221435.mlab.com:21435/challenger-front-end";

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("Conectado ao banco de dados"));

db.on(
  "error",
  console.error.bind(console, "Conexção com banco de dados falhou")
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));


app.use("/api", routes);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
