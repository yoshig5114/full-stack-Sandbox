const express = require('express');
const app = express();//this is an instance of express method
const PORT = 3001;

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})