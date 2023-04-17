import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv"
import "./db/conn.js";
import router from "./routes/router.js";

dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.use(router)


const port = 9002;

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})