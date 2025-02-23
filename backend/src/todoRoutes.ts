import {Router, Request, Response} from 'express';
import db from "./config/db";

const router = Router();

router.get("/todos", (req: Request, res: Response) => {
    db.query("SELECT * FROM todos", (err, result) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
});

router.post("/todos", (req: Request, res: Response) => {
    const {id, title, description, status} = req.body;

    db.query("INSERT INTO todos (id, title, description, status) VALUES (?, ?, ?, ?)", [id, title, description, status], (err) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            res.json({id, title, description, status});
        }
    });
});

router.delete("/todos/:id", (req: Request, res: Response) => {
    const {id} = req.params;
    db.query("DELETE FROM todos WHERE id = ?", [id], err => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            res.json({message: "todo deleted"});
        }
    });
});

router.put("/todos/:id", (req: Request, res: Response) => {
    const {id} = req.params;
    const {title, description, status} = req.body;

    db.query("UPDATE todos SET title = ?, description = ?, status = ? WHERE id = ?", [title, description, status, id], (err) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            res.json({message: "todo updated"});
        }
    });
});

export default router;

