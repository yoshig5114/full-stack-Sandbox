const express = require("express");
const router = express.Router();
//const db = require("../db"); create controller then import



router.get("/", (request, response) => {
    response.write("<H1> Home for SuperHero App </H1>");
    response.status(200);
    response.end();
});

module.exports = router;

// router.get("/superheroes", (request, response) => {
//     response.write("<H1> Super Heroes </H1>");
//     response.status(200);
//     response.end();
// }