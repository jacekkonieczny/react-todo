import express, {Request, Response} from "express";
import cors from "cors";
import router from "./todoRoutes";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 6969;

app.get("/", (req: Request, res: Response) => {
    res.send("backend is working!!!!!!!");
});

app.use("/api", router);

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
});