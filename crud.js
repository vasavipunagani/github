const express = require("express");

const app = express();

const data = [];
let id = 1;

app.use(express.json());

// Create
app.post("/items", (req, res) => {
    const item = { id: id++, name: req.body.name };
    data.push(item);
    res.status(201).json(item);
});

// Read
app.get("/items", (req, res) => res.json(data));

// Update
app.put("/items/:id", (req, res) => {
    const item = data.find(i => i.id === +req.params.id);

    if (item) {
        item.name = req.body.name;
        res.json(item);
    } else {
        res.status(404).send("Not found");
    }
});

// Delete
app.delete("/items/:id", (req, res) => {
    const idx = data.findIndex(i => i.id === +req.params.id);

    if (idx !== -1) {
        data.splice(idx, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send("Not found");
    }
});

// Start server
app.listen(3500, () => {
    console.log("Server running at http://localhost:3500");
});