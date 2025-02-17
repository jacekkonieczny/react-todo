import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 6969;

app.get("/", (req, res) => {
    res.send("backend is working!!!!!!!");
})

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
})