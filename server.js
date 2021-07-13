import express from "express";

import connectDB from "./config/db.js";

// import urlRoutes from "./routes/url.routes.js";

connectDB();

const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("REST API Running"));
// app.use("/api/urls", urlRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));
