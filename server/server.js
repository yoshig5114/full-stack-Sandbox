const express = require('express');
const config = require('./config');
const app = express();//this is an instance of express method


// middleware
app.use(express.json());

app.get("/", (request, response) => {
    response.write("<H1> Home for SuperHero App </H1>");
    response.status(200);
    response.end();
});

app.post("/heroes", (req, res) => {
    const responseBody = {
        body: req.body,
        url: req.url,
        method: req.method,
    }
    res.json(responseBody);
    res.end();
})

app.get("/heroes", (req, res) => {
    res.write("<H2> Batman </H2>");
    res.status(200);
    res.end();
})

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
})