require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { Pool } = require("pg");
const db = require("./db");

const app = express();

const port = process.env.PORT || 5000; // .env PORT variable or default value if not available
app.listen(port, () => {
    console.log(`Server is up and listening on port ${ port }`);
});

// Middleware //
app.use(morgan("dev"));
app.use(express.json());

// APIs //

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows
            }
        });
    } catch (e) {
       console.error(e.message); 
    }
});

// Get a specific restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        });
    } catch (e) {
        console.error(e.message);
    }

});

// Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    try {
        const { name, location, price_range } = req.body;
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *", [name, location, price_range]);
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        });
    } catch (e) {
        console.error(e.message);
    }
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, location, price_range } = req.body;
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *", [name, location, price_range, id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        });
    } catch (e) {
        console.error(e.message);
    }
});

// Delete a restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const results = await db.query("DELETE FROM restaurants WHERE id = $1 RETURNING *", [id]);
        res.status(204).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        });
    } catch (e) {
        console.error(e.message);
    }
});
