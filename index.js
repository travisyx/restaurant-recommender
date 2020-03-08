const express = require("express");
const app = express();
const path = require("path");

// Makes the html folder static
app.use(express.static(path.join(__dirname, "/html")));
app.use(express.json());

// Runs the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
